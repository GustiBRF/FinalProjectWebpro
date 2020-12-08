import React, {components,useEffect,useState} from 'react'
import Layout from "./Card";
import {Card, CardContent, Typography, Grid} from "@material-ui/core";
import axios from "axios";
import CountUp from "react-countup";


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
        
       <center><h1>Data Covid Indonesia  </h1></center> 

            <Grid container spacing={5} justify="center">
         <Grid item xs={12} md={2} component={Card}>
            <CardContent className="griditems">
            <Typography color="textSecondary" gutterBottom>
              Jumlah Kasus
            </Typography>
            <Typography variant="h5" component="h2">
              <CountUp
                start={0}
                end={jumkas}
                duration={2.75}
                separator=","
              />
            </Typography>
            <Typography variant="body2" component="p">
            Jumlah Kasus Covid 19 Di Indonesia.
            </Typography>
          </CardContent>
         </Grid>


         <Grid item xs={12} md={2} component={Card}>
            <CardContent className="griditems">
            <Typography color="textSecondary" gutterBottom>
              Meninggal
            </Typography>
            <Typography variant="h5" component="h2">
              <CountUp
                start={0}

                end={meninggal}
                duration={2.75}
                separator=","
              />
            </Typography>
            <Typography variant="body2" component="p">
            Jumlah kematian Covid 19.
            </Typography>
          </CardContent>
         </Grid>

         <Grid item xs={12} md={2} component={Card}>
            <CardContent className="griditems">
            <Typography color="textSecondary" gutterBottom>
              Perawatan
            </Typography>
            <Typography variant="h5" component="h2">
              <CountUp
                start={0}

                end={per}
                duration={2.75}
                separator=","
              />
            </Typography>
            <Typography variant="body2" component="p">
              Jumlah Pasien Dalam Perawatan
            </Typography>
          </CardContent>
         </Grid>

         <Grid item xs={12} md={2} component={Card}>
            <CardContent className="griditems">
            <Typography color="textSecondary" gutterBottom>
              Sembuh
            </Typography>
            <Typography variant="h5" component="h2">
              <CountUp
                start={0}

                end={sembuh}
                duration={2.75}
                separator=","
              />
            </Typography>
            <Typography variant="body2" component="p">
              Jumlah Pasien Sembuh dari Covid 19.
            </Typography>
          </CardContent>
         </Grid>



     </Grid>
            

   </div>

  

    
    );
};

export default Indo;
