# Hemi Blog

A simple blog website with both backend and frontend code. This project includes a Node.js backend with MongoDB and a Next.js frontend with a modern UI.

## Project Structure

```
hemi-blog/
├── hemi-blog-backend/     # Backend Node.js application
└── hemi-blog-frontend/    # Frontend Next.js application
```

## Features

- 📝 Article management system
- 👤 Author profiles
- 🏷️ Tag-based categorization
- ⏱️ Reading time estimation
- 🎨 Modern and responsive UI
- 🔒 Secure API endpoints

## Technologies Used

### Backend
- Node.js
- Express.js
- MongoDB
- Helmet (Security)
- CORS
- dotenv

### Frontend
- Next.js
- React
- Axios
- Tailwind CSS

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- Yarn or npm

### Backend Setup

1. Navigate to the backend directory:
```bash
cd hemi-blog-backend
```

2. Install dependencies:
```bash
yarn install
```

3. Create a `.env` file in the backend directory:
```env
MONGODB_URI=your_mongodb_connection_string
PORT=3148
```

4. Start the development server:
```bash
yarn start
```

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd hemi-blog-frontend
```

2. Install dependencies:
```bash
yarn install
```

3. Create a `.env` file in the frontend directory:
```env
NEXT_PUBLIC_API_URL=http://localhost:3148
```

4. Start the development server:
```bash
yarn dev
```

## API Endpoints

### GET `/getArticles`
Fetches articles with optional filtering by author or tag.

Parameters:
- `authorId` (optional): Filter articles by author
- `id` (optional): Get specific article
- `limit` (optional): Limit number of articles
- `isDetailed` (optional): Include full article content
- `tagId` (optional): Filter articles by tag

### GET `/getAuthorInfoWtihId`
Fetches author information and their articles.

Parameters:
- `authorId`: Author's ID

## Environment Variables

### Backend
- `MONGODB_URI`: MongoDB connection string
- `PORT`: Server port (default: 3148)

### Frontend
- `NEXT_PUBLIC_API_URL`: Backend API URL

## Development

The project uses the following development tools:
- ESLint for code linting
- Nodemon for hot reloading
- TypeScript for type checking

## Security

- Environment variables for sensitive data
- Helmet.js for security headers
- CORS configuration
- API request validation

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Miktat Cento - [GitHub Profile](https://github.com/miktatcento)
