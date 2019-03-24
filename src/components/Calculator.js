import React, { Component } from 'react';
import CalTemplate from './CalTemplate';
import WindowBtn from './WindowBtn'
import './Calculator.css'

class Calculator extends Component {
    state = {
        close: false,
        minimize: false,
        doExpan: false,
    }
    handleOpen = () => {
        this.setState({
            close: false,
        })
    }
    handleClose = () => {
        this.setState({
            close: true,
        })
    }
    handleExpan = () => {
        this.setState({
            doExpan: this.state.minimize ? this.state.doExpan : !this.state.doExpan,
        })

    }
    handleMini = () => {
        this.setState({
            minimize: !this.state.minimize,
        })

    }

    render() {
        const { doExpan, close, minimize } = this.state
        const {
            handleClose,
            handleExpan,
            handleMini,
            handleOpen
        } = this

        return (
            <div>
                {
                    close ?
                        <div className="closedSpace">
                            <img onClick={handleOpen} alt="" src={require('../images/CalcIcon.png')} />
                            <p>계산기</p>
                        </div>
                        :
                        <CalTemplate doExpan={doExpan} doMinimize={minimize}>
                            <WindowBtn handleClose={handleClose} handleMini={handleMini} handleExpan={handleExpan} />
                        </CalTemplate>
                }
            </div>
        );

    }
}

export default Calculator;