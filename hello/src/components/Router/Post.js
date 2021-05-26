import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
export default function Post({ match }) {

    const [post, setPost] = useState({});

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/' + match.params.id)
            .then(resp => {
                setPost(resp.data)
            })
    }, [])
    return (
        <div className="posts">
            {
                Object.keys(post).length ?
                    <div className="single-post" k>
                        <h1>{post.title}</h1>
                        <p>{post.body}</p>
                        <Link to="/post">Back</Link>
                    </div>
                    : <div className="loading">
                        <h4>Loading....</h4>
                    </div>
            }

        </div>
    )
}
