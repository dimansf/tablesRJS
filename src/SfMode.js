import React from 'react';

class SfMode extends React.Component {

    
    /**
     * 
     */
    render() {
        return (
            <div>
                <input onClick={() => {this.props.updateData('big')}} type="radio" id='big' value='big' name="dataMode"></input> <span>Big</span> <br></br>
                <input onClick={() => {this.props.updateData('small')}} type="radio" id='small' value='small' name="dataMode"></input><span>Small</span>
            </div>
        );
    }

}

export default SfMode;