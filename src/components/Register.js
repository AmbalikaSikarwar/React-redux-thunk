import { useForm } from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
//import {registeruser} from "../redux/actions/Post"
import { useNavigate } from "react-router";
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()
function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    
  } = useForm();


  const navigate = useNavigate();


  const onSubmit = () => {
    toast.success("logged in successfully", { autoClose : false})
    navigate("/dashboard")
  };
  

  return (
      
   <center> <div >
   <div class="container">
   <div class="row">
     <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
       <div class="card border-0 shadow rounded-3 my-5">
         <div class="card-body p-4 p-sm-5">
     <h3>Registration Form!</h3>   
   <div >
        <div >
          <form onSubmit={handleSubmit(onSubmit)} >           
          <div>
          <input placeholder="Email" type ="email"
          {...register("email", {
              required: "email is required",
              pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "email required",
          }})} 
          onKeyUp={() => {
              trigger("email");
          }}
          />
          <p>{errors.email && (
          <small>{errors.email.message}</small>
          )}</p>
          </div>
            <br></br>
            <div>
            <input placeholder="password" type ="password"
            {...register("password", {
                required: "password is required",
                pattern: {
                value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,
                message: "password required",
            }})} 
            onKeyUp={() => {
                trigger("password");
            }}
            />
            <p>{errors.password && (
            <small>{errors.password.message}</small>
            )}</p>
            </div>
            <br></br>
            <div>
            <input placeholder="confirm password" type ="password"  autoComplete="off"
            {...register("confirm password", {
                required: "password is required",
                pattern: {
                value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,
                message: "password required",
            }})} 
            onKeyUp={() => {
                trigger("confirm password");
            }}
            />
            <p>{errors.password && (
            <small>{errors.password.message}</small>
            )}</p>
            </div>
            <br></br>
  
            <button  type="submit"  class="btn btn-primary"  value="Submit">Register</button>
            
          </form>
        </div>
      </div>
    </div></div></div></div></div></div>
    </center>
  );
}

export default Register;






// https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY] 
//AIzaSyClxl_rZydrtggNimkwFnSgjJdnrw8sDC8   = api key