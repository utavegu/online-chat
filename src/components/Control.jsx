import React from 'react';
import PropTypes from 'prop-types';
import s from './Control.module.css';
import HeaderChat from './HeaderChat'
import HeaderClaims from './HeaderClaims'

function Control({isConversation}) {
  // И затуманивание (белую тенюшку снизу) сделать для обоих случаев, просто оно должно быть заметно только при скролле... наверное
  // Если бегунок скроллбара НЕ в самом начале (интерсекшн обсервер?) - добавлять тенюшку для .controls
  return (
    <header className={s.control}>
      {isConversation ? <HeaderChat /> : <HeaderClaims />}
    </header>
  )
}

Control.propTypes = {

}

export default Control

