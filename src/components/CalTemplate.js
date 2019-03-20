import React from 'react';
import './CalTemplate.css';

const CalTemplate = ({ form, children }) => {
    return (
        <main className="cal-template" >
            <div className="cal-windowbtns-wrapper">
                <img src={require('../images/btn_close.png')} className="cal-windowbtn" />
                <img src={require('../images/btn_mini.png')} className="cal-windowbtn" />
                <img src={require('../images/btn_full.png')} className="cal-windowbtn" />
            </div>
            <section className="cal-form-wrapper">
                {form}
            </section>
            <section className="cal-btns-wrapper">
                {children}
            </section>
        </main>
    );
};

export default CalTemplate;