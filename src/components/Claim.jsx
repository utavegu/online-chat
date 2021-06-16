import React from 'react';
import PropTypes from 'prop-types';
import s from './Claim.module.css';

function Claim(props) {
  return (
    <div className={s.claim}>
      <div className={s.content}>
        <h3 className={s.heading}>Заголовок</h3>
        {/* Есть минимум 2 способа сделать чтобы заголовок не вываливался за отведенные ему границы, но я бы, пожалуй, отрезал первые н-символов (через методы работы со строкой) и добавлял в конце 3 точки, если его длина больше, чем н-символов */}
        <p className={s.location}>Место</p>
        <time className={s.date}>Дата</time>
      </div>
    </div>
  )
}

Claim.propTypes = {

}

export default Claim

