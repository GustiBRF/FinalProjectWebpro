import React, {useEffect,useState} from 'react'
import axios from "axios";

// const Global = () => {
//     return (
//         <div>
//           <h1>GLOBAL</h1>
//         </div>
//     )
// }

const Global = () => {
    const [users, setUsers] = useState([])

    useEffect(()  => {
          axios
          .get("https://covid19.mathdro.id/api")
          .then((response) => setUsers(response.data));

    }, [])
    console.log(users);
    return(
        <>
        <p>GLOBAL API</p>
        </>
    )
}

export default Global
