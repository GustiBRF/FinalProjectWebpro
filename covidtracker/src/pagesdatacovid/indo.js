import React, {components,useEffect,useState} from 'react'
import Layout from "./Card";
import axios from "axios";


const Indo = () => {
    const [users, setUsers] = useState([])

    useEffect(()  => {
          axios
          .get("https://indonesia-covid-19.mathdro.id/api")
          .then((response) => setUsers(response));

    }, []);

    console.log(users);

    return (
        <h1>INDO PAGES</h1>
        // <>
        //     {
        //         users.map((item) => {
        //             return (
        //                 <Layout
        //                 confirmed={item.confirmed}
        //                 deaths={item.deaths}
        //                 recovered={item.recovered}
        //                 />
        //             );
        //         })
        //     }
        // </>
    );
};

export default Indo;
