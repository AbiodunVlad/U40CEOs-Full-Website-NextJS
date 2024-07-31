import type { NextApiRequest, NextApiResponse } from "next";

// const categories = [
//   "Business",
//   "E-Commerce",
//   "Technology",
//   "Marketing",
//   "Sales",
//   "Startup",
//   "Events",
//   "Pitching",
// ];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );

      if (!response.ok) {
        throw new Error("Network response was bad");
      }

      const items = await response.json();

      //JSONPlaceholder data mapped to course structure
      const articles = items.map((item: any) => ({
        title:
          item.title.length > 15
            ? `${item.title.substring(0, 15)}...`
            : item.title,
        body:
          item.body.length > 50
            ? `${item.body.substring(0, 50)}...`
            : item.body,
        category: "Business",
        author: "John Doe",
        date: "29/07/2024",
      }));

      res.status(200).json(articles);
    } catch (error) {
      console.log("Failed to fetch articles:", error);
      res.status(500).json({ error: "Failed to fetch articles" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
