import React from 'react';
import style from './index.module.scss';

const Button = ({text,onClickHandler}) => {
    return (
        <div className={style.buttonWrapper}>
            <input type="button" className={style.button} value={text} onClick={onClickHandler}/>
        </div>
    )
}

export default Button;