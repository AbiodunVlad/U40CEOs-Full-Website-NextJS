"use client";
import React, { useEffect, useState } from "react";

type Comment = {
  name: string;
  message: string;
  date: string;
};

interface CommentSectionProps {
  blogId: string;
}

export default function Comment({ blogId }: CommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const storedComments = localStorage.getItem(`comments-${blogId}`);
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  }, [blogId]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newComment = {
      name,
      message,
      date: new Date().toLocaleString(),
    };

    const updatedComments = [newComment, ...comments];

    localStorage.setItem(`comments-${blogId}`, JSON.stringify(updatedComments));
    setComments(updatedComments);

    setName("");
    setMessage("");
  };

  return (
    <div className="px-5 sm:px-20">
      <div className="mt-10">
        <h3 className="text-xl font-bold mb-4">Leave a comment</h3>

        <form onSubmit={handleSubmit} className="mb-6">
          <input
            type="text"
            className="border border-gray-500 p-2 w-full mb-4"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <textarea
            className="border border-gray-500 p-2 w-full mb-4"
            placeholder="Your Comment"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Post Comment
          </button>
        </form>

        {comments.length > 0 && (
          <div>
            <h4 className="text-lg font-bold mb-4">Comments</h4>
            <ul className="space-y-4">
              {comments.map((comment, index) => (
                <li key={index} className="border-b pb-4">
                  <p className="font-semibold">{comment.name}</p>
                  <p>{comment.message}</p>
                  <span className="text-gray-500 text-sm">{comment.date}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
