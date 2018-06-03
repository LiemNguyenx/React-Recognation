import React from 'react';
import $ from 'jquery';
import ReactDOM from 'react-dom';
import NavBarHeader from './NavBarHeader.jsx';
import NavBarStaticSide from './NavBarStaticSide.jsx';
import NavBarTopRight from './NavBarTopRight.jsx';
import PersonIdentified from './PersonIdentified.jsx';
import PersonNotIdentified from './PersonNotIdentified.jsx';
import StatusBar from './StatusBar.jsx';
import Statistical from './Statistical.jsx';
import * as myAddress from '../config_port_address.js';

var contain;
var timer;
class Appv2 extends React.Component {
    constructor(props) {
        super(props);
        contain = this;
        this.state = {
            is_statistical: false,
            entity: [],
            status: ''
        };
        this.toggleButton = this.toggleButton.bind(this)
    };
    commonElements(arr1, arr2) {
        var newArr = [];
        newArr = arr1.filter(function (v) { return arr2.indexOf(v) >= 0; })
        newArr.concat(arr2.filter(function (v) { return newArr.indexOf(v) >= 0; }));

        return newArr;
    };
    deleteUser(id) {
        var index = contain.state.entity.findIndex(function (obj) {
            return obj.image.imageName[0] === id;
        });
        console.log('ID delete: ' + id);
        this.setState({
            entity: contain.state.entity.splice(index, 1),
            status: 'Delete user successful with ID: ' + id
        })
    };
    updateUser(user, userid) {
        var index = contain.state.entity.findIndex(function (obj) {
            return obj.image.imageName[0] === userid;
        });
        this.state.entity[index].user.fullname = user.fullname;
        this.state.entity[index].user.address = user.address;
        this.state.entity[index].user.email = user.email;
        this.state.entity[index].user.class = user.class;
        this.state.status = 'Update user successful with ID: ' + userid;
        this.setState(this.state);
    }
    listAll() {
        var temp = [];
        contain.state.entity.forEach(function (item) {
            temp.push(item.image.imageName[0]);
            // console.log(item.image.imageName[0])
        });
        // console.log('ARRAY' + temp);
        return temp.join(',');
    };
    listAllComming(data) {
        var temp = [];
        for(var item in data){
            temp.push(data[item].image.imageName[0]);
        }
        return temp.join(',');
    };
    autoReLoad() {
        try {
            
            var exist = this.listAll();
            console.log('exist: '+exist );
            $.get(myAddress.ADDRESS_LOCAL + '/listAll/' + exist, function (data, status) {
                
                data = data.slice(0, -1);
                data = '[' + data + ']';
                var obj = JSON.parse(data);
                var exist1 =[]
                exist1 = contain.listAll().split(',');
                
                var comming = contain.listAllComming(obj).split(',');
                // console.log('exist1: '+exist1);
                 console.log('comming: '+comming);
                var common=[];
                common = exist1.filter(value => -1 !== comming.indexOf(value));
                // console.log('phuc common: ' + common);
                common.forEach(function(item){
                    var index = contain.state.entity.findIndex(x=>x.image.imageName[0]==item);
                    // console.log("update element: "+contain.state.entity[index].image.base64str);
                    contain.state.entity[index].image.base64str = obj.find(x=>x.image.imageName[0]==item).image.base64str;
                    contain.setState(contain.state.entity);
                    var removeIndex =  obj.findIndex(x=>x.image.imageName[0]==item);
                    obj.splice(index,1);
                });
                // contain.setState(contain.state.entity);
                
                obj.map((e, i) => {
                    contain.setState(previousState => ({
                        entity: [...previousState.entity, e]
                    }));
                })
            });
        } catch (err) {
            // console.log(err)
        }
    }

    toggleButton() {
        if ($('#btn-toggle').hasClass('glyphicon-play')) {
            $('#btn-toggle').removeClass('glyphicon-play');
            $('#btn-toggle').addClass('glyphicon-stop');
            clearInterval(timer);
            timer = setInterval(this.autoReLoad.bind(this), 3000);

        } else {
            $('#btn-toggle').removeClass('glyphicon-stop');
            $('#btn-toggle').addClass('glyphicon-play');
            clearInterval(timer);
        }
    };
    showStatistical() {
        this.state.is_statistical = true;
        this.setState(this.state);
    }
    showOffStatistical() {
        this.state.is_statistical = false;
        this.setState(this.state);
    }
    render() {
        if (this.state.is_statistical) {
            return (
                <div>
                    <nav className="navbar navbar-default navbar-static-top" role="navigation" style={{ marginBottom: '0' }}>
                        <NavBarHeader />
                        <NavBarTopRight />
                        <NavBarStaticSide showOffStatistical={this.showOffStatistical.bind(this)} showStatistical={this.showStatistical.bind(this)} />
                    </nav>
                    <div id="page-wrapper">
                        <div className="row" style={{ marginTop: '10px' }} >

                            <Statistical />

                        </div>
                    </div>

                </div>
            );
        }
        return (
            <div>

                <nav className="navbar navbar-default navbar-static-top" role="navigation" style={{ marginBottom: '0' }}>
                    <NavBarHeader />
                    <NavBarTopRight />
                    <NavBarStaticSide showOffStatistical={this.showOffStatistical.bind(this)} showStatistical={this.showStatistical.bind(this)} />
                </nav>
                <div id="page-wrapper">
                    <div className="row">
                        <div className="col-lg-9">
                            <StatusBar status={this.state.status} btnStartEnd={this.toggleButton.bind(this)} />
                            {
                                contain.state.entity.map((e, i) => {
                                    return <PersonIdentified key={i} index={i} info={e} updateUser={this.updateUser.bind(this)} deleteUser={this.deleteUser.bind(this)} />
                                })
                            }
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Appv2;

