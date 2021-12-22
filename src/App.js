import React from "react";
import CurrentTime from "./components/CurrentTime";
import Home from "./Home";
import Note from "./Note";
import Todo from "./Todo";
import Weather from "./Weather";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className='App'>
        <div className='header'>
          <div className='container'>
            <div className='header-wrap'>
              <CurrentTime />
              <Nav />
            </div>
          </div>
        </div>
        <div className='page-content'>
          <div className='page-content-wrap'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/Notes' element={<Note />} />
              <Route path='/Todo' element={<Todo />} />
              <Route path='Weather' element={<Weather />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
