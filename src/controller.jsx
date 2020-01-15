import React from 'react';
import style from './style.scss';
import cx from 'classnames';

export const Controller = (props) => <span className={style.startButton} onClick={(e) => props.click(e)}>Start Learning</span>
