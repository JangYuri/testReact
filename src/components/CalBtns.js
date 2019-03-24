import React from 'react';
import './CalBtns.css'

const CalBtns = ({ doExpan, onBtnPress, ACMode, }) => {
    const defaultMode = [
        [{ id: ACMode ? 'AC' : 'C', type: 'extra', fuc: 'cancle' }, { id: '+/-', type: 'extra', fuc: 'sign' }, { id: '%', type: 'extra', fuc: 'percent' }, { id: '/', type: 'oper', fuc: 'divide' }],
        [{ id: '7', type: 'num', fuc: 'num' }, { id: '8', type: 'num', fuc: 'num' }, { id: '9', type: 'num', fuc: 'num' }, { id: 'X', type: 'oper', fuc: 'multiply' }],
        [{ id: '4', type: 'num', fuc: 'num' }, { id: '5', type: 'num', fuc: 'num' }, { id: '6', type: 'num', fuc: 'num' }, { id: '-', type: 'oper', fuc: 'subtraction' }],
        [{ id: '1', type: 'num', fuc: 'num' }, { id: '2', type: 'num', fuc: 'num' }, { id: '3', type: 'num', fuc: 'num' }, { id: '+', type: 'oper', fuc: 'addition' }],
        [{ id: '0', type: 'num', fuc: 'num' }, { id: '', type: 'num', fuc: 'num' }, { id: '.', type: 'num', fuc: 'dot' }, { id: '=', type: 'oper', fuc: 'result' }]
    ]

    const tmpBtn = { id: 'tmp', type: 'extra', fuc: '' }
    const wideMode = [
        [tmpBtn, tmpBtn, tmpBtn, tmpBtn, tmpBtn, tmpBtn, { id: ACMode ? 'AC' : 'C', type: 'extra', fuc: 'cancle' }, { id: '+/-', type: 'extra', fuc: 'sign' }, { id: '%', type: 'extra', fuc: 'percent' }, { id: '/', type: 'oper', fuc: 'divide' }],
        [tmpBtn, tmpBtn, tmpBtn, tmpBtn, tmpBtn, tmpBtn, { id: '7', type: 'num', fuc: 'num' }, { id: '8', type: 'num', fuc: 'num' }, { id: '9', type: 'num', fuc: 'num' }, { id: 'X', type: 'oper', fuc: 'multiply' }],
        [tmpBtn, tmpBtn, tmpBtn, tmpBtn, tmpBtn, tmpBtn, { id: '4', type: 'num', fuc: 'num' }, { id: '5', type: 'num', fuc: 'num' }, { id: '6', type: 'num', fuc: 'num' }, { id: '-', type: 'oper', fuc: 'subtraction' }],
        [tmpBtn, tmpBtn, tmpBtn, tmpBtn, tmpBtn, tmpBtn, { id: '1', type: 'num', fuc: 'num' }, { id: '2', type: 'num', fuc: 'num' }, { id: '3', type: 'num', fuc: 'num' }, { id: '+', type: 'oper', fuc: 'addition' }],
        [tmpBtn, tmpBtn, tmpBtn, tmpBtn, tmpBtn, tmpBtn, { id: '0', type: 'num', fuc: 'num' }, { id: '', type: 'num', fuc: 'num' }, { id: '.', type: 'num', fuc: 'dot' }, { id: '=', type: 'oper', fuc: 'result' }]
    ]
    return (
        <table className="cal-btns" >
            {
                doExpan ?
                    wideMode.map((c) => {
                        return <tr>{c.map((r) => {
                            return (r.id === '') ? null :
                                <td
                                    colSpan={(r.id === '0') ? 2 : 1}
                                    className={r.type}
                                    onClick={() => onBtnPress(r.id, r.fuc)}>
                                    {r.id}
                                </td>
                        })}</tr>
                    })
                    :
                    defaultMode.map((c) => {
                        return <tr>{c.map((r) => {
                            return (r.id === '') ? null :
                                <td
                                    colSpan={(r.id === '0') ? 2 : 1}
                                    className={r.type}
                                    onClick={() => onBtnPress(r.id, r.fuc)}>
                                    {r.id}
                                </td>
                        })}</tr>
                    })
            }
        </table>
    );
};

export default CalBtns;