import React from 'react';
import s from './Message.module.css';

export default function Message({isOperator, children}) {
  console.log(isOperator)
  // Пропс "изОперэйтор" тру - край левый, бэкграунд серый, колор чёрный, имя отображается"
  // Текст, пожалуй, через чилдрены передавать
  return (
    <div className={isOperator ? `${s.message} ${s.operator}` : `${s.message}`}>
      {/* <p>Тут имя оператора. Отображается, только если оператор. Сделать позишин абсолют, чтобы сетку не ломать.</p> */}
      {isOperator && <p className={s.name}>Оператор Вася</p>}
      <p className={s.text}>{children}</p>
      <p className={s.time}>18:10</p>
      <p className={s.status}>+</p>
    </div>
  )
}

Message.defaultProps = {
  isOperator: false,
}
