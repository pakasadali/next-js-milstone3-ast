
"use client"
import { Blog_Data } from "@/app/data/blog"
import { useState } from "react";

type BlogProps = {
    params: {
        id: string
    }
}

type Comment = {
    id: number;
    name: string;
    comment: string;
};

export default function BlogPage({ params: { id } }: BlogProps) {

    const [comments, setComments] = useState<Comment[]>([]);
    const [name, setName] = useState("");
    const [comment, setComment] = useState("");

    const blog = Object.values(Blog_Data)
        .flat()
        .find((b) => b.id === id)

    if (!blog) {
        return (
            <>
                <div className="flex items-center justify-center min-h-screen">
                    <h1 className="font-extrabold text-2xl text-red-500">Not Found </h1>
                </div>
            </>
        )
    }

    const handleAddComment = () => {
        if (name.trim() && comment.trim()) {
            const newComment: Comment = {
                id: comments.length + 1,
                name,
                comment,
            };
            setComments([...comments, newComment]);
            setName("");
            setComment("");
        }
    };

    return (
        <div className="w-full flex items-center justify-center">
            <div className="w-4/6 mx-auto py-6">

                <h1 className="py-2 text-3xl font-bold text-gray-500">{blog.title}</h1>

                <div className="object-cover w-[250px] h-auto sm:w-[400px] md:w-[500px] 
                lg:w-[700px] xl:w-[900px] pb-3 sm:pb-4 md:pb-6 lg:pb-7 xl:pb-10">
                    <img src={blog.image} className="w-full" alt="image" />
                </div>

                <h3 className="pb-2 sm:pb-3 md:pb-4 lg:pb-6 xl:pb-7 text-orange-300
                 text-[11px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]">{blog.description}</h3>

                <p className="pb-2 sm:pb-3 md:pb-4 lg:pb-6 xl:pb-7 text-black text-[12px] sm:text-[14px] md:text-[16px]
                 lg:text-[20px] xl:text-[24px] w-[100%] text-justify">{blog.content}</p>

                <div className="border-t pt-6">
                    <h2 className="text-xl font-bold text-gray-700">Comments</h2>

                    <div className="mt-6">
                        {comments.length === 0 ? (
                            <p className="text-gray-500">No comments yet. Be the first to comment!</p>
                        ) : (
                            comments.map((comment) => (
                                <div
                                    key={comment.id}
                                    className="border rounded p-4 mb-4 bg-gray-50"
                                >
                                    <h3 className="font-bold text-gray-700">{comment.name}</h3>
                                    <p className="text-gray-600">{comment.comment}</p>
                                </div>
                            ))
                        )}
                    </div>
                    
                    <div className="mt-4">
                        <input
                            type="text"
                            placeholder="Your Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="border rounded w-full p-2 mb-2"
                        />
                        <textarea
                            placeholder="Your Comment"
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            className="border rounded w-full p-2 mb-2"
                        />
                        <button
                            onClick={handleAddComment}
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        >
                            Add Comment
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}
