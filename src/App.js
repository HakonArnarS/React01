import React from 'react';
import {useState, useEffect} from 'react';
import News from './News';

function App() {
  const [data, setData] = useState([]);

  useEffect(()=>{
    if(!data.length){
      fetch("http://localhost:3001")
      .then(r=>r.json())
      .then((json)=>{
        console.log(json);
        setData(json);
      }); 
    }
  })

  return (
    <div>
      {
        data.map(allNews=>{
          console.log(allNews);
          return <News frett={allNews}/>
        })
      }
    </div>
  );
}

export default App;
