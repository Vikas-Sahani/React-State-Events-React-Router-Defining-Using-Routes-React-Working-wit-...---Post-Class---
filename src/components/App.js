import React from 'react'
import '../styles/App.css';
const App = () => {
  const [flag, setFlag] = useState(false);
  const [Marco, setMarco] = useState("Marco");
  const [Polo, setPolo] = useState("Polo");
  
  return (
    <div id="main">
      <h1 id="marco-polo">{Marco}</h1>
      <button id="marco-polo-toggler"  onClick={function(){
        if(flag){
          setFlag(false);
          setMarco("Polo");
          setPolo("Marco");
        }
        else{
          setFlag(true);
          setMarco("Marco");
          setPolo("Polo");
        }
      }}>{Polo}</button>
    </div>
  )
}


export default App;
