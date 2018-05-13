import React from 'react';
import $ from 'jquery';
import ReactDOM from 'react-dom';

var contain;
class Appv2 extends React.Component {
    constructor(props) {
        super(props);
        contain = this
        this.state = {
            entity: [
                {
                    imageName: '',
                    base64str: '',
                    fullname: '',
                    email: '',
                    class: '',
                    address: ''
                },
            ]
        }
        // $.get("http://localhost:3333/images/1", function (data) {
        //     contain.state.entity[0].imageName = data.img.imageName;
        //     contain.state.entity[0].base64str = data.img.base64str;
        //     contain.state.entity[0].fullname = data.user.fullname;
        //     contain.state.entity[0].class = data.user.class;
        //     contain.state.entity[0].address = data.user.address;
        //     contain.state.entity[0].email = data.user.email;

        //     contain.setState(contain.state);
        // })
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
                        <div className="col-lg-9">
                            <PersonIdentified />
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
class NavBarHeader extends React.Component {
    render() {
        return (
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="index.html">Face Recognation</a>
            </div>
        )
    }
}
class NavBarTopRight extends React.Component {
    constructor() {
        super()
        var width20 = {
            width: '20%'
        };
        var width40 = {
            width: '40%'
        };
        var width60 = {
            width: '60%'
        };
        var width80 = {
            width: '80%'
        };
    }
    render() {
        return (
            <div>
                <ul className="nav navbar-top-links navbar-right">
                    <li className="dropdown">
                        <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                            <i className="fa fa-envelope fa-fw"></i> <i className="fa fa-caret-down"></i>
                        </a>
                        <ul className="dropdown-menu dropdown-messages">
                            <li>
                                <a href="#">
                                    <div>
                                        <strong>John Smith</strong>
                                        <span className="pull-right text-muted">
                                            <em>Yesterday</em>
                                        </span>
                                    </div>
                                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...</div>
                                </a>
                            </li>
                            <li className="divider"></li>
                            <li>
                                <a href="#">
                                    <div>
                                        <strong>John Smith</strong>
                                        <span className="pull-right text-muted">
                                            <em>Yesterday</em>
                                        </span>
                                    </div>
                                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...</div>
                                </a>
                            </li>
                            <li className="divider"></li>
                            <li>
                                <a href="#">
                                    <div>
                                        <strong>John Smith</strong>
                                        <span className="pull-right text-muted">
                                            <em>Yesterday</em>
                                        </span>
                                    </div>
                                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...</div>
                                </a>
                            </li>
                            <li className="divider"></li>
                            <li>
                                <a className="text-center" href="#">
                                    <strong>Read All Messages</strong>
                                    <i className="fa fa-angle-right"></i>
                                </a>
                            </li>
                        </ul>
                        {/* <!-- /.dropdown-messages --> */}
                    </li>
                    {/* <!-- /.dropdown --> */}
                    <li className="dropdown">
                        <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                            <i className="fa fa-tasks fa-fw"></i> <i className="fa fa-caret-down"></i>
                        </a>
                        <ul className="dropdown-menu dropdown-tasks">
                            <li>
                                <a href="#">
                                    <div>
                                        <p>
                                            <strong>Task 1</strong>
                                            <span className="pull-right text-muted">40% Complete</span>
                                        </p>
                                        <div className="progress progress-striped active">
                                            <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={this.width40}>
                                                <span className="sr-only">40% Complete (success)</span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="divider"></li>
                            <li>
                                <a href="#">
                                    <div>
                                        <p>
                                            <strong>Task 2</strong>
                                            <span className="pull-right text-muted">20% Complete</span>
                                        </p>
                                        <div className="progress progress-striped active">
                                            <div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style={this.width20}>
                                                <span className="sr-only">20% Complete</span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="divider"></li>
                            <li>
                                <a href="#">
                                    <div>
                                        <p>
                                            <strong>Task 3</strong>
                                            <span className="pull-right text-muted">60% Complete</span>
                                        </p>
                                        <div className="progress progress-striped active">
                                            <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={this.width60}>
                                                <span className="sr-only">60% Complete (warning)</span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="divider"></li>
                            <li>
                                <a href="#">
                                    <div>
                                        <p>
                                            <strong>Task 4</strong>
                                            <span className="pull-right text-muted">80% Complete</span>
                                        </p>
                                        <div className="progress progress-striped active">
                                            <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={this.width80}>
                                                <span className="sr-only">80% Complete (danger)</span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="divider"></li>
                            <li>
                                <a className="text-center" href="#">
                                    <strong>See All Tasks</strong>
                                    <i className="fa fa-angle-right"></i>
                                </a>
                            </li>
                        </ul>
                        {/* <!-- /.dropdown-tasks --> */}
                    </li>
                    {/* <!-- /.dropdown --> */}
                    <li className="dropdown">
                        <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                            <i className="fa fa-bell fa-fw"></i> <i className="fa fa-caret-down"></i>
                        </a>
                        <ul className="dropdown-menu dropdown-alerts">
                            <li>
                                <a href="#">
                                    <div>
                                        <i className="fa fa-comment fa-fw"></i> New Comment
                                    <span className="pull-right text-muted small">4 minutes ago</span>
                                    </div>
                                </a>
                            </li>
                            <li className="divider"></li>
                            <li>
                                <a href="#">
                                    <div>
                                        <i className="fa fa-twitter fa-fw"></i> 3 New Followers
                                    <span className="pull-right text-muted small">12 minutes ago</span>
                                    </div>
                                </a>
                            </li>
                            <li className="divider"></li>
                            <li>
                                <a href="#">
                                    <div>
                                        <i className="fa fa-envelope fa-fw"></i> Message Sent
                                    <span className="pull-right text-muted small">4 minutes ago</span>
                                    </div>
                                </a>
                            </li>
                            <li className="divider"></li>
                            <li>
                                <a href="#">
                                    <div>
                                        <i className="fa fa-tasks fa-fw"></i> New Task
                                    <span className="pull-right text-muted small">4 minutes ago</span>
                                    </div>
                                </a>
                            </li>
                            <li className="divider"></li>
                            <li>
                                <a href="#">
                                    <div>
                                        <i className="fa fa-upload fa-fw"></i> Server Rebooted
                                    <span className="pull-right text-muted small">4 minutes ago</span>
                                    </div>
                                </a>
                            </li>
                            <li className="divider"></li>
                            <li>
                                <a className="text-center" href="#">
                                    <strong>See All Alerts</strong>
                                    <i className="fa fa-angle-right"></i>
                                </a>
                            </li>
                        </ul>
                        {/* <!-- /.dropdown-alerts --> */}
                    </li>
                    {/* <!-- /.dropdown --> */}
                    <li className="dropdown">
                        <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                            <i className="fa fa-user fa-fw"></i> <i className="fa fa-caret-down"></i>
                        </a>
                        <ul className="dropdown-menu dropdown-user">
                            <li><a href="#"><i className="fa fa-user fa-fw"></i> User Profile</a>
                            </li>
                            <li><a href="#"><i className="fa fa-gear fa-fw"></i> Settings</a>
                            </li>
                            <li className="divider"></li>
                            <li><a href="login.html"><i className="fa fa-sign-out fa-fw"></i> Logout</a>
                            </li>
                        </ul>
                        {/* <!-- /.dropdown-user --> */}
                    </li>
                    {/* <!-- /.dropdown --> */}
                </ul>
            </div>
        )
    }
}
class NavBarStaticSide extends React.Component {
    render() {
        return (
            <div className="navbar-default sidebar" role="navigation">
                <div className="sidebar-nav navbar-collapse">
                    <ul className="nav" id="side-menu">
                        <li className="sidebar-search">
                            <div className="input-group custom-search-form">
                                <input type="text" className="form-control" placeholder="Search..." />
                                <span className="input-group-btn">
                                    <button className="btn btn-default" type="button">
                                        <i className="fa fa-search"></i>
                                    </button>
                                </span>
                            </div>
                            {/* <!-- /input-group --> */}
                        </li>
                        <li>
                            <a href="index.html"><i className="fa fa-dashboard fa-fw"></i> Dashboard</a>
                        </li>
                        <li>
                            <a href="#"><i className="fa fa-bar-chart-o fa-fw"></i> Charts<span className="fa arrow"></span></a>
                            <ul className="nav nav-second-level">
                                <li>
                                    <a href="flot.html">Flot Charts</a>
                                </li>
                                <li>
                                    <a href="morris.html">Morris.js Charts</a>
                                </li>
                            </ul>
                            {/* <!-- /.nav-second-level --> */}
                        </li>
                        <li>
                            <a href="tables.html"><i className="fa fa-table fa-fw"></i> Tables</a>
                        </li>
                        <li>
                            <a href="forms.html"><i className="fa fa-edit fa-fw"></i> Forms</a>
                        </li>
                        <li>
                            <a href="#"><i className="fa fa-wrench fa-fw"></i> UI Elements<span className="fa arrow"></span></a>
                            <ul className="nav nav-second-level">
                                <li>
                                    <a href="panels-wells.html">Panels and Wells</a>
                                </li>
                                <li>
                                    <a href="buttons.html">Buttons</a>
                                </li>
                                <li>
                                    <a href="notifications.html">Notifications</a>
                                </li>
                                <li>
                                    <a href="typography.html">Typography</a>
                                </li>
                                <li>
                                    <a href="icons.html"> Icons</a>
                                </li>
                                <li>
                                    <a href="grid.html">Grid</a>
                                </li>
                            </ul>
                            {/* <!-- /.nav-second-level --> */}
                        </li>
                        <li>
                            <a href="#"><i className="fa fa-sitemap fa-fw"></i> Multi-Level Dropdown<span className="fa arrow"></span></a>
                            <ul className="nav nav-second-level">
                                <li>
                                    <a href="#">Second Level Item</a>
                                </li>
                                <li>
                                    <a href="#">Second Level Item</a>
                                </li>
                                <li>
                                    <a href="#">Third Level <span className="fa arrow"></span></a>
                                    <ul className="nav nav-third-level">
                                        <li>
                                            <a href="#">Third Level Item</a>
                                        </li>
                                        <li>
                                            <a href="#">Third Level Item</a>
                                        </li>
                                        <li>
                                            <a href="#">Third Level Item</a>
                                        </li>
                                        <li>
                                            <a href="#">Third Level Item</a>
                                        </li>
                                    </ul>
                                    {/* <!-- /.nav-third-level --> */}
                                </li>
                            </ul>
                            {/* <!-- /.nav-second-level --> */}
                        </li>
                        <li>
                            <a href="#"><i className="fa fa-files-o fa-fw"></i> Sample Pages<span className="fa arrow"></span></a>
                            <ul className="nav nav-second-level">
                                <li>
                                    <a href="blank.html">Blank Page</a>
                                </li>
                                <li>
                                    <a href="login.html">Login Page</a>
                                </li>
                            </ul>
                            {/* <!-- /.nav-second-level --> */}
                        </li>
                    </ul>
                </div>
                {/* <!-- /.sidebar-collapse --> */}
            </div>
        )
    }
}
var that;
class PersonIdentified extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            readOnly: true,
            isEditable: false
        }
        that = this
    }
    Update() {
        that.setState({ readOnly: false });
        that.setState({ isEditable: true });
    }
    Submit() {
        that.setState({ readOnly: true });
        that.setState({ isEditable: false });
    }
    render() {
        if (this.state.isEditable) {
            return (

                <div style={{ marginTop: '10px' }}>
                    <div className="panel panel-default ">
                        <div className="panel-heading">
                            <i className="fa fa-bar-chart-o fa-fw"></i> {this.props.fullname}
                            <div className="pull-right">
                                <div className="btn-group">
                                    <button type="button" className="btn btn-default btn-xs dropdown-toggle" data-toggle="dropdown">
                                        Actions
                                            <span className="caret"></span>
                                    </button>
                                    <ul className="dropdown-menu pull-right" role="menu">
                                        <li><a onClick={this.Update} >Update</a>
                                        </li>
                                        <li><a href="#">Delete</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* <!-- /.panel-heading --> */}
                        <div className="panel-body">
                            <div style={{ float: 'left' }}>
                                <img src="public/images/download.jpg" alt="ima1" style={{ width: '200px', height: '200px' }} />
                                {/* <img src={"data:image/jpeg;base64," + this.props.base64str} alt="" style={{ width: '200px', height: '200px' }} /> */}
                            </div>
                            <div style={{ float: 'right' }}>
                                <img src="public/images/download.jpg" alt="ima1" style={{ width: '200px', height: '200px' }} />
                                {/* <img src={"data:image/jpeg;base64," + this.props.base64str} alt="" style={{ width: '200px', height: '200px' }} /> */}
                            </div>
                            <form className="form-horizontal col-lg-7" action="#" readOnly={this.state.readOnly} >
                                <div className="form-group">
                                    <label className="control-label col-sm-2" htmlFor="email">Email:</label>
                                    <div className="col-sm-6">
                                        <input id="email" type="email" className="form-control" readOnly={this.state.readOnly} value={this.props.email} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-sm-2" htmlFor="user-class">Class:</label>
                                    <div className="col-sm-6">
                                        <input id="user-class" type="text" className="form-control" readOnly={this.state.readOnly} value={this.props.class} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-sm-2" htmlFor="address">Address:</label>
                                    <div className="col-sm-6">
                                        <input id="address" type="text" className="form-control" readOnly={this.state.readOnly} value={this.props.address} />
                                    </div>
                                </div>
                                <div className="form-group" style={{ marginTop: '30px' }} id='update'>
                                    <div>
                                        <button type="submit" className="btn btn-default col-xs-offset-4" ref={this.submit} onClick={this.Submit}>Update</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        {/* <!-- /.panel-body --> */}
                    </div>
                </div>

            )
        } else {
            return (

                <div style={{ marginTop: '10px' }}>
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <i className="fa fa-bar-chart-o fa-fw"></i> {this.props.fullname}
                            <div className="pull-right">
                                <div className="btn-group">
                                    <button type="button" className="btn btn-default btn-xs dropdown-toggle" data-toggle="dropdown">
                                        Actions
                                            <span className="caret"></span>
                                    </button>
                                    <ul className="dropdown-menu pull-right" role="menu">
                                        <li><a onClick={this.Update} >Update</a>
                                        </li>
                                        <li><a href="#">Delete</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* <!-- /.panel-heading --> */}
                        <div className="panel-body">
                            <div style={{ float: 'left' }}>
                                <img src="public/images/download.jpg" alt="ima1" style={{ width: '200px', height: '200px' }} />
                                {/* <img src={"data:image/jpeg;base64," + this.props.base64str} alt="" style={{ width: '200px', height: '200px' }} /> */}
                            </div>
                            <div style={{ float: 'right' }}>
                                <img src="public/images/download.jpg" alt="ima2" style={{ width: '200px', height: '200px' }} />
                                {/* <img src={"data:image/jpg;base64," + this.props.base64str} alt={this.props.imageName} style={{ width: '200px', height: '200px' }} /> */}
                            </div>
                            <form className="form-horizontal col-lg-7" action="#" readOnly={this.state.readOnly} >
                                <div className="form-group">
                                    <label className="control-label col-sm-2" htmlFor="email">Email:</label>
                                    <div className="col-sm-6">
                                        <input id="email" type="email" className="form-control" readOnly={this.state.readOnly} value={this.props.email} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-sm-2" htmlFor="user-class">Class:</label>
                                    <div className="col-sm-6">
                                        <input id="user-class" type="text" className="form-control" readOnly={this.state.readOnly} value={this.props.class} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-sm-2" htmlFor="address">Address:</label>
                                    <div className="col-sm-6">
                                        <input id="address" type="text" className="form-control" readOnly={this.state.readOnly} value={this.props.address} />
                                    </div>
                                </div>
                            </form>

                        </div>
                        {/* <!-- /.panel-body --> */}
                    </div>
                </div >

            )
        }


    }
}
class PersonNotIdentified extends React.Component {
    constructor() {
        super()
        var style = {
            border: '1px black solid',
            borderRadius: '4px',
            height: '1000px',
            backgroundColor: 'yellow !important'
        }
    }
    render() {
        return (
            <div style={this.style}>
                PersonNotIdentified
            </div>
        )
    }
}
export default Appv2;

