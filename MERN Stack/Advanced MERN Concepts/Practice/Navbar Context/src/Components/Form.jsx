import React,{useContext} from 'react'
import {NameContext} from '../Context/NameContext'

const Form = () => {
  const {name,setName} = useContext(NameContext)

  return (
    <div className='fw-bold text-center mt-3'>
        <form>
            <label >Your Name: </label>
            <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)}/>
        </form>
    </div>
  )
}

export default Form