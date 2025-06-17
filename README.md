# Django React Full Stack Project

This is a full-stack project using Django for the backend and React for the frontend.

## Project Structure
```
p2p/
├── backend/         # Django backend
├── frontend/        # React frontend
├── requirements.txt # Python dependencies
└── README.md       # This file
```

## Setup Instructions

### Backend Setup
1. Create a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

3. Run migrations:
   ```bash
   cd backend
   python manage.py migrate
   ```

4. Start the backend server:
   ```bash
   python manage.py runserver
   ```

### Frontend Setup
1. Install dependencies:
   ```bash
   cd frontend
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

The backend will run on http://localhost:8000 and the frontend on http://localhost:3000 