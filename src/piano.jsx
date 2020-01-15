import React from 'react';
import style from './style.scss';
import cx from 'classnames';
import { notes, notesSounds, keymapSounds} from './notes';
const sounds = notesSounds.map((key, index) => notesSounds[index]);

export const Piano = (props) => {
  const [obj, setObj] = React.useState({});
  const ref = React.useRef(null);
  React.useEffect(() => ref.current.focus() , []);

  const activate = (key) => Object.keys(obj).some((objectKey) => obj[objectKey] && keymapSounds[objectKey].key === key)

  const released = ({keyCode}) => setObj({ ...obj, [keyCode]: false})

  const pressed = ({ keyCode }) => {
    if (!obj[keyCode]) {
      const audio = new Audio(keymapSounds[keyCode].sound);
      audio.play();
      setObj({ ...obj, [keyCode]: true})
    }
  }

  return (
    <div
      className={style.piano}
      role="button"
      tabIndex="0"
      onKeyDown={e => pressed(e)}
      onKeyUp={e => released(e)}
      ref={ref}
    >
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
                    style.white,
                    activate(key) ? style.active : ''
                  )
                }
                role="button"
                onClick={() => new Audio(sounds[index]).play()}
              />
            </React.Fragment>
          )
        })
      }
    </div>
  )
}
