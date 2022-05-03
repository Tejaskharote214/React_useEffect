import { useState, useEffect } from "react";


export const Todos = ()=>{
const [todos, setTodos] = useState([]);
const [text, setText] = useState("");
const [pages, setPages] = useState(1)

useEffect(()=>{
    console.log("Mounted")
    getData()

    return function cleanup(){
        console.log("Unmounted")
    };
}, [pages])

const getData =async ()=>{
    const data = await fetch(`http://localhost:8080/todos?_page=${pages}&_limit=3`)
    .then((d)=> d.json())
    console.log(data)

    setTodos(data)
}

return (
    <div>
        <input type="text" placeholder="Enter Todo" 
        onChange={(e)=>setText(e.target.value)}/>
        <button
        onClick={()=>{
            const payload = {
                title : text,
                status : false
            };
            fetch("http://localhost:8080/todos",{
                method:"POST",
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify(payload)
            }).then(()=>{
                getData();
            })
        }}
        >Add todo</button>

        {todos.map((t)=>(
            <div>{t.id}.{t.title}</div>
        ))}
        
        <button
        onClick={()=>{
            setPages(pages - 1)
        }}
        >Prev</button>
        <button
        onClick={()=>{
            setPages(pages + 1)
        }}
        >Next</button>
    </div>
)
}