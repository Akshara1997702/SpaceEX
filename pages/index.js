import React,{useState,useEffect} from 'react';
import Filter from './containers/Filter/index';
import Card from './components/Card/index';
import style from './index.module.scss';
import axios from 'axios';

const Page = () => {
    const [data,setData] = useState(null);
    const [url,setUrl] = useState('https://api.spacexdata.com/v3/launches?limit=100');
    const [params,setParams] = useState({launch_year:undefined, launch_success:undefined,land_success:undefined});
    const [launchYear,setLaunchYear] = useState(null);
    const [successfulLaunch,setSuccessfulLaunch] = useState(null);
    const [successfulLanding,setSuccessfulLanding] = useState(null);
    useEffect(() => {
        getData()
    },[])

    async function getData(){
    const data = await axios.get(url)
    .then(resp => setData(resp.data))
    return data;
    }

    const onClickAppendParams = (event,heading) => {
        let result = [];
        let obj = {
            ...params
        }
        let defaultUrl = 'https://api.spacexdata.com/v3/launches?limit=100';
        if(heading === 'Launch Year'){
            obj.launch_year=event.target.value;
            setLaunchYear(event.target.value);
        }else if(heading === 'Successful Launch'){
            obj.launch_success=event.target.value;
            setSuccessfulLaunch(event.target.value);
        } else {
            obj.land_success=event.target.value;
            setSuccessfulLanding(event.target.value);
        }
        obj.launch_year ?result.push(`launch_year=${obj.launch_year}`) :null;
        obj.launch_success ?result.push(`launch_success=${obj.launch_success}`) :null;
        obj.land_success ?result.push(`land_success=${obj.land_success}`) :null;
        setParams(obj)
        result = defaultUrl +'&' +result.join('&');
        setUrl(defaultUrl + result);
        axios.get(result).then(resp => setData(resp.data))
    }
    return (
        <div className={style.containerWrapper}>
            <div id="header" className={style.header}><h1 className={style.heading}>SpaceX Launch Programs</h1></div>
            <div className={style.container}>
                <div className={style.menu}>
                <Filter onClickHandler={onClickAppendParams} launchYear={launchYear} successfulLanding={successfulLanding} successfulLaunch={successfulLaunch} />
                </div>
                <div className={style.content}>
                {data && data.map((el,id) => {
                    return  <Card 
                    key={id + url}
                    icon={el.links.mission_patch}
                    missionName={`${el.mission_name} # ${el.flight_number}`}
                    launchYear={el.launch_year}
                    successfulLaunch={`${el.launch_success}`}
                    missionId={el.mission_id}
                    />  
                    })}
                </div>
            </div>
            <div className={style.footer}>Developed by: <span className={style.footerText}>Akshara Ahluwalia</span></div>
        </div>
    )
}

export default Page;