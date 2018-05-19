import React from 'react';
import $ from 'jquery';
import ReactDOM from 'react-dom';

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

export default NavBarTopRight;