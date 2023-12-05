import React, { useState } from 'react'
import SingleBirthday from './SingleBirthday'
import { data } from './data'

const Birthday = () => {
  const [info,setInfo] = useState(data)
  const removePerson =(id)=>{
    const newList = info.filter((item)=>{
      return item.id !== id
    })
    setInfo(newList);
  }
return (
<>
  <div className="container shadow p-3 col-lg-7 mx-auto mt-4">
    <h1 className="text-center">
      {info.length} birthdays today
    </h1>
    { info.map((item)=>{

    return <SingleBirthday key={item.id} {...item} rem={removePerson} />
    })
    }
    {info.length==0 ? ( <button onClick={()=>setInfo(data)} className='my-1 btn btn-success w-100'>
      Refresh All
    </button>) :
    <button onClick={()=>setInfo([])} className='my-1 btn btn-danger w-100'>
      Remove All
    </button>}
  </div>
</>
)
}

export default Birthday