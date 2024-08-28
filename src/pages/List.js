import { useEffect, useState } from "react"

const List = () =>{
    const [data, setData] = useState([]);
    useEffect(() =>{
        const token = localStorage.getItem('token')
        console.log(JSON.parse(token));
        fetch('https://personal-website-backend-lxs6.onrender.com/course-register',{
            method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Authorization": "Bearer " + JSON.parse(token)
        },
        }).then((res) => res.json()).then( list =>{setData(list);})
    },[])
    return (
        <div>
            {data.map(item => <h3 key={item.id}>{item.first_name} {item.last_name}</h3>)}
        </div>
    )
}

export default List;