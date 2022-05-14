import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector} from 'react-redux'
import { createPost } from '../redux/actions/createpost'
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router";
import { showposts } from '../redux/actions/getpost';
import Table from 'react-bootstrap/Table';
import deleteposts from '../redux/actions/deletepost';
// import updatePost from './components/updatemodal';
import UpdatePost from './updatemodal';
import updateposts from '../redux/actions/updatepost';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const Dashboard = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const error =  useSelector(state => state.post.error)
  const post = useSelector(state => state.post.post.posts)
  const delet = useSelector(state => state.delete.delete)
  const update2=useSelector(state=>state.update.update)
  const[id, setId] = useState();
  const [isVisible, setisVisible] = useState();
  const [title, settitle] = useState();
  const[description, setDescription] = useState();
  const [startDate, setStartDate] = useState(new Date());
  const [search, setSearch] = useState("");
  

const onSubmit= () =>{
    navigate("/createform")
}

useEffect(()=>{
   dispatch(showposts());
}, [delet,update2]);

const deletePost=(id)=>{
  dispatch(deleteposts(id));

}

const editPost = (id, title, description) => {
  console.log("editedddd")
  setisVisible(true);
  setId(id);
  settitle(title);
  setDescription(description)
  
}


const updatePostss = (id, title, description) => {
  dispatch(updateposts(id, title, description));
  isVisible && setisVisible(false);

}

const closeModal = () => {
  console.log("modal close");
  setisVisible(false)
} 

const handleChange = event => {

  setSearch(event.target.value)
}

const filtered = !search
 ? post
 : post.filter((item) => 
     item.title.toLowerCase().includes(search.toLowerCase())
     ||
     item.description.toLowerCase().includes(search.toLowerCase())
 );

  return(
     <div>
      {isVisible && (
      <UpdatePost
        isVisible={isVisible}
        closeModal={closeModal}
        id={id}
        title={title}
        description={description}
        updatePostss={updatePostss}
      />
    )}   
     	<div><center><h3>Welcome to Dashboard !</h3>
       <br></br>     
       <input type="text" value={search} onChange={handleChange} placeholder="Search..."></input>{"  "}<button type="submit" class="btn btn-dark" >Search</button>
      
       <br></br><br></br>
       
       <button type="submit" class="btn btn-dark" onClick={onSubmit}><b> Create post </b></button><br></br><br></br>
       
       <Link to='/logout'>Logout</Link>
      
      </center></div>
     <div>
           <Table striped bordered hover variant="light">
           <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Action</th>
                            <th>Last update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filtered?.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td>{item.description}</td>
                                    <td><button onClick={()=>deletePost(item.id)}  class="btn btn-info">delete</button> 
                                   {"  "} <button onClick={()=>editPost(item.id,item.title,item.description)}  class="btn btn-info">Edit</button></td>
                                   <td><DatePicker selected={startDate} onChange={(date) => setStartDate(date)} showTimeSelect
                                   dateFormat="Pp"/> </td>  
                               </tr>
                            );
                        })}
                    </tbody>           
           </Table>
           </div>
     
     
      </div>
  	)
}


export default Dashboard;