import React from "react";
import Weather from "./Weather";
import Note from "./Note";
import Todo from "./Todo";
import "./css/Home.css";

const Home = () => {
  return (
    <div className='container'>
      <div className='page-full'>
        <div className='page-half'>
          <Weather />
        </div>
        <div className='page-half'>
          <Todo />
        </div>
      </div>
      <Note />
    </div>
  );
};

export default Home;
