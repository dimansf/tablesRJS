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
        // var collect = Object.entries(this.props.collect);
        // console.dir(collect);
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
                        {this.props.collect.current.map((e, i)=> {
                            // console.dir(e);
                            return <tr onClick={()=>{this.props.tableInfo(e.id)}} key={i}> 
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