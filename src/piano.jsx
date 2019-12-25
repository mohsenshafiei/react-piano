import React from 'react';
import style from './style.scss';
import cx from 'classnames';
import notesSounds from './notes';
const notes = [
  'C', 'Db', 'C', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab',
  'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab',
  'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab',
  'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab',
  'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab',
  'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab',
  'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab',
  'A', 'Bb', 'B', 'C'
];
const sounds = notesSounds.map((key, index) => new Audio(notesSounds[index]));

export const Piano = () => {
  return (
    <div className={style.piano}>
      {
        notes.map((key, index) => {
          return (
            <React.Fragment key={key + 'Fragment' + index}>
              <div
                key={key + 'sound' + index}
                className={
                  cx(style.key,
                    key.length > 1 ?
                    style.black :
                    style.white
                  )
                }
                onClick={() => {
                  sounds[index].play();
                }}
              />
            </React.Fragment>
          )
        })
      }
    </div>
  )
}
