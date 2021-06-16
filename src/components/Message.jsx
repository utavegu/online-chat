import React from 'react';
import s from './Message.module.css';

export default function Message() {
  // Пропс "изОперэйтор" тру - край левый, бэкграунд серый, колор чёрный, имя отображается"
  return (
    <div className={s.message}>
      {/* <p>Тут имя оператора. Отображается, только если оператор. Сделать позишин абсолют, чтобы сетку не ломать.</p> */}
      <p className={s.text}>Тут, короче, много букв, но статус и время должны быть всегда снизу</p>
      <p className={s.time}>18:10</p>
      <p className={s.status}>+</p>
    </div>
  )
}
