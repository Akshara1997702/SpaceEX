import React from 'react';
import Button from '../../components/Button/index';
import style from './index.module.scss';
import { data } from '../../lib/constants';

const Filter = ({onClickHandler}) => {
    return (
        <div className={style.filterContainer}>
            <div className={style.filterHeading}>Filters</div>
            {data && data.map(el => {
                return (
                    <>
                    <div className={style.headingWrapper}>
                        <p className={style.heading}>{el.heading}</p>
                    </div>
                    <div className={style.filterWrapper}>
                    {el.elements && el.elements.map(element => {
                        return (
                            <div className={style.filterButtonWrapper}>
                            <Button text={element.text} onClickHandler={(e)=>onClickHandler(e,el.heading)}/>
                            </div>
                        )
                    })}
                    </div>
                    </>
                )
            })}
        </div>
    )
}

export default Filter;