import { useState, useEffect } from "react";
import Loading from "../../components/Loading";


export default function College() {
    const [collegeData, setCollegeData] = useState(null);
    const [personalData, setPersonalData] = useState(null);
    useEffect(() => {

        async function fetchData() {
            try {
                const data = await fetch('http://192.168.29.118:3000/collegeinfo/quali')
                const temp = await data.json();
                setCollegeData(temp);
            } catch (error) {
                console.log(error);
            }
        }
        async function fetchUserData() {
            try {
                const data = await fetch('http://192.168.29.118:3000/home/info')
                const temp = await data.json();
                setPersonalData(temp)
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
        fetchUserData();
    }, [])
    if (!personalData || !collegeData) {
        return (
            <>
                <h1>error fetching data from the server</h1>
                <Loading />
            </>
        )

    }
    else {


        return (
            <>
                <h1>Welcome {personalData.name}</h1>
                <h2>Your college info is as follows</h2>
                <h3>College name : {collegeData.name}</h3>
                <p>city:{collegeData.city}</p>
                <p>Your colege year : {collegeData.year}</p>

            </>
        )
    }
}