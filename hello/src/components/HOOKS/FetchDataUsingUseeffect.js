import React,{useState,useEffect} from 'react'
import axios from 'axios';

export default function FetchDataUsingUseeffect() {
    const [posts,setpost]=useState("");

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(resp=>{
            setpost(resp.data)
        })

    }, [])
    return (
        <div>
            {
               posts.length ?  posts.map((post,index)=>{
                return             <h1 key={post.id}>{post.title}</h1>

            }) : null  
            }
        </div>
    )
}
