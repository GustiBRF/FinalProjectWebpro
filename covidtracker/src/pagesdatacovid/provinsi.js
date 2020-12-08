import React, {components,useEffect,useState} from 'react'
import axios from "axios";
import Card from './Card'
import NumberFormat from 'react-number-format';


const Provinsi = () => {
    const [prov, setProv] = useState([])
    // const [kasPos, setPos] = useState([])
    // const [kasSem, setSem] = useState([])

    useEffect(()  => {
          axios
          .get("https://indonesia-covid-19.mathdro.id/api/provinsi")
          .then((response) => { setProv(response.data.data)
            // setPos(response.data.data.kasuPosi)
            // setSem(response.data.kasusSemb)
          });

    }, []);

    return (
  
     
        <div>
            <h5>Jumlah Kasus Covid Per Provinsi di Indonesia</h5>

            <table border="2">
                <tr>
                    <td>Provinsi</td>
                    <td>Positif</td>
                    <td>Meniggal</td>
                    <td>Sembuh</td>

                </tr>

                {
                    prov.map((item) => {
                        return(
                            <tr>
                                <td>{item.provinsi}</td>
                                <td><NumberFormat value={item.kasusPosi} thousandSeparator={true} displayType={'text'} /></td>
                                <td><NumberFormat value={item.kasusMeni} thousandSeparator={true} displayType={'text'}/></td>    
                                <td><NumberFormat value={item.kasusSemb} thousandSeparator={true} displayType={'text'}/></td>
                            </tr>
                            
                        )
                    })
                }
            </table>
        </div>
    );
};

export default Provinsi;

