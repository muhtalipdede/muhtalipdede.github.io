"use client";
import { Post } from "@/types/post";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Blog() {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch("https://muhtalipdede-github-io.vercel.app/api/posts");
                const data = await response.json();
                setPosts(data);
            } catch (error) {
                console.error(error);
            }
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
        <Link href={`/blog/${post.shortLink}`}>
            <article className="mb-4 p-4 bg-gray-100 rounded-lg">
                <h2 className="text-2xl font-bold text-gray-900 mt-4">{post.title}</h2>
                <p className="text-gray-600 mt-2">By {post.author} on {new Date(post.date).toLocaleDateString()}</p>
                <p className="text-gray-800 mt-2">{post.body}</p>
                <div className="flex flex-wrap mt-4">
                    {post.tags.map((tag: string) => (
                        <span key={tag} className="bg-gray-200 text-gray-800 rounded-full px-2 py-1 text-sm mr-2 mb-2">{tag}</span>
                    ))}
                </div>
            </article>
        </Link>
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
