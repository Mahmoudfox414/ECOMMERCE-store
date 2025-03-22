import axios from 'axios';
import  { useEffect, useState } from 'react'
import img1 from '../../Images/Cartoon.jpg'

export default function Iced() {
    const[cartoonapi,setCartoonApi]=useState([])

async function IcedCoffe() {
let {data}= await axios.get(`https://api.sampleapis.com/coffee/iced`)
console.log(data);
setCartoonApi(data)
}

useEffect(()=>{
    IcedCoffe()
},[])


  return <>
    <div className="container mt-3 mb-3">
    <div className="row">
      <div className="col-md-4"></div>
<div className="col-md-4 text-center">
  <hr />
  <h1>Coffee Iced Trend</h1>
  <hr />
</div>
    </div>
  </div>
  {/* Api People */}
<div className="container">
  <div className="row">
  {cartoonapi.map((item,index)=><div className="col-md-3" key={index}>
    <div className="movie position-relative">
{item.image?<img src={item.image} height={350} className='w-100 rounded rounded-5 imgMovie' alt=''/>:<img src={img1} className='w-100 rounded rounded-5 ' alt=''/>}

<h4>{item.title}</h4>


</div>
</div>
)}
  </div>
</div>

  
  
  </>
}





