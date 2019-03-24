import React, { Component } from 'react';
import CalTemplate from './CalTemplate';
import WindowBtn from './WindowBtn'
import './Calculator.css'

class Calculator extends Component {
    state = {
        openCloseMini: 0,
        wasClosed: false,
        doExpan: false,
    }
    handleOpen = () => {
        this.setState({
            openCloseMini: 0,
            wasClosed: false,
        })
    }
    handleClose = () => {
        this.setState({
            openCloseMini: 1,
            wasClosed: true,
        })
    }
    handleMini = () => {
        this.setState({
            openCloseMini: 2,
        })

    }
    handleExpan = () => {
        this.setState({
            doExpan: !this.state.doExpan,
        })

    }

    render() {
        const { doExpan, openCloseMini, wasClosed } = this.state
        const {
            handleClose,
            handleExpan,
            handleMini,
            handleOpen
        } = this
        switch (openCloseMini) {
            case 0: //opened

                return (
                    <div>
                        <CalTemplate doExpan={doExpan} wasClosed={wasClosed}>
                            <WindowBtn handleClose={handleClose} handleMini={handleMini} handleExpan={handleExpan} />
                        </CalTemplate>
                    </div>
                );
            case 1: //closed

                return (
                    <div className="closedSpace">
                        <img onClick={handleOpen} alt="" src={require('../images/CalcIcon.png')} />
                        <p>계산기</p>
                    </div>
                );
            case 2: //minimized

                return (
                    <div className="minimizedSpace">
                        <button onClick={handleOpen}>다시 열기</button>
                    </div>
                );

            default:
                return (
                    <div>Error!!!!</div>
                )
        }
    }
}

export default Calculator;