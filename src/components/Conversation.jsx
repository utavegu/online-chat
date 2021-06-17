import React, { useContext } from 'react';
import Context from '../context/Context';
import PropTypes from 'prop-types';
import s from './Conversation.module.css';
import Message from './Message';

function Conversation({ match }) {
  // Какую дичь творю... ппц)
  const {isConversation, setIsConversation} = useContext(Context);
  setIsConversation(true)
  
  return (
    <>
    <h1>Это беседа {match.params.id}</h1>
    <ul className={s.conversation}>
      <Message isOperator={true}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, doloribus suscipit quis magnam corrupti, impedit facere optio necessitatibus ipsam ullam praesentium eos voluptatibus eum rem odio minus esse! Assumenda, quas.</Message>
      <Message isOperator={false}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, doloribus suscipit quis magnam corrupti, impedit facere optio necessitatibus ipsam ullam praesentium eos voluptatibus eum rem odio minus esse! Assumenda, quas.</Message>
    </ul>
    </>
  )
}

Conversation.propTypes = {

}

export default Conversation

