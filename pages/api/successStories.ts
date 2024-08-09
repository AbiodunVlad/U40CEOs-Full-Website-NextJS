import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const data = [
        {
          firstName: "Victor",
          lastName: "Idolo",
          company: "Landingfolio",
          touchPoint: "Webinar",
          topic: "Sales & Marketing for Business Growth",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          firstName: "Victor",
          lastName: "Idolo",
          company: "Landingfolio",
          touchPoint: "Webinar",
          topic: "Sales & Marketing for Business Growth",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          firstName: "Victor",
          lastName: "Idolo",
          company: "Landingfolio",
          touchPoint: "Webinar",
          topic: "Sales & Marketing for Business Growth",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          firstName: "Victor",
          lastName: "Idolo",
          company: "Landingfolio",
          touchPoint: "Webinar",
          topic: "Sales & Marketing for Business Growth",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          firstName: "Victor",
          lastName: "Idolo",
          company: "Landingfolio",
          touchPoint: "Webinar",
          topic: "Sales & Marketing for Business Growth",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          firstName: "Victor",
          lastName: "Idolo",
          company: "Landingfolio",
          touchPoint: "Webinar",
          topic: "Sales & Marketing for Business Growth",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          firstName: "Victor",
          lastName: "Idolo",
          company: "Landingfolio",
          touchPoint: "Webinar",
          topic: "Sales & Marketing for Business Growth",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          firstName: "Victor",
          lastName: "Idolo",
          company: "Landingfolio",
          touchPoint: "Webinar",
          topic: "Sales & Marketing for Business Growth",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          firstName: "Victor",
          lastName: "Idolo",
          company: "Landingfolio",
          touchPoint: "Webinar",
          topic: "Sales & Marketing for Business Growth",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          firstName: "Victor",
          lastName: "Idolo",
          company: "Landingfolio",
          touchPoint: "Webinar",
          topic: "Sales & Marketing for Business Growth",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          firstName: "Victor",
          lastName: "Idolo",
          company: "Landingfolio",
          touchPoint: "Webinar",
          topic: "Sales & Marketing for Business Growth",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          firstName: "Victor",
          lastName: "Idolo",
          company: "Landingfolio",
          touchPoint: "Webinar",
          topic: "Sales & Marketing for Business Growth",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          firstName: "Victor",
          lastName: "Idolo",
          company: "Landingfolio",
          touchPoint: "Webinar",
          topic: "Sales & Marketing for Business Growth",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          firstName: "Victor",
          lastName: "Idolo",
          company: "Landingfolio",
          touchPoint: "Webinar",
          topic: "Sales & Marketing for Business Growth",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          firstName: "Victor",
          lastName: "Idolo",
          company: "Landingfolio",
          touchPoint: "Webinar",
          topic: "Sales & Marketing for Business Growth",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          firstName: "Victor",
          lastName: "Idolo",
          company: "Landingfolio",
          touchPoint: "Webinar",
          topic: "Sales & Marketing for Business Growth",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          firstName: "Victor",
          lastName: "Idolo",
          company: "Landingfolio",
          touchPoint: "Webinar",
          topic: "Sales & Marketing for Business Growth",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          firstName: "Victor",
          lastName: "Idolo",
          company: "Landingfolio",
          touchPoint: "Webinar",
          topic: "Sales & Marketing for Business Growth",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          firstName: "Victor",
          lastName: "Idolo",
          company: "Landingfolio",
          touchPoint: "Webinar",
          topic: "Sales & Marketing for Business Growth",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          firstName: "Victor",
          lastName: "Idolo",
          company: "Landingfolio",
          touchPoint: "Webinar",
          topic: "Sales & Marketing for Business Growth",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          firstName: "Victor",
          lastName: "Idolo",
          company: "Landingfolio",
          touchPoint: "Webinar",
          topic: "Sales & Marketing for Business Growth",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          firstName: "Victor",
          lastName: "Idolo",
          company: "Landingfolio",
          touchPoint: "Webinar",
          topic: "Sales & Marketing for Business Growth",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          firstName: "Victor",
          lastName: "Idolo",
          company: "Landingfolio",
          touchPoint: "Webinar",
          topic: "Sales & Marketing for Business Growth",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          firstName: "Victor",
          lastName: "Idolo",
          company: "Landingfolio",
          touchPoint: "Webinar",
          topic: "Sales & Marketing for Business Growth",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
      ];

      res.status(200).json(data);
    } catch (error) {
      if (error instanceof Error) {
        res
          .status(500)
          .json({ message: "Internal Server Error", error: error.message });
      } else {
        res.status(500).json({
          message: "Internal Server Error",
          error: "An unknown error occurred",
        });
      }
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
