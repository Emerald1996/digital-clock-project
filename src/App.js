import React , {useState , useEffect} from 'react'

const timeInit = new Date().toLocaleTimeString();
  
function App() {
  const [time , setTime] = useState(timeInit)
 useEffect(()=>{
     let secTimer = setInterval(() => {
       setTime(new Date().toLocaleTimeString());
     }, 1000);

     return () => clearInterval(secTimer);
 },[])

  return (
    <div className="container">
      <h2> The time is:</h2>
      <div className="time">
        <h1> {time}</h1>
      </div>
    </div>
  );
}


export default App;
