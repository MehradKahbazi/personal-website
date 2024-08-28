import { useEffect } from "react"

const List = () =>{
    useEffect(() =>{
        const token = localStorage.getItem('token')
        console.log(JSON.parse(token));
        fetch('http://localhost:3000/course-register',{
            method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Authorization": "Bearer " + JSON.parse(token)
        },
        }).then((res) => res.json()).then( list =>{console.log(list);})
    },[])
    return <h1>test</h1>
}

export default List;