import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class SfSearch extends React.Component {
    state = {};
    constructor(props) {
        super(props);
        this.cText = '';
        // console.log(this.cText);
        this.currentText = this.currentText.bind(this);
        this.getText = this.getText.bind(this);
    }
    currentText(e) {
        // console.dir(this);
        this.cText = e.target.value;
        // console.log(e.target.value);
    }
    render() {
        // const [cText, setText] = useState('');
        
        return(
            <div className="form-page-form">
                <span>Search: </span>
                <input type="text" onInput={this.currentText} className="form-control custom-input w-200 "></input>
                <button className="btn btn-info" onClick={() => {this.props.search(this.cText)}}>Go</button>
            </div>
        ); 
    }
} 


export default SfSearch; 