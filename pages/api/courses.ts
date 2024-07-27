import type { NextApiRequest, NextApiResponse } from "next";

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

      const data = await response.json();

      //JSONPlaceholder data mapped to course structure
      const courses = data.map((item: any) => ({
        title: item.title,
        videoUrl:
          "https://www.youtube.com/embed/6VSyCoBCzXY?si=Atwhzufq9IBnufba", // Placeholder video URL
      }));

      res.status(200).json(courses);
    } catch (error) {
      console.log("Failed to fetch courses:", error);
      res.status(500).json({ error: "Failed to fetch courses" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
