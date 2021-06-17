import React from 'react'
import PropTypes from 'prop-types'
import s from './Control.module.css';

function Control(props) {
  // Тут проверять - если пропсы прилетели, то отрисовывать один вариант, если нет - другой
  // И затуманивание сделать для обоих случаев, просто оно должно быть заметно только при скролле... наверное
  // Если бегунок скроллбара НЕ в самом начале (интерсекшн обсервер?) - добавлять тенюшку для .controls
  return (
    <section className={s.control}>
      <div className={s.options}>
        <button>b</button>
      </div>
      <div className={s.claim}>
        <h2>Название заявки</h2>
        <p>Локация</p>
      </div>
    </section>
  )
}

Control.propTypes = {

}

export default Control

