# Development Commands

## Quick Start

To run both frontend and backend simultaneously:

```bash
npm run dev
```

This will start:
- **Backend Server**: http://localhost:5000 (with nodemon for auto-restart)
- **Frontend**: http://localhost:5179 (Vite dev server)

## Available Commands

### Combined Commands
- `npm run dev` - Start both frontend and backend in development mode
- `npm run start` - Start backend in production mode and build frontend
- `npm run install:all` - Install dependencies for all projects

### Individual Commands
- `npm run server:dev` - Start only the backend server (development)
- `npm run server:start` - Start only the backend server (production)
- `npm run client:dev` - Start only the frontend (development)
- `npm run client:build` - Build the frontend for production
- `npm run client:preview` - Preview the built frontend

## Project Structure
```
portfolio/
├── server/          # Backend (Express.js + MongoDB)
├── portfolio/       # Frontend (React + Vite + Tailwind)
└── package.json     # Root package with combined scripts
```

## Ports
- Backend: 5000
- Frontend: 5179 (auto-increments if port is busy)
