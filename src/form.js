import { useState } from "react";
import "./form.css"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from "react-router-dom";


function Form() {
  const [value, Setvalue] = useState({firstname:'',lastname:'',email:'',});
 const navigate = useNavigate()
  


  function handle(event) {
    // console.log(event.target.name);
    // console.log(event.target.value);
    Setvalue(()=>({
        ...value,[event.target.name] : event.target.value
        
    }))
  }
  function handlesubmit(){
    if(value.username =="" && value.text ==""){
      alert('feild is empty')
    }else{

      console.log(value);
      navigate("/welcome",{state: {id:value}})
      
    }

  }
  return (
    <><div className="form">
      <TextField variant="outlined" type="text" placeholder="Firstname" onChange={handle} name="firstname" />
      <TextField variant="outlined" type="text" placeholder="lastname" onChange={handle} name="lastname" />
      <TextField variant="outlined" type="email" placeholder="email" onChange={handle} name="email" />
      <Button variant="contained" onClick={handlesubmit}><AddIcon/></Button>
      <h1>{value.firstname}</h1>
      <h1>{value.lastname}</h1>
      <h1>{value.email}</h1>

    </div>
    </>
  );
}
export default Form;
