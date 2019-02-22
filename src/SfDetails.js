import React from 'react';


/**
 * 
 * Input data mode 
 */


class SfDetails extends React.Component {

    render() {
        if (typeof (this.props.detail) === 'object' && this.props.detail !== null) {
            return (

                <div>
                    <pre>
                        {JSON.stringify(this.props.detail)}
                    </pre>
                </div>

            )
        } else {
            return(
                    <div></div>
                )

        }

    }

}

export default SfDetails;