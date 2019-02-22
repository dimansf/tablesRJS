import React, { Component } from 'react';
import './App.css';
import SfMode from './SfMode';
import SfLinks from './SfLinks';
import SfTable from './SfTable';
import SfSearch from './SfSearch';

class App extends Component {
  /**
   * Состоние обновления таблицы
   * @var object 
   */
  state = {
    current: undefined,
    loadStatus: true,
    hided: true
  };
  /**
   * Число элементов на странице
   * @var {integer} 
    */
  chunk = 5;
  /**
   * @var {Array} Содержит урлы запросов для данных в json 
   */
  dataMode = {
    second: "http://www.filltext.com/?rows=12&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D",
    first: "http://www.filltext.com/?rows=100&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&delay=3&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D"

  };
  /**
   * 
   * @var {object} data Элементы которые пришли с запроса
   * @var {object} currentPtr Текущий номер страницы показа
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
    this.getChunk = this.getChunk.bind(this);
    
  }
  /**
   * Ищем из коллекции всех загруженных обектов совпадения по всем свойствам
   * @param {string} s1 Входная стркоа поиска
   */
  search(s1) {
    let tempIters = new Set();

    this.fullTableData.data.forEach((element) => {

      Object.keys(element).forEach((keys) => {

        if (String(element[keys]).search(s1) > -1) {

          tempIters.add(element);
          console.log('match');


        }
      })
    })

    this.setState({
      current: Array.from(tempIters),
      loadStatus: true
    })
  }
  /**
   * Получаем контент из стороннего ресурса
   * @param {string} url
   * @return  
   */
  __getContent(url) {
    this.setState({ loadStatus: false });
    return fetch(url).then((resp) => {
      return resp.json();
    }).then(res => res);
  }
  /**
   * Получаем json-string контент и сохраняем 
   * @param {object} event
   */
  getContent(dataType) {

    this.__getContent(dataType).then((res) => {

      this.fullTableData.data = res;
      let t = this.fullTableData.currentPtr = 0;
      this.setState({ 
        current: res.slice(t, this.chunk), 
        loadStatus: true, 
        hided: false
      });
      this.listsCount = Math.trunc(this.fullTableData.data.length / this.chunk);

    });
  }
  /**
   * 
   */
  getChunk(index) {

    if ('first' === index) {

      this.fullTableData.currentPtr = 0;
      let t = this.chunk * this.fullTableData.currentPtr;

      this.setState({
        current: this.fullTableData.data.slice(t, t + this.chunk),
        loadStatus: true
      });
    }
    if ('last' === index) {

      this.fullTableData.currentPtr = this.listsCount;
      let t = this.chunk * this.fullTableData.currentPtr;

      this.setState({
        current: this.fullTableData.data.slice(t),
        loadStatus: true
      });

    }
    if ('next' === index) {

      if (this.listsCount < this.fullTableData.currentPtr + 1) return 0;
      this.fullTableData.currentPtr++;
      let t = this.fullTableData.currentPtr * this.chunk;

      this.setState({
        current: this.fullTableData.data.slice(t, t + this.chunk),
        loadStatus: true
      });
    }
    if ('prev' === index) {
      if (0 > this.fullTableData.currentPtr - 1) return 0;
      this.fullTableData.currentPtr -= 1;
      let t = this.fullTableData.currentPtr * this.chunk;

      this.setState({
        current: this.fullTableData.data.slice(t, t + this.chunk),
        loadStatus: true
      });
    }

  }
  /**
   * Отрисовка главного апа
   * @param
   * @return  
   */
  render() {
    return (
      <div className="App">
        <SfMode updateData={this.getContent} dataMode={this.dataMode} loadStatus={this.state.loadStatus} />
        <SfSearch search={this.search} />
        <SfTable tElems={this.state.current} />
        <SfLinks actions={this.getChunk} state={this.state}/>
      </div>
    );
  }
}

export default App;
