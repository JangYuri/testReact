import React, { Component } from 'react';
import './App.css';
import Calculator from './components/Calculator';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">이거슨 유리의 계산기</header>
        <div className="contents">
          <Calculator />
        </div>
      </div>
    );
  }
}

export default App;
