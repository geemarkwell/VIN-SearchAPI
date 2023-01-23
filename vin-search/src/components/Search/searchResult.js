import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom";
import axios from 'axios';
import Input from '@mui/material/Input';
import SearchIcon from '@mui/icons-material/Search';
import { FeatureSection } from '../Features/featureSection';



export const SearchResult = () => {
    const [vin, setVin] = useState('');
    const [data, setData] = useState();
    const [vehicle, setVehicle] = useState();
    const [image, setImage]= useState();
    const history = useHistory();

    useEffect(() => {
        handleSubmit()
        setVehicle('')
      }, []);
  
      async function handleSubmit(e) {
        e.preventDefault();
        try {
        const response = await axios.get(`http://localhost:5003/vehicle/${vin}`);
            let vehicle = response.data;
            setVehicle(vehicle);
            if(vehicle){
                history.push({
                    pathname: "/result",
                        state: {
                         data: vehicle,
            }
        });
        }
        } catch(err) {
        console.error('Error',err);
        }
        }
  return (
      <div>
         <div class="py-20 bg-gradient-to-r from-ncs-blue to-ncs-secondary ">
      <div class="container mx-auto px-6">
        <h2 class="text-4xl font-bold mb-2 text-white">
        Neural Claim System
        </h2>
        <h3 class="text-2xl mb-8 text-gray-200">
        Global Leading, AI/Maccchine Learning platform
        </h3>
        <form class='text-white w-2/4 inline-block'
        onSubmit={handleSubmit}  >
        <div class="text-black flex rounded-full px-4 sm:px-8 py-2 sm:py-3 bg-white  ">
        <Input
        disableUnderline={true}
        placeholder="Search VIN"
        onChange={(e) => setVin(e.target.value)}
        value={vin}
        style={{ width: '100%' }} />  
            <SearchIcon
            style=
            {{
            fontSize: '35px',
            cursor: 'pointer'
            }}
            onClick={handleSubmit} 
            />
        </div>
        </form>
      </div>
      <FeatureSection />
    </div> 
      </div>

  )
}



