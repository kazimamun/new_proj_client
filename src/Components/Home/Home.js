import React, { createContext, useState } from 'react';
import CreatePost from '../CreatePost/CreatePost';

export const PostContext = createContext();

const Home = () => {
    const [post, setPost] = useState({
        title: '',
        post: ''
    });
    const handlePostSubmit = async e => {
        e.preventDefault();
        await fetch('http://localhost:4000/createPost/', {
            method: 'POST',
            body: JSON.stringify(post),
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data => console.log(data))
    };
    const handleValueChange = e => {
        setPost({
            ...post,
            [e.target.name]: e.target.value
        })
    };
    return (
        <PostContext.Provider value={[handlePostSubmit, handleValueChange]}>
            <CreatePost />
        </PostContext.Provider>
    );
};

export default Home;