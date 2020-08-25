import React from 'react';
import style from './index.module.scss';

const Button = ({text,onClickHandler,selected}) => {
    return (
        <div className={style.buttonWrapper}>
            <input type="button" className={selected ? `${style.button} ${style.active}`: style.button} value={text} onClick={onClickHandler}/>
        </div>
    )
}

export default Button;