import React, {components,useEffect,useState} from 'react'
import axios from "axios";
import Card from './Card';


const Global = () => {
    const [conf, setconf] = useState([])
    const [rec, setrec] = useState([])
    const [det, setdet] = useState([])

    useEffect(()  => {
          axios
          .get("https://covid19.mathdro.id/api")
          .then((response) => {
              setconf(response.data.confirmed.value)
              setrec(response.data.recovered.value)
              setdet(response.data.deaths.value)
            });

    }, []);

    // console.log(users);

    return (

        <div>
            <h1>Global</h1>
             <p>Confirmed : {conf}</p>
             <p>Recovered : {rec}</p>
             <p>Deaths : {det}</p>
        </div>
  

    )

 }

export default Global;
