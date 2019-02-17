import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import SfMode from './SfMode';
import SfTable from './SfTable';

class App extends Component {
  state = {
    tableResource: undefined
  };
  /**
   * Base constructor
   * @param {object} props 
   */
  constructor(props) {
    super(props);
    this.shortData = "http://www.filltext.com/?rows=12&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D";
    this.bigLink = "http://www.filltext.com/?rows=1000&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&delay=3&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D";
    this.getContent = this.getContent.bind(this);
  }
  /**
   * Получаем контент из стороннего ресурса
   * @param {string} url
   * @return  
   */
  __getContent(url) {
    return fetch(url).then((resp)=> {
      return resp.json();
    }).then((result) => {
      let res = JSON.stringify(result);
      // console.log(JSON.stringify(result));
      return res;
    });
  }
  /**
   * Получаем json-string контент и сохраняем 
   * @param {object} event
   */
  getContent(event) {
    console.log('Event from App.js getContent()' + event);
    let dataString = this.__getContent(this.shortData);
    dataString.then((res) => {
      let ds = String(res);
      this.setState({tableResource: ds});
    });
  }
  /**
   * 
   * @param
   * @return  
   */
  render() {
    return (
      <div className="App">
        <SfMode updateData={this.getContent}/>
        {/* <SfSearch/> */}
        <SfTable tableString={this.state.tableResource}/>
        {/* <SfDetails/> */}
        {/* <SfLinks/> */}
      </div>
    );
  }
}

export default App;
