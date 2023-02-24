import React, { useState } from 'react';
import Search from '../components/search';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// styles

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  color: 'orange',
};

const searchInput = {
  marginLeft: 300,
  width: 200,
  height: 50,
  border: '1px solid #3987c9',
};

const buttonStyle = {
  marginTop: 26,
  color: 'white',
  backgroundColor: 'black',
  width: 200,
  height: 30,
  marginLeft: 300,
};

const handlesubmit = (e) => {
  console.log(e.target.value);
};

// markup
const Param = () => {
  const [value, setValue] = React.useState('');

  return (
    <>
      <form
        action=""
        onSubmit={(e) => {
          handlesubmit(e);
        }}
      >
        <input
          style={searchInput}
          name="s"
          type="search"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <br />
        <button style={buttonStyle} type="submit">
          Submit
        </button>
      </form>
      <Router>
        <Routes>
          <Route path="/" element={<Search />}></Route>
        </Routes>
      </Router>
    </>
  );
};


export default Param;