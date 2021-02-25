import React from 'react';

import './App.css';
import Chewydata from './Chewydata'
import Chewypost from './Chewypost'

function App() {

      const Blog = Chewydata.map(blog => {
        return <Chewypost key={blog.created} name={blog.name} height={blog.height} mass={blog.mass} hair_color={blog.hair_color} skin_color={blog.skin_color} eye_color={blog.eye_color} birth_year={blog.birth_year} gender={blog.gender}/>
      })

  return (
    <div className="App">
     {Blog}
    </div>
  );
}

export default App;
