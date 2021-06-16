import React, { useState } from 'react';
import s from './WorkSpace.module.css';
import Control from './Control';
import Chat from './Chat';
import Message from './Message';
import Input from './Input';
import Modal from './Modal';

export default function WorkSpace() {
  const [modalActive, setModalActive] = useState(false);
 // Если чат, отображать компонент Input
  return (
    <main className={s.work_space}>
      <Control />
      <Chat />
      <Input setModalActive={setModalActive}/>
      {/* Вообще маргины по 24 скорее всего инпуту принадлежат... ладно, пока так */}
      <Modal active={modalActive} setActive={setModalActive}>
        <b>Прикрепить</b>
        <button>Фото и видео</button>
        <button>Заявку</button>
      </Modal>
    </main>
  )
}
