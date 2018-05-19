import React from 'react';
import $ from 'jquery';
import ReactDOM from 'react-dom';

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
                        {/* <li>
                            <a href="tables.html"><i className="fa fa-table fa-fw"></i> Tables</a>
                        </li> */}
                        {/* <li>
                            <a href="forms.html"><i className="fa fa-edit fa-fw"></i> Forms</a>
                        </li> */}
                    </ul>
                </div>
                {/* <!-- /.sidebar-collapse --> */}
            </div>
        )
    }
}

export default NavBarStaticSide;