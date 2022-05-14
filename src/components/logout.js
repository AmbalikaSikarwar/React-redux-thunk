import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify';
import { getLogout } from  '../redux/actions/login'


function Logout() {

	const navigate = useNavigate();
	const dispatch = useDispatch()


  useEffect(() => {
    console.log(333)
    fetchData() 
   
  },[])

   const fetchData = async() => {
      await dispatch(getLogout())
      await localStorage.removeItem('user-info')
      toast.success("user logout successfully")
      await navigate("/login")
    }

  return (
     <div>....</div>
    )
}

export default Logout;