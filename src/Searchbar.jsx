import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./Search.css";
import { useState } from 'react';


export default function Search({ updateinfo }){
  let [city, setcity] = useState("");
  let [error , seterror] = useState(false);
  // # Enter your key api link
  // # Enter here your api key 

  let whetherinfo =  async () =>{
    try{
      let response = await fetch(`${Api_URL}?q=${city}&appid=${Api_key}&units=metric`);
      let jsonformat = await response.json();
     
      let result = {
        name : jsonformat[0].name,
        lon : jsonformat[0].lon,
        lat : jsonformat[0].lat,
      };
      console.log(result);
      return result; 
    } catch (err){
       throw err;
     }
   
  }
 
  
  let  handlecchange = (event) =>{
    setcity(event.target.value);
   
  }
  

  let handlesubmit =  async (evt) =>{
    try{
      evt.preventDefault();
      console.log(city);
      setcity("");
      let newinfo = await whetherinfo();
      updateinfo(newinfo)
    } catch(err){
      seterror(true)
    }
   
  }

   return (
        <div className='Searchbox'>
          <h3>Search Whether</h3>
          <form  onSubmit={handlesubmit}>
          <TextField id="outlined-basic" label="City name" variant="outlined"  required value={city} onChange={handlecchange}/>
          <br></br>
          <br></br>
    
          <Button variant="contained" type='submit'> Submit </Button>
          {error && <p style={{color:"red"}}>No such place is exist </p>}
         </form>

         
         
        </div>
      )
}
