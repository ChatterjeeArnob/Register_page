import { TextField } from "@mui/material";
import { useState } from "react";

const FormJS =()=>{
    const[details, Setdetails] = useState();
    const[subdetails,Setsubdetails]=useState([]);

    function handle(e){
      Setdetails(e.target.value);
      console.log(details);
    
    }
    function change(){

    Setsubdetails((item)=>{return[...item,details];
     
    })
    }
    // function remove(index){
    //     console.log(index)
    //     let data = subdetails;
    //     subdetails.splice(index,1);
    //     Setsubdetails([...subdetails])

    // }
return(
    <>
    <TextField type="text" placeholder="name" onChange={handle} />
    <button onClick={change} >Add</button>
    <ol>
    {/* <li>{inputList}</li> */}
    {
     subdetails.map((val,index)=>{
         return (<li>{val}
         {/* <button onClick={remove(index)}>DEL</button> */}
     
         </li>
         )
      })
    }
   </ol>
    </>
)
}
export default FormJS;