import React, { useEffect, useState } from "react";
import {fetchData} from './api/index';
import "./App.css";

import Books from "./container/Books";
import NavBar from "./component/Navbar";
import CategoryPicker from './container/CategoryPicker';

function App() {
 
  const [books, setBooks] = useState();
  const [category , setCategory] = useState();

  useEffect(() => {
   const getData  = async() =>{
     let data = await fetchData();
    setBooks(data)
   }
   getData();
  }, []);

  const onCategoryChangeHandle =(category)=>{
    setCategory(category);
  }

  return (
    <React.Fragment>
      <NavBar />
      <CategoryPicker handleCategoryChange = {onCategoryChangeHandle}/>
      <Books books ={books} category ={category}/> 
    </React.Fragment>
  );
}

export default App;
