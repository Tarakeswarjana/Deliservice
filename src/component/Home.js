import { Outlet, Link } from "react-router-dom";
import React, { Component } from 'react';

import { AiOutlineUser } from "react-icons/ai";
import {AiTwotoneGift}from "react-icons/ai";
import MyImage from './deliservice logo.png';


const Home = () => {
  return (
    <>
      <nav style={{margin:"30px",border:"1px solid black",borderRadius:"5px",}}>
        <ul style={{display:"flex",justifyContent:"space-between"}}>
          <p><img src={MyImage} style={{width:"50px",hight:"40px"}} alt="horse" /></p>
          <p><input type="text" placeholder="Search" style={{border:"3px solid black",fontSize:"20px"}}></input></p>
          <p ><AiOutlineUser style={{width:"30px"}}/></p>
          <p><AiTwotoneGift/></p>
        </ul>


        <ul style={{ display:"flex",flexDirection:"row",gap:"40px"}}>-
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Electronics">Electronics</Link>
          </li>
          <li>
            <Link to="/Sport">Sport</Link>
          </li>
          <li>
            <Link to="/Grocery">Grocery</Link>
          </li>
          <li>
            <Link to="/*">Nopage</Link>
          </li>
        </ul>
      </nav>
      <div >

       <p> I am from home </p>
<div style={{padding:"40px"}}>
<Outlet />
</div>
</div>
     
    </>
  )
};

export default Home;