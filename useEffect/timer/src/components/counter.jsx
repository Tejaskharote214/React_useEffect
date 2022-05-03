import {useState,useEffect} from "react"


export const Counter = ()=>{
    const [count,setCount] = useState(0)

    useEffect(()=>{
        let id = setInterval(()=>{
            setCount((prevValue)=>{
                if(prevValue >= 10)
                {
                    clearInterval(id)
                    return 10;
                }
               return prevValue+1;
            })
        },1000)
    }, [])

    return(
        <div>
            <h1>Timer: {count}</h1>
        </div>
    )
}