import React from 'react';
import $ from 'jquery';
import ReactDOM from 'react-dom';

class StatusBar extends React.Component {
    constructor(props) {
        super(props);
    }
    toggleButton(){
        var btnStartEnd = this.props.btnStartEnd;
        btnStartEnd();
    }
    render() {
        return (
            <div style={{ marginTop: '10px' }}>
                <div className="panel panel-default ">
                    <div className="panel-heading">

                        <button onClick={this.toggleButton.bind(this)}>
                            <span id="btn-toggle" className="glyphicon glyphicon-play" ></span>
                        </button>
                        <strong className="text-success" style={{marginLeft: '50px'}} > 
                            {this.props.status}
                        </strong>
                    </div>
                </div>
            </div>
        );
    }
}
export default StatusBar;
