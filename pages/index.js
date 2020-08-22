import React,{useState,useEffect} from 'react';
import Filter from './containers/Filter/index';
import Card from './components/Card/index';
import style from './index.module.scss';
import axios from 'axios';

const Page = () => {
    const [data,setData] = useState(null);
    const [url,setUrl] = useState('https://api.spacexdata.com/v3/launches?limit=100');
    const [params,setParams] = useState({launch_year:undefined, launch_success:undefined,land_success:undefined});
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
        }else if(heading === 'Successful Launch'){
            obj.launch_success=event.target.value;
        } else {
            obj.land_success=event.target.value;
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
        <div className={style.container}>
            <header>SpaceX Launch Programs</header>
            <aside>
            <Filter
            onClickHandler={onClickAppendParams}
            /> 
            </aside>
            {data && data.map((el,id) => {
              return  <Card 
              key={id + url}
              icon={el.links.mission_patch}
              missionName={`${el.mission_name} # ${el.flight_number}`}
              launchYear={el.launch_year}
              successfulLaunch={`${el.launch_success}`}
              missionId={el.mission_id}
              />  
            }
            )}
            <footer>Developed by: Akshara</footer>
        </div>
    )
}

export default Page;