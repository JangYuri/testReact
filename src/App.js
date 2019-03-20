import React, { Component } from 'react';
import './App.css';
import CalTemplate from './components/CalTemplate';
import CalForm from './components/CalForm'
import CalBtns from './components/CalBtns';

class App extends Component {
  state = {
    value: '0',
    firstValue: '0',
    secondValue: '0',
    position: 0,
    operator: 1,
    ACMode: true,
    mode: 0,
  }
  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleResult();
    }
  }


  //btn function
  resetInput = () => {

    if (this.state.ACMode) {
      this.setState({
        value: '0',
        firstValue: '0',
        position: 0,
        operator: 0,
        ACMode: true
      })
    }
    else {
      this.setState({
        value: '0',
        ACMode: true
      })
    }
  }
  inputNum = (digit) => {
    const { value, position } = this.state

    switch (position) {
      case 0:
        this.setState({
          value: value === '0' ? digit : value + digit,
          firstValue: value
        })
        break;

      case 1:
        this.setState({
          firstValue: value,
          value: digit,
          secondValue: digit,
          position: 2
        })
        break;
      case 2:
        this.setState({
          value: value === '0' ? digit : value + digit,
          secondValue: value
        })
        break;
      case 3:
        this.setState({
          value: digit,
          firstValue: digit,
          position: 0,
        })
        break;
      default:
        break;
    }
  }

  calculate = () => {
    const { operator, secondValue, firstValue } = this.state
    switch (operator) {
      case 1:
        return Number(firstValue) + Number(secondValue)
      case 2:
        return Number(firstValue) - Number(secondValue)
      case 3:
        return Number(firstValue) * Number(secondValue)
      case 4:
        return Number(firstValue) / Number(secondValue)
      default:
        break;
    }

  }
  settingExpression = (oper) => {
    const { position, value } = this.state

    switch (position) {
      case 0://연산자 붙이기
        this.setState({
          firstValue: value,
          operator: oper,
          position: 1,
          ACMode: false
        })

        break;
      case 1://연산자만 바꾸기
        this.setState({
          operator: oper,
          ACMode: false
        })

        break;
      case 2:
        this.setState({
          secondValue: value,
          value: this.calculate(),
          firstValue: value,
          operator: oper,
          position: 1,
          ACMode: false
        })
        break;

      default:
        break;
    }
  }

  handleResult = () => {
    switch (this.state.position) {
      case 0:
        this.setState({
          value: this.calculate(),
          firstValue: this.state.value,
          position: 3,
          ACMode: false
        })
        break;
      case 1:
        this.setState({
          secondValue: this.state.firstValue,
          value: this.calculate(),
          firstValue: this.state.value,
          position: 3,
          ACMode: false
        })

        break;

      case 2:
        console.log('2- firstValue :' + this.state.firstValue)
        console.log('2- secondValue:' + this.state.secondValue)
        console.log('2- result:' + this.state.value)
        this.setState({
          value: this.calculate(),
          position: 3,
          ACMode: false
        })
        console.log('22- firstValue :' + this.state.firstValue)
        console.log('22- secondValue:' + this.state.secondValue)
        console.log('22- result:' + this.state.value)
        break;
      case 3:
        console.log('33-firstValue :' + this.state.firstValue)
        console.log('33-secondValue:' + this.state.secondValue)
        console.log('33-result:' + this.state.value)
        this.setState({
          firstValue: this.state.value,
          value: this.calculate(),
          position: 3,
          ACMode: false
        })
        console.log('3- firstValue :' + this.state.firstValue)
        console.log('3- secondValue:' + this.state.secondValue)
        console.log('3- result:' + this.state.value)
        break;


      default:
        break;
    }
  }

  onBtnPress = (val, fuc) => {
    switch (fuc) {
      case 'num':
        this.inputNum(val)
        this.setState({
          ACMode: false
        })
        break;

      case 'cancle':
        this.resetInput()
        break;

      // case 'sign':
      //   this.resetInput()
      //   break;

      // case 'percent':
      //   this.resetInput()
      //   break;

      case 'divide':
        this.settingExpression(4)
        break;

      case 'multiply':
        this.settingExpression(3)
        break;

      case 'subtraction':
        this.settingExpression(2)
        break;

      case 'addition':
        this.settingExpression(1)
        break;

      case 'result':
        this.handleResult()
        break;

      case 'dot':
        this.resetInput()
        break;

      default:
        break;
    }
  }

  render() {
    const { value, mode, ACMode } = this.state

    const {
      onBtnPress,
    } = this

    return (
      <div className="App">
        <header className="App-header">이거슨 유리의 계산기</header>
        <CalTemplate form={(
          <CalForm
            value={value}
          />)}>
          <CalBtns mode={mode} ACMode={ACMode} onBtnPress={onBtnPress} />
        </CalTemplate>

      </div>
    );
  }
}

export default App;
