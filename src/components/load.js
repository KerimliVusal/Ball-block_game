
import React from "react"
import React from "react";
const gifs=require('../../public/breakout-tutorial.gif')
const Load=()=>{
    return(<div className='loa'>
            <h1 className='animate'>
            <div><img src={gifs}  alt="gif loadergi" className='img'/></div>
               <div>Game . . .</div></h1>
    </div>
    );
};export default Load
