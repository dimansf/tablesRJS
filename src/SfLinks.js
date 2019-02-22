import React from 'react';



class SfLinks extends React.Component {

    render() {
        if (!this.props.state.hided)
            return (
                <div className="btn-group">
                    <button type="button" onClick={() => { this.props.actions('first') }} className="btn btn-primary">First</button>
                    <button type="button" onClick={() => { this.props.actions('prev') }} className="btn btn-primary">&lt;&lt;</button>
                    <button type="button" onClick={() => { this.props.actions('next') }} className="btn btn-primary">&gt;&gt;</button>
                    <button type="button" onClick={() => { this.props.actions('last') }} className="btn btn-primary">Last</button>
                </div>
            )
        else return (
            <div></div>
        )
    }
}

export default SfLinks;