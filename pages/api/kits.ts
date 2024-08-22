// import type { NextApiRequest, NextApiResponse } from "next";

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   if (req.method === "GET") {
//     const { id } = req.query;

//     try {
//       const response = await fetch(
//         `https://jsonplaceholder.typicode.com/posts/${id}`
//       );

//       if (!response.ok) {
//         throw new Error("Network response was bad");
//       }

//       const item = await response.json();

//       const kit = {
//         id: item.id,
//         ImageUrl: "/images/books/books1.svg",
//         kitName: "Entrepreneur Starter Kit",
//         price: 200,
//         description:
//           item.body.length > 40
//             ? `${item.body.substring(0, 40)}...`
//             : item.body,
//       };

//       res.status(200).json(kit);
//     } catch (error) {
//       console.log("Failed to fetch courses:", error);
//       res.status(500).json({ error: "Failed to fetch courses" });
//     }
//   } else {
//     res.setHeader("Allow", ["GET"]);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }

// Working API

// import type { NextApiRequest, NextApiResponse } from "next";

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   if (req.method === "GET") {
//     try {
//       const response = await fetch(
//         "https://jsonplaceholder.typicode.com/posts"
//       );

//       if (!response.ok) {
//         throw new Error("Network response was bad");
//       }

//       const data = await response.json();

//       const kits = data.map((item: any) => ({
//         id: item.id,

//         ImageUrl: "/images/books/books1.svg",

//         kitName: "Entrepreneur Starter Kit",

//         price: 200,

//         description:
//           item.body.length > 40
//             ? `${item.body.substring(0, 40)}...`
//             : item.body,
//       }));

//       res.status(200).json(kits);
//     } catch (error) {
//       console.log("Failed to fetch courses:", error);
//       res.status(500).json({ error: "Failed to fetch courses" });
//     }
//   } else {
//     res.setHeader("Allow", ["GET"]);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const { id } = req.query;

    try {
      if (id) {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );

        if (!response.ok) {
          throw new Error("Network response was bad");
        }

        const item = await response.json();

        const kit = {
          id: item.id,
          ImageUrl: "/images/books/books1.svg",
          kitName: "Entrepreneur Starter Kit",
          price: 200,
          description:
            item.body.length > 20
              ? `${item.body.substring(0, 20)}...`
              : item.body,
        };

        res.status(200).json(kit);
      } else {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );

        if (!response.ok) {
          throw new Error("Network response was bad");
        }

        const data = await response.json();

        const kits = data.map((item: any) => ({
          id: item.id,
          ImageUrl: "/images/books/books1.svg",
          kitName: "Entrepreneur Starter Kit",
          price: 200,
          description:
            item.body.length > 20
              ? `${item.body.substring(0, 20)}...`
              : item.body,
        }));

        res.status(200).json(kits);
      }
    } catch (error) {
      console.log("Failed to fetch kits:", error);
      res.status(500).json({ error: "Failed to fetch kits" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
