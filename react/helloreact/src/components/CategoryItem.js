import React from "react";
// import { useState } from 'react';
// import Show from "./Show";
import { useNavigate } from 'react-router-dom';

function CategoryItem(props) {
  const navigate = useNavigate();

  // const[ show, setShow] = useState(false)

  const navCategoryDetail = () => {
    navigate("/CategoryDetail", { state: { img: props.img , name: props.title , desc: props.text , id: props.id} });
  } 

  return (
    <div className="col">
      <div className="card h-100">
        <img src={props.img} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          {/* <button type="button" class="btn btn-primary" onClick={() => setShow(!show)}>Read</button> */}
          <button type="button" class="btn btn-primary" onClick={() => navCategoryDetail()}>Read</button>
          {/* {show && <Show text={props.text}/>} */}
        </div>
      </div>
    </div>
  );
}

export default CategoryItem;
