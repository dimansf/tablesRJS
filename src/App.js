import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import SfMode from './SfMode';
import SfTable from './SfTable';

class App extends Component {
  /**
   * Состоние обновления таблицы
   * @var object 
   */
  state = {
    current: []
  };

    
  /**
   * Base constructor
   * @param {object} props 
   */
  constructor(props) {
    super(props);
    this.shortData = "http://www.filltext.com/?rows=12&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D";
    this.bigData = "http://www.filltext.com/?rows=1000&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&delay=3&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D";
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

    }).then(res => this.content = res);
    // }).then((result) => {
    //    = result;
    //   console.log(result);
    // });
  }
  /**
   * Получаем json-string контент и сохраняем 
   * @param {object} event
   */
  getContent(dataType) {
    if('small' === dataType) {
      this.__getContent(this.shortData).then(() => {
        this.setState({ current: this.content});
        console.dir(this.content);
      })
    } else {
      this.__getContent(this.bigData).then(() => {
        this.setState({ current: this.content});
        console.dir(this.content);
        
      });

    }
  }
  tableInfo(e) {
    console.dir(e);

  }
  /**
   * Отрисовка главного апа
   * @param
   * @return  
   */
  render() {
    return (
      <div className="App">
        <SfMode updateData={this.getContent}/>
        {/* <SfSearch/> */}
        <SfTable tableInfo={this.tableInfo} collect={this.state}/>
        {/* <SfDetails/> */}
        {/* <SfLinks/> */}
      </div>
    );
  }
}

export default App;
