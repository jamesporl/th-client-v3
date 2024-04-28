### TechHustlers PH

This is a project I built to showcase locally built web and mobile apps - essentially a copy of [Product Hunt](https://producthunt.com).

<p align="center">
  <img src="https://raw.githubusercontent.com/jamesporl/th-client-v3/main/public/th.gif" alt="th">
</p>

### Tech Stack

**Frontend**

Source code: [th-client-v3](https://github.com/jamesporl/th-client-v3)

- Next JS (Apps Router)
- Typescript
- Mantine UI
- Apollo Client - GraphQL API connection
- Mobx - state management
- Slate - rich text editor
  
**Backend**

Source code: [th-server](https://github.com/jamesporl/th-server)

- Express JS
- Typescript
- Apollo Server - GraphQL API
- MongoDB - database
- Mongoose - database ORM
- Digitalocean spaces - file storage
- Redis
- Bullmq - queuing, background jobs
- Sendgrid - transactional emails

### Features

- Infinite scroll of apps by published date or random order in home page
- Apps submission (uploading of logo and screenshots or previews, rich text editor for description of apps)
- Browsing by categories
- Upvotes on apps by users
- Comments and replies to comments on apps, upvotes on comments, pinning of comments
- Authentication (login, sign up, google oauth, reset password)
- Updating of profile
- Static About Us page
