import React from 'react';

class SfTable extends React.Component {
    /**
     * 
     * @param {object} prevP 
     */
    componentDidUpdate(prevP) {
        console.log(prevP);
    }
    
    /**
     * 
     */
    render() {
        return (
            <div>
                <p>{this.props.tableString}</p>
            </div>
        );
    }

}

export default SfTable;