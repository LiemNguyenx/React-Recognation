import React from 'react';
import $ from 'jquery';
import ReactDOM from 'react-dom';
import NavBarHeader from './NavBarHeader.jsx';
import NavBarStaticSide from './NavBarStaticSide.jsx';
import NavBarTopRight from './NavBarTopRight.jsx';
import PersonIdentified from './PersonIdentified.jsx';
import PersonNotIdentified from './PersonNotIdentified.jsx';

var contain;
class Appv2 extends React.Component {
    constructor(props) {
        super(props);
        contain = this
        this.state = {
            entity: []
        };
        function listAll() {
            var temp = [];
            contain.state.entity.forEach(function (item) {
                temp.push(item.user.userid);
            });
            console.log(temp);
            return temp.join(',');
        };
        // setInterval(function () {
        // }, 0);

        try {
            $.get("http://localhost:3333/listAll/" + listAll(), function (data, status) {

                data = data.slice(0, -1);
                data = '[' + data + ']';
                var obj = JSON.parse(data);
                obj.map((e, i) => {
                    // console.log(e)
                    contain.setState(previousState => ({
                        entity: [...previousState.entity, e]
                    }));
                })
            });
        } catch (err) {
            console.log(err)
        }
    }
    render() {
        return (
            <div>
                <nav className="navbar navbar-default navbar-static-top" role="navigation" style={{ marginBottom: '0' }}>
                    <NavBarHeader />
                    <NavBarTopRight />
                    <NavBarStaticSide />
                </nav>
                <div id="page-wrapper"  >
                    <div className="row">
                        <div className="col-lg-6">
                            {/* {console.log(contain.state)} */}
                            {/* <PersonIdentified imageName={contain.state.entity[1]}/> */}
                            {
                                contain.state.entity.map((e, i) => {
                                    return <PersonIdentified key={i} info={e}/>

                                })
                            }

                        </div>
                        <div className="col-lg-3">
                            <PersonNotIdentified />
                        </div>
                    </div>
                    {/* <PersonIdentified imageName={contain.state.entity[0].imageName}
                        base64str={contain.state.entity[0].base64str}
                        fullname={contain.state.entity[0].fullname}
                        class={contain.state.entity[0].class}
                        email={contain.state.entity[0].email}
                        address={contain.state.entity[0].address}
                    /> */}


                </div>

            </div>
        )
    }
}

export default Appv2;

