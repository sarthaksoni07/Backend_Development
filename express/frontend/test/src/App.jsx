import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Loading from '../../components/Loading'
import './App.css'



function App() {
  const [count, setCount] = useState(0);
  const [serverData, setServerData] = useState(null);

  useEffect(() => {// we use useEffect to launch this api fetching as soon as the page loads
    async function fetchData() {//we will use an async function to fetch as usual
      try {
        const response = await fetch('http://192.168.29.118:3000/');//base url 
        // const data = await response.json()// storing the data received in an variable
        // setServerData(data);//converting a varable into json
        setServerData(await response.json());// or we can also do it directly
      } catch (error) {//will throw and error  we can't fetch it 
        console.error("error fetching data", error);
      }
    }
    fetchData();
  }, []);


  if (!serverData) {// if data was not able to be fetched from the server
    return (
      <>
      <p>loading data, please wait!</p>
      <Loading />
      </>
    )
  }
  
  else {
    return (
      <>
        <h1>hi {serverData.name} this is the learning page of express js !</h1>
        <p>{serverData.message}</p>
        <h2>{serverData.heading}</h2>
        <p>your age is {serverData.age}</p>

      </>
    )
  }
}

export default App
