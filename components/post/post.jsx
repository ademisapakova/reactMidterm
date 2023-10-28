import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from "../../shared/configs/axios-config";


function PostPage() {
    const { postId } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axiosInstance.get(`/api/posts/${postId}`)
            .then((response) => {
                setPost(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching post data:', error);
                setLoading(false);
            });
    }, [postId]);

    const handleLike = (postId) => {
        axiosInstance.post(`/api/posts/${postId}/like`)
            .then((response) => {
                const updatedPosts = post.map((post) => {
                    if (post.id === postId) {
                        return { ...post, likes: response.data.likes };
                    }
                    return post;
                });
                setPost(updatedPosts);
            })
            .catch((error) => {
                console.error('Error liking the post:', error);
            });
    };
    return (
        <div>
            <h1>Post Page</h1>

            {loading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    {post ? (
                        <div>
                            <h2>{post.Text}</h2>
                            <p>Likes: {post.likes}</p>
                            <button onClick={() => handleLike(post.id)}>Like</button>
                        </div>
                    ) : (
                        <p>Post not found.</p>
                    )}
                </div>
            )}
        </div>
    );
}

export default PostPage;
