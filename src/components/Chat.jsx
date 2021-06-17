import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import s from './Chat.module.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Conversation from './Conversation';
import Claims from './Claims';
import { useWS } from '../hooks/useWS.hook';

function Chat(props) {
  const socket = useWS(props.id);

  return (
    <Router>
      <section className={s.chat}>
        <Switch>
          <Route path="/conversation/:id([0-9]+)?" component={Conversation} exact />
          <Route path="/" component={Claims} exact />
        </Switch>
      </section>
    </Router>
  )
}

Chat.propTypes = {

}

export default Chat

