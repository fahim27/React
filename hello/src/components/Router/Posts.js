import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
export default function Post() {

    const [posts, setPost] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(resp => {
                setPost(resp.data)
            })
    }, [])
    return (
        <div className="posts">
            {
                posts.length ? posts.map((post, index) => {
                    return <div className="single-post" key={index}>
                        <Link to={`post/${post.id}`}>
                            <h1>{post.title}</h1>
                        </Link>
                    </div>
                }) : <div className="loading">
                    <h4>Loading....</h4>
                </div>
            }

        </div>
    )
}
