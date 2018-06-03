import React from 'react';
import $ from 'jquery';
import ReactDOM from 'react-dom';
import * as myAddress from '../config_port_address.js';

var _self;
class Statistical extends React.Component {
    constructor(props) {
        super();
        _self = this;
        this.state = {
            users: [],
            dates: [],
            is_Editable: false,
            edit_User: {
                'userid': '',
                'fullname': '',
                'class': '',
                'address': '',
                'email': ''
            }
        };
        this.getAllUsers();
    }
    updateEditUser() {
        var user = {
            userid: _self.refs.id.value,
            fullname: _self.refs.fullname.value,
            email: _self.refs.email.value,
            class: _self.refs.class.value,
            address: _self.refs.address.value
        }
        this.state.edit_User = user;
        this.setState(this.state.edit_User);
        var updateUser = this.props.updateUser;
        updateUser(user,user.userid);
    }
    deleteUser(id) {
        if (confirm('Are you sure ?')) {
            $.ajax({
                url: myAddress.ADDRESS_LOCAL + '/users/' + id,
                type: 'DELETE'
            });
            var index = this.state.users.findIndex(x => x.userid = id);
            _self.state.users.splice(index, 1);
            _self.setState(this.state);
            var deleteUser = _self.props.deleteUser;
            deleteUser(id);
        }
    }
    updateUser(UserID) {
        console.log(UserID);
        var user = {
            userid: UserID,
            fullname: _self.refs.fullname.value,
            email: _self.refs.email.value,
            class: _self.refs.class.value,
            address: _self.refs.address.value
        }
        $.ajax({
            url: myAddress.ADDRESS_LOCAL+'/users/'+UserID,
            type: 'PUT',
            contentType: 'application/json',
            dataType: 'json',
            data: JSON.stringify(user),
        });
        var index = _self.state.users.findIndex(x => x.userid === UserID)
        this.state.users[index]=user;
        this.state.is_Editable = false;
        this.setState(this.state);
    }
    getAllUsers() {
        $.get(myAddress.ADDRESS_LOCAL + '/all', function (data, status) {
            _self.state.users = data.user;
            _self.setState(_self.state);

        })
    };
    getStatistical(id) {
        console.log(id);
        $.get(myAddress.ADDRESS_LOCAL + '/images/dates/' + id, function (data, status) {
            _self.state.dates = data.dates;
            _self.state.is_Editable = true;
            _self.state.edit_User = _self.state.users.find(x => x.userid === id);
            _self.setState(_self.state);
        })
    };
    render() {
        return (
            <div>
                <div className="col-lg-4" style={{ marginTop: '10px' }} >
                    <div className="row">
                        <input ref="id" type="hidden"  onChange={e => this.updateEditUser(e.target.value)} value={this.state.edit_User.userid} id="id" ref="id" className="form-control" readOnly={!this.state.is_Editable}/>
                    </div>
                    <div className="row">
                        <input ref="fullname" onChange={e => this.updateEditUser(e.target.value)} value={this.state.edit_User.fullname} id="fullname" ref="fullname" type="text" className="form-control" readOnly={!this.state.is_Editable} placeholder={"Name"} />
                    </div>
                    <div className="row">
                        <input ref="email" onChange={e => this.updateEditUser(e.target.value)} value={this.state.edit_User.email} id="email" ref="email" type="email" className="form-control" readOnly={!this.state.is_Editable} placeholder={"Email"} />
                    </div>
                    <div className="row">
                        <input ref="class" onChange={e => this.updateEditUser(e.target.value)} value={this.state.edit_User.class} id="user-class" ref="class" type="text" className="form-control" readOnly={!this.state.is_Editable} placeholder={"Class"} />
                    </div>
                    <div className="row">
                        <input ref="address" onChange={e => this.updateEditUser(e.target.value)} value={this.state.edit_User.address} id="address" ref="address" type="text" className="form-control" readOnly={!this.state.is_Editable} placeholder={"Address"} />
                    </div>
                    <div className="row" style={{ marginTop: '10px' }} id='update'>
                        <button type="submit" className="btn btn-default pull-right" onClick={this.updateUser.bind(this, this.state.edit_User.userid)}>Update</button>
                    </div><hr />
                    <div className="panel panel-default" style={{ marginTop: '10px' }} >
                        <div className="panel-heading">
                            DataTables Advanced Tables
                        </div>

                        <div className="panel-body">
                            <table width="100%" className="table table-striped table-bordered table-hover" id="dataTables-example">
                                <thead>
                                    <tr>
                                        <th>Year</th>
                                        <th>Month</th>
                                        <th>Date</th>
                                        <th>Hour</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        _self.state.dates.map((e, i) => {
                                            return (
                                                <tr key={i} className="odd gradeX">
                                                    <td>{e.substring(0, 4)}</td>
                                                    <td>{e.substring(5, 7)}</td>
                                                    <td>{e.substring(8, 10)}</td>
                                                    <td>{e.substring(12, 19)}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="panel panel-default" style={{ marginTop: '10px' }} >
                        <div className="panel-heading">
                            DataTables Advanced Tables
                        </div>

                        <div className="panel-body">
                            <table width="100%" className="table table-striped table-bordered table-hover" id="dataTables-example">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Address</th>
                                        <th>Class</th>
                                        <th>Email</th>
                                        <th>Statistical</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        _self.state.users.map((e, i) => {
                                            return (
                                                <tr key={i} className="odd gradeX">
                                                    <td>{e.fullname}</td>
                                                    <td>{e.address}</td>
                                                    <td>{e.class}</td>
                                                    <td>{e.email}</td>
                                                    <td><a href="#" onClick={this.getStatistical.bind(this, e.userid)} >Statistical & Update</a></td>
                                                    <td><a href="#" onClick={this.deleteUser.bind(this, e.userid)}>Delete</a></td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Statistical;