import {useNavigate} from "react-router";
export default function Home(){
    const navigate = useNavigate();
    
    return(
        <>
            <h1> this is the home page</h1>
            <button onClick={()=>navigate("/userinfo")}>click to view user info</button>
        </>
    )
}