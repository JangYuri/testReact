import React, { Component } from 'react';
import './CalTemplate.css';
import CalBtns from './CalBtns';



class CalTemplate extends Component {
    state = {
        value: '0',
        firstValue: '0',
        secondValue: '0',
        position: 0,
        operator: 1,
        ACMode: true,
    }
    handleKeyPress(e) {
        // if (e.key === 'Enter') {
        //     this.handleResult();
        // }

        console.log(e.key);
    }
    reverseSign = () => {
        let changeValue = Number(this.state.value) * (-1);
        switch (this.state.position) {
            case 0:
            case 1:
            case 3:
                this.setState({
                    value: String(changeValue),
                    firstValue: String(changeValue)
                })
                break;
            case 2:
                this.setState({
                    value: String(changeValue),
                    secondValue: String(changeValue)
                })
                break;
            default:
                break;
        }
    }

    //btn function
    resetInput = () => {

        if (this.state.ACMode) {
            this.setState({
                value: '0',
                firstValue: '0',
                secondValue: '0',
                position: 0,
                operator: 1,
                ACMode: true,
            })
        }
        else {
            switch (this.state.position) {
                case 0:
                    this.setState({
                        value: '0',
                        firstValue: '0',
                        ACMode: true
                    })

                    break;
                case 1:
                    this.setState({
                        operator: 1,
                        ACMode: true
                    })

                    break;
                case 2:
                    this.setState({
                        value: '0',
                        secondValue: '0',
                        ACMode: true
                    })

                    break;
                case 3:
                    this.setState({
                        value: '0',
                        firstValue: '0',
                        ACMode: true
                    })

                    break;

                default:
                    break;
            }
        }
    }
    releasePercent = () => {
        const { value, } = this.state
        let result;

        switch (this.state.position) {
            case 0:
                result = Number(value) / 100
                this.setState({
                    operator: 3,
                    secondValue: 0.01,
                    value: result,
                    firstValue: result,
                    position: 3
                })
                break;
            case 1:
                let v = value;
                result = (v * v) / 100;
                this.setState({
                    operator: 3,
                    secondValue: v,
                    value: result,
                    firstValue: result,
                    position: 3
                })

                break;
            case 2:
                this.setState({
                    operator: 3,
                })
                result = this.calculate / 100
                this.setState({
                    value: result,
                    firstValue: result,
                    position: 3
                })
                break;
            case 3:
                result = Number(value) / 100
                this.setState({
                    operator: 3,
                    secondValue: 0.01,
                    value: result,
                    firstValue: result,
                    position: 3
                })
                break;

            default:
                break;
        }
    }
    inputNum = (digit) => {
        const { value, position } = this.state
        let currentValue

        switch (position) {
            case 0:
                currentValue = (value === '0') ? digit : value + digit
                this.setState({
                    value: currentValue,
                    firstValue: currentValue
                })
                break;

            case 1:
                currentValue = digit;
                this.setState({
                    firstValue: value,
                    value: currentValue,
                    secondValue: currentValue,
                    position: 2,
                })
                break;
            case 2:
                currentValue = (value === '0') ? digit : value + digit
                this.setState({
                    value: currentValue,
                    secondValue: currentValue
                })
                break;
            case 3:
                currentValue = digit;
                this.setState({
                    value: currentValue,
                    firstValue: currentValue,
                    secondValue: '0',
                    position: 0,
                })
                break;
            default:
                break;
        }
    }

    calculate = () => {
        const { position, operator, secondValue, firstValue } = this.state
        switch (operator) {
            case 1:
                return (position === 1) ?
                    Number(firstValue) + Number(firstValue)
                    : Number(firstValue) + Number(secondValue)
            case 2:
                return (position === 1) ?
                    Number(firstValue) - Number(firstValue)
                    : Number(firstValue) - Number(secondValue)
            case 3:
                return (position === 1) ?
                    Number(firstValue) * Number(firstValue)
                    : Number(firstValue) * Number(secondValue)
            case 4:
                return (position === 1) ?
                    Number(firstValue) / Number(firstValue)
                    : Number(firstValue) / Number(secondValue)
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
                let currentValue = this.calculate()
                this.setState({
                    secondValue: value,
                    value: currentValue,
                    firstValue: currentValue,
                    operator: oper,
                    position: 1,
                    ACMode: false
                })
                break;
            case 3:
                this.setState({
                    firstValue: value,
                    operator: oper,
                    position: 1,
                })
                break;

            default:
                break;
        }
    }

    handleResult = () => {
        let currentValue;
        switch (this.state.position) {
            case 0:
                currentValue = this.calculate()
                this.setState({
                    value: currentValue,
                    firstValue: currentValue,
                    position: 3,
                    ACMode: false,
                })
                break;
            case 1:
                currentValue = this.calculate()

                this.setState({
                    secondValue: this.state.firstValue,
                    value: currentValue,
                    firstValue: currentValue,
                    position: 3,
                    ACMode: false,
                })

                break;

            case 2:
                currentValue = this.calculate()
                this.setState({
                    value: currentValue,
                    position: 3,
                    ACMode: false
                })
                break;
            case 3:
                currentValue = this.calculate()
                this.setState({
                    firstValue: currentValue,
                    value: currentValue,
                    position: 3,
                    ACMode: false,
                })
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

            case 'sign':
                this.reverseSign()
                break;

            case 'percent':
                this.releasePercent()
                break;

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
                console.log('+++++++++++++')
                console.log('currentValue :' + this.state.value)
                console.log('innerValue :' + this.state.firstValue + '+' + this.state.secondValue)
                break;

            case 'result':
                this.handleResult()
                console.log('currentValue :' + this.state.value)
                console.log('innerValue :' + this.state.firstValue + '+' + this.state.secondValue)
                break;

            case 'dot':
                this.resetInput()
                break;

            default:
                break;
        }
    }

    render() {
        const modeStyle = {
            width: this.props.doExpan ? '576px' : '234px',
        }

        const { value, ACMode } = this.state

        const {
            onBtnPress,
            handleKeyPress,
        } = this

        return (
            <main className="cal-template" style={modeStyle} onKeyPress={handleKeyPress}>
                {this.props.children}
                <section className={this.props.doMinimize ? "minimize" : "cal-body"}>
                    <article className="cal-form-wrapper">
                        <p className="valueStyle" >{value}</p>
                    </article>
                    <article className="cal-btns-wrapper">
                        <CalBtns doExpan={this.props.doExpan} ACMode={ACMode} onBtnPress={onBtnPress} />
                    </article>
                </section>
            </main>
        );
    }
}


export default CalTemplate;