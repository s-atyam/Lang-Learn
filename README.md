# Language Learning Game

This language learning game is designed to help users improve their language proficiency through interactive exercises and activities. The application includes frontend UI components, backend logic for scoring, and a MongoDB database to store user progress and language data.

## Features

- Interactive exercises and quizzes to improve language skills.
- User-friendly frontend interface with clear instructions and feedback.
- Authentication system for user registration and login.
- Database management to store user progress, language data, and exercise details.
- Language selection for users to choose the language they want to learn.
- Scoring system.
- Progress tracking.
- User profile and settings to view progress.
- Mobile responsiveness.

## Local Setup

### Frontend

1. Clone the repository:

   ```bash
   git clone https://github.com/s-atyam/Lang-Learn.git
   ```

2. Create a `.env` file in the frontend root directory:

   ```env
   REACT_APP_HOST=http://localhost:5000
   ```

3. Install dependencies and start the frontend:

   ```bash
   npm install
   npm start
   ```

4. Access the application at `http://localhost:3000` in your browser.

### Backend

1. Change directory to Backend

   ```bash
   cd Backend
   ```

2. Create a `.env` file in the backend root directory:

   ```env
   JWT_SECRET=your_jwt_secret
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   ```

   Replace `your_jwt_secret` and `your_mongodb_connection_string` with your actual JWT secret key and MongoDB connection string.

3. Install dependencies and start the backend:

   ```bash
   npm install
   npm start
   ```

4. The backend server will run at `http://localhost:5000`.

## Contributing

If you would like to contribute to the development of this language learning game, feel free to open issues, submit pull requests, or provide feedback.
