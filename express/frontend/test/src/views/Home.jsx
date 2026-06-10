import { useNavigate } from "react-router";
import { useState } from "react";
export default function Home() {
    const navigate = useNavigate();
    const [serverData, setServerData] = useState(null);




    return (
        <>
            <h1> this is the home page</h1>
            <button onClick={() => navigate("/userinfo")}>click to view user info</button>
            <button onClick={() => navigate("/collegeinfo")}>click to view college info</button>
        </>
    )
}