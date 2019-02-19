import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import SfMode from './SfMode';
import SfTable from './SfTable';
import SfSearch from './SfSearch';

class App extends Component {
  /**
   * Состоние обновления таблицы
   * @var object 
   */
  state = {
    current: [],
    loadStatus: true,
  };
  /**
   * 
   */
  dataMode = {
    second:  "http://www.filltext.com/?rows=12&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D",
    first:  "http://www.filltext.com/?rows=1000&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&delay=3&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D"

  };
  /**
   * 
   * @param {*} props 
   */
  fullTableData = {};
    
  /**
   * Base constructor
   * @param {object} props 
   */
  constructor(props) {
    super(props);
    this.getContent = this.getContent.bind(this);
    this.search = this.search.bind(this);
  }
  /**
   * 
   */
  search(e) {
    console.log(e);
  }
  /**
   * Получаем контент из стороннего ресурса
   * @param {string} url
   * @return  
   */
  __getContent(url) {
    this.setState({current: {}, loadStatus: false});
    return fetch(url).then((resp)=> {
      return resp.json();
    }).then(res => res);
  }
  /**
   * Получаем json-string контент и сохраняем 
   * @param {object} event
   */
  getContent(dataType) {
    this.__getContent(dataType).then((res) => {
      this.setState({ current: res, loadStatus: true}, () => {console.dir(this.state);});
      
    });
    
  }
  /**
   * Отрисовка главного апа
   * @param
   * @return  
   */
  render() {
    return (
      <div className="App">
        <SfMode updateData={this.getContent} dataMode={this.dataMode} loadStatus={this.state.loadStatus}/>
        <SfSearch search={this.search}/>
        {/* <SfTable tableInfo={this.tableInfo} collect={this.state}/> */}
        {/* <SfDetails/> */}
        {/* <SfLinks/> */}
      </div>
    );
  }
}

export default App;
