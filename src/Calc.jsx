import React, { useState } from 'react';

const Calc  = () =>{
    const [num,setNum] = useState(0);

//increase function
    const incr = () =>{  
         if(num<25){
        setNum(num + 1);
}
else{
    alert('Sorry.  Limit Reaches upto 25')
    setNum(num+1);
}}

//decrease function
const decr = () => {
    if(num>0){
        setNum(num - 1)
}
else{
    alert('Sorry. Zero Limit Reaches..')
    setNum(0);
}}

    return( <>
    <div style = {{textAlign : "center"}}>
        <h1> This is assignment 2 </h1>
        <h2> Counter Application </h2>
    <h1> {num} </h1>
    <button onClick = {incr} > INCREASE  </button>
    <button onClick = {()=>{setNum(0)}} > Reset  </button>
    <button onClick = {decr}> DECREASE</button> 
    </div>
    </>
    )
}

export default Calc;