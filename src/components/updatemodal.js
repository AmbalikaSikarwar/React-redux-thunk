import React, { useEffect } from "react";
import Modal from "react-modal/lib/components/Modal";
import { useState } from "react";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const UpdatePost = (props) => {
  const [title, Settitle] = useState();
  const [desc, Setdesc] = useState();
 
  const handleChange1 = (etitle) => {
    console.log("handlechange1", etitle.target.value);
    Settitle(etitle.target.value);
  };
  
  const handleChange2 = (e) => {
    console.log("handlechange2", e.target.value);
    Setdesc(e.target.value);
  };

  useEffect(() => {
    Settitle(props.title);
    Setdesc(props.description);
  }, []);
  
  return (
    <div>
      <Modal
        isOpen={props.isVisible}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={handleChange1}
        /><br></br><br></br>
        <input
          type="text"
          placeholder="Description"
          value={desc}
          onChange={handleChange2}
        />
        <button onClick={() => props.updatePostss(props.id, title, desc)}  class="btn btn-secondary">
          {"  "}
          Update
        </button>
        <button onClick={props.closeModal}  class="btn btn-secondary">close</button>
      </Modal>
    </div>
  );
};

export default UpdatePost;
