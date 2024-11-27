# Laptopie
A laptop recommendation system using AI for faster and more accurate results than ever.

# Features
### Landing Page

This pages showcase the paltforms features as well as gives a detailed view of the available pricing options to use the platform.

### Sign up page 
User creates their account which allows them to use the system.

### Specifications page
This page gives detailed explanation on the various laptop specifictions.

### Laptop Recommendations
- After the user has signed up they can get laptop recommendations.
- It has two paths:
1. the user can answer questions curated by use about the laptop they want.
2. The user can quickly describe the laptop the want. 
- After completing this step the user then submite their answers or description to then get their recommendations.
The system uses Gemini for the recommendations.

## Tech stack
- `NextJs` for backend and frontend
- `Next-Auth` for authentication
- `MongoDb` and `Prisma` for database
- `Gemini` for the recommendations
- Deployed to `netlify`


## Enviroment variables
- DATABASE_URL
- GEMINI_API_KEY
- NEXTAUTH_URL
- LAPTOPIE_URL
- NEXTAUTH_SECRET
- GITHUB_SECRET
- GITHUB_ID
- PUSHER_APP_ID
- NEXT_PUBLIC_PUSHER_KEY
- PUSHER_SECRET
- GOOGLE_CLIENT_ID
- GOOGLE_CLIENT_SECRET
- EMAIL_SERVER_USER
- EMAIL_SERVER_PASSWORD
- EMAIL_FROM
  
## Getting started
- `npm i pnpm`
- `pnpm i`
- `pnpx prisma generate`
- `pnpm run dev`
