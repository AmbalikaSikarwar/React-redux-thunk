import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form';
import { getLogin } from  '../redux/actions/login'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import "./login.css"

const Login =() => {

  const loading = useSelector(state => state.airlines.loading)
  const error =  useSelector(state => state.user.error)
  const user = useSelector(state => state.user.user)
  const dispatch = useDispatch()
  const navigate = useNavigate();


  const {
    register,
    handleSubmit,
    formState: { errors },
    } = useForm();

  const onSubmit = (data) => {
    console.log(1111, 'login')
    dispatch(getLogin(data))
    
  }

  useEffect(() => {
    console.log(1233344, user)
    if (user && user.length != 0)
    {
      toast.success("logged in succesfully")
      navigate("/dashboard", { user: user })
    }

  },
  [user]
  
  )

  return (
    <div>
    <div class="container">
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card border-0 shadow rounded-3 my-5">
          <div class="card-body p-4 p-sm-5">
    <center>
    	<div class="fw-bold mb-2 text-uppercase"><h3>Welcome to Sign in!</h3></div>
    	<form onSubmit={handleSubmit(onSubmit)}>
      <div class="form-group">
      <label for="useremail" class="text-info">Email</label>
          <div ><input {...register('email', { required: true })}   placeholder="Email"/>
          <p></p>
          {errors.email && <p>Email  is required.</p>}
          </div>
          <div class="form-group">
          <p><label for="userpassword" class="text-info">Password</label></p>
          <input type="password" {...register('password', { required: true } )}  placeholder="Password"/>
          <p></p>
          {errors.password && <p>Password is required.</p>}
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
          </div>
          
          </form>
        
        </center>
        </div></div></div></div></div>
    </div>
    
  );
}

export default Login;