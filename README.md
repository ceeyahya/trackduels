[![Mastodon](https://img.shields.io/badge/Mastodon-5c4bdf?style=for-the-badge&logo=Mastodon&logoColor=ffffff&link=https://fosstodon.org/@hya)](https://fosstodon.org/@hya)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=LinkedIn&logoColor=ffffff&link=https://www.linkedin.com/in/yahya-chahine/)](https://www.linkedin.com/in/yahya-chahine/)
[![Portfolio](https://img.shields.io/badge/Portfolio-6366f1?style=for-the-badge&logo=Internet-Explorer&logoColor=ffffff&link=https://www.chahineyahya.dev)](https://www.chahineyahya.dev)

# **TrackDuels**

You can access the live version of the project by clicking below:

[![Check out the Live Version](https://img.shields.io/badge/Check%20out%20the%20Live%20Version-6366f1?style=for-the-badge&logoColor=ffffff&link=https://trackduels.vercel.app)](https://trackduels.vercel.app)

## Project Purpose

I enjoy exchanging Spotify playlists with my friends and new people I meet, and I always wonder what their favourite songs in my playlist are.

so I decided to find out by creating an application, that pulls all the songs from my playlists and in each round prompts the user to vote for their favourite out of 2 random songs. Then I created a leaderboard page that list the top 10 most liked songs.

## Tech Stack

This repository/project is a revamp of a previous version with the same purpose, it used Python (FastAPI) and Postgres hosted on [Render](https://render.com) for the backend and Next.js hosted on [Vercel](https://vercel.com) for the frontend. Unfortunately I couldn't keep my database instance up due to Render's free tier limit.

The new version uses [Supabase](https://supabase.com), [Prisma](https://prisma.io) and Next.js (Typescript) hosted on Vercel. I use Tailwind CSS to style the app and [Framer Motion](https://framer.com/motion) for animations.

## Setup the Project Locally

1. Clone the project

```console
git clone git@github.com:ceeyahya/trackduels.git
```

2. Navigate to the folder and install the dependencies

```console
cd trackduels/ && npm install
```

3. The default prisma database provider is postgres, so either create a db locally or use supabase.

4. Create a `.env` file at the root of the project

5. Add the database connection URI to the `.env` file

6. Run the project

```console
npm run dev
```

## Note

The JavaScript Spotify API has a bad DX in my opinion, I didn't want to deal with it for a project this size, so I wrote a script in Python that I run when I add new songs to my playlist using Python and Spotipy.
