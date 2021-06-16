import React from 'react'
import PropTypes from 'prop-types'
import s from './Input.module.css';

function Input({setModalActive}) {

  const handleClick = (evt) => {
    evt.preventDefault();
  }

  // Подписать кнопки через вижуалли-хидден
  return (
    <form className={s.input_area}>
      <input type="text" placeholder="Сообщение" />
      <button className={s.attachment} onClick={() => setModalActive(true)} type="button">Прикрепить</button>
      <button className={s.send} onClick={handleClick} type="submit">^</button>
    </form>
  )
}

Input.propTypes = {

}

export default Input

