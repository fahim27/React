
import axios from 'axios'
import React, { Component } from 'react'

export default class Post extends Component {

    constructor(props) {
        super(props)

        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(resp => {
                this.setState({
                    posts: resp.data
                })
            })
            .catch(e => {
                console.log(e)
            })
    }

    render() {
        return (
            <div>
                <h2>Post</h2>
                {this.state.posts.length ? this.state.posts.map(post => {
                    return <div>
                        <h1 key={post.id}>{post.title}</h1>
                    </div>
                }) : null}
            </div>
        )
    }
}
