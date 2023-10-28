import React, { useState, useEffect } from 'react';
import axiosInstance from "../../shared/configs/axios-config";
import {useNavigate} from 'react-router-dom';


function Home() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const pageRoute = useNavigate()


    useEffect(() => {
        axiosInstance.get('/api/posts')
            .then((response) => {
                setPosts(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);

    const handleLike = (postId) => {

        axiosInstance.post(`/api/posts/${postId}/`)
            .then((response) => {
                const updatedPosts = posts.map((post) => {
                    if (post.id === postId) {
                        return { ...post, likes: response.data.likes };
                    }
                    return post;
                });
                setPosts(updatedPosts);
            })
            .catch((error) => {
                console.error('Error liking the post:', error);
            });
    };

    return (
        <div>
            <h1>Home Page</h1>

            {loading ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    {posts.map((post) => (
                        <li key={post.id}>
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                            <p>Likes: {post.likes}</p>
                            <button onClick={() => handleLike(post.id)}>Like</button>
                            <h4 className="link" onClick={() => pageRoute(`/posts/${post.id}`)}> {post.id}</h4>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Home;
