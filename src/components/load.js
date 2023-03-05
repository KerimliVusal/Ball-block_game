import React from "react";
const gifs=require('../../public/breakout-tutorial.gif')
const Load=()=>{
    return(<div className='loa'>
            <h1 className='animate'>
            <div><img src={gifs}  alt="gif loadergi" className='img'/></div>
               <div>Next Movies . . .</div></h1>
    </div>
    );
};export default Load
