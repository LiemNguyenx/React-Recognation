import React from 'react';
import $ from 'jquery';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router';
import Statistical from './Statistical.jsx';

class NavBarStaticSide extends React.Component {
    constructor(props){
        super(props);
    }
    showStatistical(){
        var showStatistical = this.props.showStatistical;
        showStatistical();
    }
    showOffStatistical(){
        var showOff = this.props.showOffStatistical;
        showOff();
    }
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
                        </li>
                        <li>
                            <a href="#" onClick={this.showOffStatistical.bind(this)} ><i className="fa fa-dashboard fa-fw"></i> Dashboard</a>
                        </li>
                        <li>
                            <a href="#"><i className="fa fa-bar-chart-o fa-fw"></i> Statistical<span className="fa arrow"></span></a>
                            <ul className="nav nav-second-level">
                                <li>
                                    <a href="#" onClick={this.showStatistical.bind(this)} >Statistical by User</a>
                                </li>
                                {/* <li>
                                    <a href="morris.html">Morris.js Charts</a>
                                </li> */}
                            </ul>
                        </li>
                    </ul>
                </div>

            </div>
        )
    }
}

export default NavBarStaticSide;