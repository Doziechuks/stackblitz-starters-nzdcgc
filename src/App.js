import React, { useEffect, useState } from 'react';

import useHelloWorld from './custom-hooks/useHelloWorld.js';

import './style.css';
import PostList from "./PostList"

const useDate = () => {
  const date = new Date();

  const getDay = () => {
    return date.getDay();
  };

  const getMonth = () => {
    return date.getMonth();
  };

  const addDay = (numberOfDays) => {
    //N.B if day after adding is greater than number of days for that month, date returned should be a new month date
  };

  const addMonth = (numberOfMonths) => {
    //N.B if month after adding is greater than 11, date returned should be a new year
  };

  return { date, getDay, getMonth };
};

export default function App() {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState('');
  const { value, setValue } = useHelloWorld();
  const [isSelected,setIsSelected] = useState(null);

  const { date, getDay, getMonth } = useDate();

  // console.log('----->', value);

  // when a component mounts
  // when a component's state or props changes
  // when a component unmounts
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/todos?limit=5'
        );

        const data = await response.json();

        // console.log(data);
        setPosts(data);
        return () => {
          console.log('I am unmounting...');
        };
      } catch (error) {
        console.log(error);
      }
    })(); //iife
  }, []);

  function handleChange(e){
    if (!e.target.value) return;
    setValue(e.target.value)
  }

  useEffect(() => {
    // console.log('Input changed');
  }, [input]);
 
  function Delete(id){
       
         const delData = posts.filter((post)=> post.id !== id)
         setPosts(delData)
         
       
  }
  function Edit(id){
    if (!id) return;
    const editData = posts.find((post)=>{
      return(
        post.id === id

      )
       
    })
    editData.title = value
 
   const newPost = [...posts,editData]
    setPosts(newPost)
  }

  return (
    <div>
      {/* {posts.map((post) => (
        <div
          style={{ border: '1px dashed', marginBottom: '5px' }}
          key={post.id}
        >
          {post.title}
        </div>
      ))} */}
      {/* {value}
      <br />
      Date: {date.getFullYear}
      <br />
      Day: {getDay()}
      <br />
      Month: {getMonth()}
      <br /> */}
      <textarea type="text" onChange={handleChange} value={value} className='textarea'/>
      <button className="btn"
        onClick={() => Edit(isSelected)}
      >
        Edit
      </button>
      <PostList data={posts} onDelete={Delete} setValue={setValue} setPosts={setPosts} setIsSelected={setIsSelected} useDate={useDate}/>
    </div>
  );
}
