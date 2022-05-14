import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { getCreatePost} from  '../redux/actions/createpost';
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form';
import './createform.css';


function Createpost() {
   const dispatch = useDispatch()  
   const navigate = useNavigate()
   const [success, setSuccess] = useState(false)
  // const user = useSelector(state => state.user.user)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


const previous = () =>{
  navigate('/dashboard')
}

   const onSubmit = (data) => {
     console.log("creatpostcomponents")
     dispatch(getCreatePost(data))
      //  setSuccess(true)
       navigate("/dashboard")
     
}


  return (
    <div>
    <div class="container">
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card border-0 shadow rounded-3 my-5">
          <div class="card-body p-4 p-sm-5">
    	<center>
      <h3 class="card-title text-center mb-5 fw-light fs-5">  <b>Create a post here!</b></h3>
      <form onSubmit={handleSubmit(onSubmit)}>
      <p></p>
      <input type="text" placeholder="Title"{...register('title', { required: true })} />
    <p></p>
      <p> <input type="text" placeholder="Description"{...register('description', { required: true } )} />
     {success?<h4> post created successfully</h4>:<h3></h3>}
     </p><button type="submit"  class="btn btn-dark">Submit</button>
     {"  "}<button onClick={previous}   class="btn btn-dark">previous</button>
     </form>
    </center> 
    </div>
    </div>
    </div>
    </div>
    </div>   
      </div>
  );
}

export default Createpost;