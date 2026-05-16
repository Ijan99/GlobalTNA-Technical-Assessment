# GlobalTNA - Mini Service Request Board

## Overview
A full-stack web application where users can post service requests and tradespeople can manage them.

---

## Tech Stack

- Frontend: Next.js
- Backend: Node.js + Express
- Database: MongoDB
- Styling: Tailwind CSS

---

## Backend Setup

```bash
cd backend
npm install
npm run dev
```

Create a `.env` file inside backend folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

---

## Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend:
```txt
http://localhost:3000
```

Backend:
```txt
http://localhost:5000
```

---

## API Endpoints

- GET /api/jobs
- GET /api/jobs/:id
- POST /api/jobs
- PATCH /api/jobs/:id
- DELETE /api/jobs/:id

---

## Features

- Create service requests
- View all requests
- Filter requests by category
- Update request status
- Delete requests

---

## Author

Ijan Gaweshada Panditharathne