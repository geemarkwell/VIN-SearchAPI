import React, { useEffect, useState } from 'react'
import axios from 'axios';

export const Table = (props) => {
    const  vehicle  = props.location.state.data ;
    const [image, setImage]= useState();
    
    useEffect(() => {
      getData(carDetails)
    }, []);
    
//setting the image to return the google result from which uses "carDetails" to make a search
const carDetails = vehicle?.make + vehicle?.model + vehicle?.year ;
function getData(item){
    console.log("carDetails xxx", item)
    axios.post(`http://localhost:5003/googledata`, 
    null, 
    { params: 
      {
        carDetails: item
      }})
      .then(response => setImage(response.data) )
      .catch(err => console.warn(err));
}
  return (
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg m-5">
    <table class="w-full border-collapse bg-white text-left text-sm text-gray-500">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" class="px-6 py-4 font-medium text-gray-900">Year</th>
          <th scope="col" class="px-6 py-4 font-medium text-gray-900">Make</th>
          <th scope="col" class="px-6 py-4 font-medium text-gray-900">Model</th>
          <th scope="col" class="px-6 py-4 font-medium text-gray-900">Body</th>
          <th scope="col" class="px-6 py-4 font-medium text-gray-900">Other Specs</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-100 border-t border-gray-100">
      <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {vehicle.year}
                  </th>
                  <td class="px-6 py-4">
                      {vehicle.make}
                  </td>
                  <td class="px-6 py-4">
                  {vehicle.model}
                  </td>
                  <td class="px-6 py-4">
                  {vehicle.bodyStyle}
                  </td>
                  <td class="px-6 py-4">
                  {<div class=' '><span class='font-bold'>BY:</span> {vehicle.manufacturer}</div>}
                  {<div><span class='font-bold'>HORSE POWER:</span> {vehicle.hp}</div>}
                  {<div ><span class='font-bold'>TRIM</span>: {vehicle.trim}</div>}
                  {<div><span class='font-bold'>COUNTRY:</span> {vehicle.country}</div>}
                  {<div><span class='font-bold'>ID:</span> {vehicle.modelID}</div>}
                  {<div><span class='font-bold'>CITY:</span> {vehicle.city}</div>}
                  </td>
              </tr>
      </tbody>
    </table>
  </div>
  )
}
