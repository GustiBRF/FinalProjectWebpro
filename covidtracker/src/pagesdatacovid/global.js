import React, {components,useEffect,useState} from 'react'
import axios from "axios";
import CountUp from "react-countup";
import {Card, CardContent, Typography, Grid} from "@material-ui/core";
import NumberFormat from 'react-number-format';


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
        
       <center><h1>Data Covid Global  </h1></center> 

            <Grid container spacing={5} justify="center">
         <Grid item xs={12} md={3} component={Card}>
            <CardContent className="griditems">
            <Typography color="textSecondary" gutterBottom>
              Positive
            </Typography>
            <Typography variant="h5" component="h2">
              <CountUp
                start={0}
                end={conf}
                duration={2.75}
                separator=","
              />
            </Typography>
            <Typography variant="body2" component="p">
            Number of active cases of COVID19.
            </Typography>
          </CardContent>
         </Grid>


         <Grid item xs={12} md={3} component={Card}>
            <CardContent className="griditems">
            <Typography color="textSecondary" gutterBottom>
              Healed
            </Typography>
            <Typography variant="h5" component="h2">
              <CountUp
                start={0}

                end={rec}
                duration={2.75}
                separator=","
              />
            </Typography>
            <Typography variant="body2" component="p">
            Number of cured cases of COVID19.
            </Typography>
          </CardContent>
         </Grid>

         <Grid item xs={12} md={3} component={Card}>
            <CardContent className="griditems">
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5" component="h2">
              <CountUp
                start={0}

                end={det}
                duration={2.75}
                separator=","
              />
            </Typography>
            <Typography variant="body2" component="p">
              Number of deaths cases of COVID19.
            </Typography>
          </CardContent>
         </Grid>




     </Grid>
            

        </div>


    );

 }

export default Global;
{/* <h1 className="card-cointainer"> 
            Positive :
                 <CountUp 
                start ={0}
                end={conf}
                duration={2.75}
                separator=","
                 />
             </h1> */}


             {/* <h1 className="card-container">
                 Confirmed : {conf}</h1> */}
{/* 
             <h1 className="card-container">Recovered : {rec}</h1>

             <h1 className="card-container">Deaths : {det}</h1> */}