import React from 'react';
import './App.css';

/**
 * 
 * Input data mode 
 * @var {object} firstMode | secondMode
 * @var {function} updateData
 */


class SfMode extends React.Component {
    
    componentDidUpdate() {
        this.render();
    }
    /** 
     * 
     */
    render() {
        if(this.props.loadStatus)
        return (
            <div>
            <div>
                <p>Big data</p>
                <input onClick={() => {this.props.updateData(this.props.dataMode.first)}} type="radio" value='big' name="dataMode"></input>
            </div>
            <div>
                <p>Small data</p>
                <input onClick={() => {this.props.updateData(this.props.dataMode.second)}} type="radio" value='small' name="dataMode"></input>
            </div>
        </div>
        );
        else {
            return (
                <div>
                    <p>Loading data: </p> <span><div className="loader"></div></span>
                </div>
            );
        }
    }

}

export default SfMode;