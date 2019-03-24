import React, { Component } from 'react';
import './WindowBtn.css'

class WindowBtn extends Component {
    state = {
        isHover: false,
    }
    onHover = () => {
        this.setState({
            isHover: true
        })
    }
    onHoverOut = () => {
        this.setState({
            isHover: false
        })
    }

    render() {
        return (
            <section className="cal-windowbtns-wrapper" onMouseOver={this.onHover} onMouseOut={this.onHoverOut} >
                <img src={this.state.isHover ? require('../images/btn_close_h.png') : require('../images/btn_close.png')}
                    onClick={this.props.handleClose} alt=""
                />
                <img src={this.state.isHover ? require('../images/btn_mini_h.png') : require('../images/btn_mini.png')}
                    onClick={this.props.handleMini} alt="" />
                <img src={this.state.isHover ? require('../images/btn_expan_h.png') : require('../images/btn_expan.png')}
                    onClick={this.props.handleExpan} alt="" />
            </section>
        );
    }
}

export default WindowBtn;