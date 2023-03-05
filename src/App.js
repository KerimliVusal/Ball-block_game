import React, { useEffect } from 'react';
import Load from './components/load';
import Page from './components/page';
import { useState } from 'react';
const App=()=>{
    const[loa,setLoa]=useState(true)
    useEffect(
        ()=>{setTimeout(()=>setLoa(false),4000)}
    ,[])
    return(<div>
    {loa?<Load/>
   : <Page/>
    }</div> )
    
};export default App