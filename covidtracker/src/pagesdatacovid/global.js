import React, {components,useEffect,useState} from 'react'
import axios from "axios";
import Card from './Card';


const Global = () => {
    const [users, setUsers] = useState([])

    useEffect(()  => {
          axios
          .get("https://covid19.mathdro.id/api")
          .then((response) => setUsers(response.confirmed));

    }, []);

    console.log(users);

    return (
       
        <>
             {users.map((item) => {
                     return (
                         <Card
                         confirmed={item.confirmed}
                         deaths={item.deaths}
                         recovered={item.recovered}
                         />
                     );
                 })
             };

        </>
    )

 }

export default Global;
