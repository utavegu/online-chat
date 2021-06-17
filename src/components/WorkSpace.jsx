import React, { useState } from 'react';
import s from './WorkSpace.module.css';
import Control from './Control';
import Chat from './Chat';
import Input from './Input';
import Modal from './Modal';

export default function WorkSpace() {
  const [modalActive, setModalActive] = useState(false);
 // Если чат, отображать компонент Input
 // Так... а как это определять? Если в чате в объекте ссылки что-то есть (как в босаноге с каталогом), выставляй флаг "изЧат... другое название", который уже прокидываетя ниже, и в зависимости от него отрисовываются те или иные варианты
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
