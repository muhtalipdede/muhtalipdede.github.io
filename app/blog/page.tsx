"use client";
import { useEffect, useState } from "react";

export default function Blog() {
    const [posts, setPosts] = useState<any[]>([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch("https://muhtalipdede-github-io.vercel.app/api/posts");
            const data = await response.json();
            setPosts(data);
        };

        fetchPosts();
    }, []);

    const BlogPostSkeleton = () => (
        <article className="flex flex-col mb-4 p-4 bg-gray-100 rounded-lg min-w-full min-h-full">
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
        </article>
    );

    const BlogPost = ({ post }: { post: any }) => (
        <article className="mb-4 p-4 bg-gray-100 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{post.title}</h2>
            <p className="text-gray-700 mb-2">{post.body}</p>
            <p className="text-gray-700 mb-2">By {post.author}</p>
            <p className="text-gray-700 mb-2">{post.date}</p>
            <ul className="flex flex-wrap">
                {post.tags.map((tag: string) => (
                    <li key={tag} className="bg-blue-500 text-white rounded-full px-2 py-1 text-sm mr-2 mb-2">{tag}</li>
                ))}
            </ul>
            <ul className="mt-4">
                {post.comments.map((comment: string) => (
                    <li key={comment} className="text-gray-700">{comment}</li>
                ))}
            </ul>
        </article>
    );
    return (
        <main className="flex flex-col justify-center min-h-screen max-w-3xl mx-auto p-4">
            <h1 className="text-4xl font-bold text-center mb-4 text-gray-900">Blog</h1>
            {posts.length === 0 && (
                [...Array(10)].map((_, index) => <BlogPostSkeleton key={index} />)
            )}
            {posts.map((post) => (
                <BlogPost key={post.id} post={post} />
            ))}
        </main>
    );
}
