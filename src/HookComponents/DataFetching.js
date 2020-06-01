import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataFetching() {

//const [post, setPosts] = useState([])
 const [post, setPosts] = useState({})
 const [id, setId] = useState(1)
 const [btnid, setbtnId] = useState(1)
 
 const handleClick = () => {
    setbtnId(id)
 }

 useEffect(() => {
    //axios.get('https://jsonplaceholder.typicode.com/posts/')
    axios.get(`https://jsonplaceholder.typicode.com/posts/${btnid}`)
    .then(res =>{
        console.log('fetch')
        setPosts(res.data)
    })
    .catch(err => {
        console.log(err)
    })
 },[btnid])

    return(
        <div>
            <input type="text" value={id} onChange={e => setId(e.target.value)} />
            <button type="button" onClick={handleClick}>Fetch Post</button>
            <div>{post.title}</div>
            <ul>
            {/*
                posts.map(p => (
                    <li key={post.id}>
                        {post.title}
                    </li>
                ))
                */}
            </ul>
           
        </div>
    )
}

export default DataFetching;