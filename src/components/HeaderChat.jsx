import React from 'react';
import { useHistory } from 'react-router';
import PropTypes from 'prop-types';
import s from './HeaderChat.module.css';

function HeaderChat(props) {
  const history = useHistory();
  return (
    <>
      <div className={s.options}>
        <button
          disabled
          title="Временно не работает. Используем стрелочки браузера"
          onClick={() => {history.goBack()}}
        >
          b
        </button>
      </div>
      <div className={s.claim}>
        <h2>Название заявки</h2>
        <p>Локация</p>
      </div> 
    </>
  )
}

HeaderChat.propTypes = {

}

export default HeaderChat

