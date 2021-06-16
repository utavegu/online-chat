import React from 'react'
import PropTypes from 'prop-types'
import s from './Control.module.css';

function Control(props) {
  // Тут проверять - если пропсы прилетели, то отрисовывать один вариант, если нет - другой
  // И затуманивание сделать для обоих случаев, просто оно должно быть заметно только при скролле... наверное
  return (
    <section className={s.control}>
      <div className={s.options}></div>
      <div className={s.user}></div>
    </section>
  )
}

Control.propTypes = {

}

export default Control

