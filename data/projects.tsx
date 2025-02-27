export const projects = [
    {
        "title": "Missive — Longform Social Letter App",
        "description": "Missive is a social media platform where users publish long-form letters, reply to others with letters, and personalize their space with visuals. The app includes AI-assisted writing, customizable profiles, and a letter reply system.",
        "frontend": {
          "contributions": [
            "Designed responsive UI using Tailwind CSS",
            "Implemented letter editor with autosave and markdown preview",
            "Built routing and dynamic pages using Next.js App Router",
            "Integrated AI-assisted writing tool into the editor",
            "Added animations using Framer Motion"
          ],
          "frameworks": ["Next.js", "Tailwind CSS", "Framer Motion"]
        },
        "backend": {
          "contributions": [
            "Created RESTful API for letters, users, and replies using Express",
            "Integrated OpenAI API for AI-assisted writing feature",
            "Handled user authentication using JWT",
            "Designed MongoDB schemas for user profiles and letters",
            "Implemented role-based access control for moderation"
          ],
          "frameworks": ["Node.js", "Express", "MongoDB", "OpenAI API"]
        }
      }
]