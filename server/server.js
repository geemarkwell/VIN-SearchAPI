const express = require('express')
const axios = require('axios')
const app = express()
const port = 5003
const cors = require("cors");
const google = require('googlethis');
const asyncHandler = require('express-async-handler');

//BackendAPI front end will communicate with

//Bypass CORS
const corsOrigin = {
  origin:'http://localhost:3000', //or whatever port your frontend is using
  credentials:true,            
  optionSuccessStatus:200
}

app.use(cors(corsOrigin));


//Vehicle endpoint that the frontend will use to gather its data
const getVehicleData = asyncHandler(async(req, res) => {
  const vin = req.params.vin;
  axios.post(`https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVINValuesBatch/${vin}?format=json`)
    .then(response => {
      const vehicle = response.data.Results[0];
      res.json({
        year: vehicle.ModelYear,
        make: vehicle.Make,
        model: vehicle.Model,
        bodyStyle: vehicle.BodyClass,
        manufacturer: vehicle.Manufacturer,
        hp: vehicle.EngineHP,
        trim: vehicle.Trim,
        country: vehicle.PlantCountry,
        city: vehicle.PlantCity,
        modelID: vehicle.ModelID
      });
    })
    .catch(error => {
      res.status(500).send(error);
    });
  })

//Uses "Car Details" to make a search i.e "CarDetails" = BMWX32018, retrieve images related to search
const getGoogleData = asyncHandler(async(req, res)=>{
  let{carDetails}= req.query
  console.log("carDetails", carDetails)
  const data = await google.image(carDetails, { safe: false });
  if(data){
    res.status(200).json({
      data: data
    })
  } else{
    res.status(500)
  }
})
app.post('/googledata', getGoogleData )

app.get('/vehicle/:vin', getVehicleData)


app.listen(port, () => {
  console.log(`We Live on port ${port}!`)
})
