import { useEffect, useState } from "react";

function Count(){
    const[state,Setstate] = useState(1);
    const[data,Setdata] = useState([]);
    useEffect(()=>{
        async function getData(){
            const data = await fetch(`https://hub.dummyapis.com/employee?noofRecords=${state}&idStarts=1001`);
           const res =await data.json();
            Setdata(res)
            console.log(res)
        }
        getData();
    },[state])
    console.log("hello Friend");
   return(

   <>
   <button onClick={()=>Setstate(state+1)}>ADD{state}</button>
   
   {
    data.map((e,item)=>{
        return(
            <div>
                <p>{e.imageUrl}</p>
                <p>{e.firstName}</p>
                <p>{e.lastName}</p>
                <p>{e.email}</p>
            </div>
        )

    })
   }
       </>
   ) 

}
export default Count; 