import React, {components,useEffect,useState} from 'react'
import axios from "axios";
import Card from './Card'


const Provinsi = () => {
    const [prov, setProv] = useState([])
    // const [kasPos, setPos] = useState([])
    // const [kasSem, setSem] = useState([])

    useEffect(()  => {
          axios
          .get("https://indonesia-covid-19.mathdro.id/api/provinsi")
          .then((response) => {
            setProv(response.data.data)
            // setPos(response.data.data.kasuPosi)
            // setSem(response.data.kasusSemb)
          });

    }, []);

    return (
  
        <>

        {prov.map((item) => {
                return(
                    <Card 
                        provinsi={item.provinsi}
                        kasusPositif={item.kasusPosi}
                        kasusSembuh={item.kasusSemb}
                    />
                );
            })}
        </>

    );
};

export default Provinsi;
