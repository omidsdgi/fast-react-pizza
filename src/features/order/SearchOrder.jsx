import {useState} from "react";
import {useNavigate} from "react-router-dom";

function SearchOrder() {
    const navigate = useNavigate();
    const [query,SetQuery]=useState("")
    function handleSubmit(e){
        e.preventDefault()
        if(!query) return;
        navigate(`/order/${query}`);
        SetQuery("")
    }
    return (
        <form onSubmit={handleSubmit}>
        <input placeholder="Search order #" value={query}
               onChange={(e) => SetQuery(e.target.value)}/>
        </form>
    );}

export default SearchOrder