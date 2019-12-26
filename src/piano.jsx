import React from 'react';
import style from './style.scss';
import cx from 'classnames';
import { notes, notesSounds, keymapSounds} from './notes';
const sounds = notesSounds.map((key, index) => notesSounds[index]);
export const Piano = () => {
  const pressed = ({ keyCode }) => {
    new Audio(keymapSounds[keyCode]).play();
    console.log(keyCode);
  }
  return (
    <div className={style.piano} role="button" tabIndex="0" onKeyDown={e => pressed(e)} autoFocus>
      {
        notes.map((key, index) => {
          return (
            <React.Fragment key={key + 'Fragment' + index}>
              <div
                key={key + 'sound' + index}
                className={
                  cx(style.key,
                    key.length > 2 ?
                    style.black :
                    style.white
                  )
                }
                onClick={() => new Audio(sounds[index]).play()}
              />
            </React.Fragment>
          )
        })
      }
    </div>
  )
}
