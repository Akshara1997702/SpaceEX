import React from 'react';
import style from './index.module.scss';


const Card = ({icon,missionName,missionId,launchYear,successfulLaunch,successfulLanding}) => {
    return (
        <div className={style.cardWrapper}>
            <div className={style.iconWrapper}>
                <img src={icon} className={style.icon}></img>
            </div>
            <div className={style.cardInfo}>
                <div className={style.cardName}>{missionName}</div>
                <div className={style.missionInfo}>
                    <ul className={style.missionHeadingList}>Mission Ids:
                       { missionId && missionId.map(el => <li className={style.missionId}>{el}</li>)}
                    </ul>
                    <div className={style.missionHeading}>Launch Year: <span className={style.missionId}>{launchYear}</span></div>
                    <div className={style.missionHeading}>Successful<br/> Launch: <span className={style.missionId}>{successfulLaunch}</span></div>
                    <div className={style.missionHeading}>Successful<br/>Landing: <span className={style.missionId}>{successfulLanding}</span></div>
                </div>
            </div>

        </div>
    )
}

export default Card;