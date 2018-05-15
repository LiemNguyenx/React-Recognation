import React from 'react';
import $ from 'jquery';
import ReactDOM from 'react-dom';

var _self
class PersonIdentified extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            readOnly: true,
            isEditable: false
        }
        _self = this;
    }
    Update() {
        this.setState({ readOnly: false });
        this.setState({ isEditable: true });
    }
    Submit() {
        this.setState({ readOnly: true });
        this.setState({ isEditable: false });
    }
    render() {
        if (this.state.isEditable) {
            return (

                <div style={{ marginTop: '10px' }}>
                    <div className="panel panel-default ">
                        <div className="panel-heading">
                            <i className="fa fa-bar-chart-o fa-fw"></i> {this.props.info.user.fullname}
                            <div className="pull-right">
                                <div className="btn-group">
                                    <button type="button" className="btn btn-default btn-xs dropdown-toggle" data-toggle="dropdown">
                                        Actions
                                            <span className="caret"></span>
                                    </button>
                                    <ul className="dropdown-menu pull-right" role="menu">
                                        <li><a onClick={this.Update.bind(this)} >Update</a>
                                        </li>
                                        <li><a href="#">Delete</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* <!-- /.panel-heading --> */}
                        <div className="panel-body" >
                            <div className="col-sm-3">
                                {/* <img src="public/images/download.jpg" alt="ima1" style={{ width: '150px', height: '150px' }} /> */}
                                <img src={"data:image/jpg;base64," + this.props.info.image.base64str} alt={this.props.info.image.imageName} style={{ width: '150px', height: '150px' }} />
                            </div>

                            <div className="col-sm-9">
                                <div className="row">
                                    <label className="control-label col-sm-2" htmlFor="email">Email:</label>
                                    <div className="col-sm-6">
                                        <input id="email" type="email" className="form-control" readOnly={this.state.readOnly} defaultValue={this.props.info.user.email} />
                                    </div>
                                </div>
                                <div className="row">
                                    <label className="control-label col-sm-2 " htmlFor="user-class">Class:</label>
                                    <div className="col-sm-6">
                                        <input id="user-class" type="text" className="form-control" readOnly={this.state.readOnly} defaultValue={this.props.info.user.class} />
                                    </div>
                                </div>
                                <div className="row">
                                    <label className="control-label col-sm-2" htmlFor="address">Address:</label>
                                    <div className="col-sm-6">
                                        <input id="address" type="text" className="form-control" readOnly={this.state.readOnly} defaultValue={this.props.info.user.address} />
                                    </div>
                                </div>
                                <div className="row" style={{ marginTop: '10px' }} id='update'>
                                    <div>
                                        <button type="submit" className="btn btn-default col-sm-offset-6" onClick={this.Submit.bind(this)}>Update</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                        {/* <!-- /.panel-body --> */}
                    </div>
                </div>
            )
        } else {
            return (
                <div className="panel panel-default" style={{ marginTop: '10px' }} >
                    <div className="panel-heading">
                        <i className="fa fa-bar-chart-o fa-fw"></i> {this.props.info.user.fullname}
                        <div className="pull-right">
                            <div className="btn-group">
                                <button type="button" className="btn btn-default btn-xs dropdown-toggle" data-toggle="dropdown">
                                    Actions
                                            <span className="caret"></span>
                                </button>
                                <ul className="dropdown-menu pull-right" role="menu">
                                    <li><a onClick={this.Update.bind(this)} >Update</a>
                                    </li>
                                    <li><a href="#">Delete</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /.panel-heading --> */}
                    <div className="panel-body">
                        <div className="col-sm-3">
                            {/* <img src="public/images/download.jpg" alt="ima1" style={{ width: '150px', height: '150px' }} /> */}
                            <img src={"data:image/jpg;base64," + this.props.info.image.base64str} alt={this.props.info.image.imageName} style={{ width: '150px', height: '150px' }} />
                        </div>

                        <div className="col-sm-9">
                            <div className="row">
                                <label className="control-label col-sm-2" htmlFor="email">Email:</label>
                                <div className="col-sm-6">
                                    <input id="email" type="email" className="form-control" readOnly={this.state.readOnly} defaultValue={this.props.info.user.email} />
                                </div>
                            </div>
                            <div className="row">
                                <label className="control-label col-sm-2 " htmlFor="user-class">Class:</label>
                                <div className="col-sm-6">
                                    <input id="user-class" type="text" className="form-control" readOnly={this.state.readOnly} defaultValue={this.props.info.user.class} />
                                </div>
                            </div>
                            <div className="row">
                                <label className="control-label col-sm-2" htmlFor="address">Address:</label>
                                <div className="col-sm-6">
                                    <input id="address" type="text" className="form-control" readOnly={this.state.readOnly} defaultValue={this.props.info.user.address} />
                                </div>
                            </div>

                        </div>

                    </div>
                    {/* <!-- /.panel-body --> */}
                </div>

            )
        }


    }
}

export default PersonIdentified;