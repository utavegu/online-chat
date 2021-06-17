import React from 'react';
import s from './Message.module.css';

export default function Message({isOperator, children}) {
  // Цвет информации статуса тоже другой у оператора!!!
  return (
    <li className={isOperator ? `${s.message} ${s.operator}` : `${s.message}`}>
      {isOperator && <p className={s.name}>Оператор Вася</p>}
      <p className={s.text}>{children}</p>
      <p className={s.time}>18:10</p>
      <p className={s.status}>+</p>
    </li>
  )
}

Message.defaultProps = {
  isOperator: false,
}
