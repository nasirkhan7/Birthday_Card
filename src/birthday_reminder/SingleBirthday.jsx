 import React from 'react'

const SingleBirthday = ({id,image,name,age,rem}) => {
return (
<>
  <div className="container my-1">
    <div className="d-flex justify-content-between align-items-center">
      <div className="d-flex left gap-3 align-item-center">
        <img style={{width:'80px',height:'80px', borderRadius:'50%',objectFit:'cover'}}
          src={image}
          alt="" />
        <div className="info">
          <h5>{name}</h5>
          <h6>{age} years</h6>
        </div>
      </div>
      <div className="right">
        <button onClick={()=>rem(id)} className="btn btn-danger">
          remove
        </button>
      </div>
    </div>
  </div>
</>
)
}

export default SingleBirthday