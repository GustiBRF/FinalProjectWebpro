import React, {components,useEffect,useState} from 'react'
import Layout from "./Layout";
import axios from "axios";


const Provinsi = () => {
    const [users, setUsers] = useState([])

    useEffect(()  => {
          axios
          .get("https://indonesia-covid-19.mathdro.id/api/provinsi")
          .then((response) => setUsers(response.data));

    }, []);

    console.log(users);

    return (
         <h1>Provinsi</h1>
        // // <>
        // //     {
        // //         users.map((item) => {
        // //             return (
        // //                 <Layout
        // //                 confirmed={item.confirmed}
        // //                 deaths={item.deaths}
        // //                 recovered={item.recovered}
        // //                 />
        // //             );
        // //         })
        // //     }
        // // </>
    );
};

export default Provinsi;
