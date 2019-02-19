import React from 'react';

class SfTable extends React.Component {
    /**
     * 
     * @param {object} prevP 
     */
    componentDidUpdate(prevP) {
        console.dir(this.props.collect);
        
    }
    /**
     * 
     */
    render() {
        return (
            <div>
                <table >
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>firstName</th>
                            <th>lastName</th>
                            <th>email</th>
                            <th>phone</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.collect.current.map(e => {
                            // console.dir(e);
                            return <tr onClick={()=>{this.props.tableInfo(e.id)}} key={e.id}> 
                            <td>{e.id}</td>
                            <td>{e.firstName}</td>
                            <td>{e.lastName}</td>
                            <td>{e.email}</td>
                            <td>{e.phone}</td>
                            </tr>
                        })
                        } 
                    </tbody>
                </table>
            </div>
        );
    }

}

export default SfTable;