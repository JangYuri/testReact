import React from 'react';
import './CalForm.css'

const CalForm = ({ value }) => {
    return (
        <div className="form">
            <p className="valueStyle">{value}</p>
        </div>
    );
};

export default CalForm;