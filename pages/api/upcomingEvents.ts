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
        throw new Error("Response was bad");
      }

      const data = await response.json();

      const upcoming = data.map((item: any) => ({
        imageUrl: "/images/books/books1.svg",
        title:
          item.title.length > 10
            ? `${item.title.substring(0, 10)}...`
            : item.title,
        price: "200",
        time: "8:00 AM",
        date: "02/10/2024",
        mode: "Virtual",
        location: "Lagos",
        body:
          item.body.length > 30
            ? `${item.title.substring(0, 30)}...`
            : item.body,
      }));

      res.status(200).json(upcoming);
    } catch (error) {
      console.log("Failed to load Upcoming Events:", error);
      res.status(500).json({ error: "Failed to show the Upcoming Events" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
