"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
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

  const router = useRouter();

  useEffect(() => {
    const storedComments = localStorage.getItem(`comments-${blogId}`);
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  }, [blogId]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const authStatus = localStorage.getItem("isAuthenticated");

    if (authStatus !== "true") {
      localStorage.setItem("previousPage", window.location.pathname);
      router.push("/login");
      return;
    }

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
        <h3 className="text-3xl font-bold mb-4">Leave a comment</h3>

        <form onSubmit={handleSubmit} className="mb-6">
          <input
            type="text"
            className="text-black w-full py-4 px-2 border border-red-300 rounded-lg focus:outline-none mb-5 text-base sm:text-2xl"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <textarea
            className="text-black w-full py-4 px-2 border border-red-300 rounded-lg focus:outline-none mb-5 text-base sm:text-2xl"
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
      </div>

      {comments.length > 0 && (
        <div>
          <h4 className="text-lg font-bold mb-4">Comments</h4>
          <ul className="space-y-4">
            {comments.map((comment, index) => (
              <li key={index} className="border-b pb-4">
                <p className="font-semibold">{comment.name}</p>
                <p className="text-base sm:text-2xl">{comment.message}</p>
                <span className="text-gray-500 text-sm">{comment.date}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
