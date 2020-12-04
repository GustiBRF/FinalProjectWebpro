import React, {components,useEffect,useState} from 'react'
import Layout from "./Card";
import axios from "axios";


const Indo = () => {
    const [jumkas, setJum] = useState([])
    const [meninggal, setMen] = useState([])
    const [per, setPer] = useState([])
    const [sembuh, setSem] = useState([])
    useEffect(()  => {
          axios
          .get("https://indonesia-covid-19.mathdro.id/api")
          .then((response) => {
            setJum(response.data.jumlahKasus)
            setMen(response.data.meninggal)
            setPer(response.data.perawatan)
            setSem(response.data.sembuh)
          });

    }, []);


    return (
            
        <div>
            <h1>Data Covid Indonesia</h1>
             <p>Jumlah Kasus: {jumkas}</p>
             <p>Meninggal : {meninggal}</p>
             <p>Dalam Perawatan : {per}</p>
             <p>Total Sembuh : {sembuh}</p>
        </div>

    
    );
};

export default Indo;
