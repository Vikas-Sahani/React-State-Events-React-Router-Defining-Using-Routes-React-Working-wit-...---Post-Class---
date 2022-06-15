import React, {useState} from 'react';
import '../styles/App.css';
const App = () => {
  const [val, setVal] = useState(true);
  
  return (
    // id="main"
    <> 
      <h1 id="marco-polo">{val ? "Marco" : "Polo"}</h1>
      <button id="marco-polo-toggler" onClick={()=>setVal(!val)}>{val ? "Polo" : "Marco"}</button>
    </>
  )
}


export default App;

// import React, { useState } from 'react'
// import '../styles/App.css';
// const App = () => {
//   const [val,setVal]=useState(true);
//   return (
//     <div id="main">
//       <h1 id="marco-polo">{val ? "Marco" : "Polo" }</h1>
//       <button id="marco-polo-toggler" onClick={()=> setVal(!val)}>{val ? "Polo" : "Marco" }</button>
     
//     </div>
//   )
// }


// export default App;