import { useEffect ,useState} from "react";
import Loading from "../../components/Loading";

export default function User() {
  const [serverData, setServerData] = useState(null);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://192.168.29.118:3000/home/info');
        setServerData(await response.json());
      }
      catch (error) {
        console.log("error fethcing files", error);
      }
    }
    fetchData();
  }, []);
  if (!serverData) {
    return (

      <h1>oops</h1>
    )
  } else {
    return (
      <>
        <h1>{serverData.message}, {serverData.name}!</h1>
        <p>Your age : {serverData.age}</p>
      </>
    )
  }
}