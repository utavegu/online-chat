import React from 'react'
import PropTypes from 'prop-types'
import s from './Control.module.css';

function Control(props) {
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

