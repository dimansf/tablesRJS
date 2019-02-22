import React from 'react';
import SfDetails from './SfDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';


class SfTable extends React.Component {
    
    searchElement(id) {
        let r;
        this.props.tElems.forEach((e) => {
            if(id === e.id) {
                // console.log('id = ' + id + 'e.id = ' + e.id);
                r = e;

            }
        });
        return r;
    }
    /**
     * 
     * @param {number} id
     */
    getInfo(id) {
        console.dir();
        // let i = ;
        let el = {
            e: this.searchElement(id)
        };
        // console.log('e.id = ' + el.e);
        this.setState(el.e);
    }
    /**
     * 
     */
    render() {
        console.dir(this.props.tElems);
        console.dir(typeof(this.props.tElems));
        // return <div></div>
        if(!(this.props.tElems instanceof Array))
            return (
                <div></div>
            )
        else {
            console.log('building table...'+Date('now'));
            return (
                <div className="container">
                    <table className="table table-stripped table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>firstName</th>
                                <th>lastName</th>
                                <th>email</th>
                                <th>phone</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.tElems.map(e => {
                                // console.dir(e);
                                return <tr key={e.id} onClick={() => {this.getInfo(e.id)}}>
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
                    <SfDetails detail={this.state}/>
                </div>
            );
        }
    }

}

export default SfTable;