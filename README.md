# SREE-NARAYANA


# React & Flask Fullstack Project

This is a full-stack web application using **React** for the frontend and **Flask** for the backend.

## Prerequisites

Before you start, ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (for React)
- [Python](https://www.python.org/downloads/) (for Flask)

---

## Project Structure

```
project-directory/
├── backend/
│   ├── app.py
│   ├── requirements.txt
│   └── venv/
└── frontend/
    ├── package.json
    ├── src/
    └── node_modules/
```

---

## Setup Instructions

### Backend (Flask)

1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```

2. Create and activate a virtual environment:
   - **Windows**:
     ```bash
     python -m venv venv
     venv\Scriptsctivate
     ```
   - **Mac/Linux**:
     ```bash
     python3 -m venv venv
     source venv/bin/activate
     ```

3. Install the required Python packages:
   ```bash
   pip install -r requirements.txt
   ```

4. Run the Flask server:
   ```bash
   python app.py
   ```
   The server will start at `http://127.0.0.1:5000`.

---

### Frontend (React)

1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```

2. Install Node.js dependencies:
   ```bash
   npm install
   ```

3. Start the React development server:
   ```bash
   npm start
   ```
   The React app will be available at `http://localhost:3000`.

---

## Proxy Setup (Frontend to Backend)

To avoid CORS issues, the React app is configured to proxy requests to the Flask server. Ensure the `proxy` field in `frontend/package.json` is set correctly:
```json
"proxy": "http://127.0.0.1:5000"
```

---

## Important Notes

- **Backend Dependencies**: If additional Python packages are required, add them to `requirements.txt` using:
  ```bash
  pip freeze > requirements.txt
  ```

- **Frontend Build**: For production deployment, create a production build of the React app:
  ```bash
  npm run build
  ```
  You can then serve the build files via Flask.

---

## Troubleshooting

### Common Errors

1. **Module Not Found**:
   Ensure all dependencies are installed:
   - Backend: `pip install -r requirements.txt`
   - Frontend: `npm install`

2. **CORS Issues**:
   Ensure `flask-cors` is installed and added to `app.py`:
   ```python
   from flask_cors import CORS
   CORS(app)
   ```

3. **Virtual Environment Issues**:
   Reactivate the virtual environment:
   - **Windows**: `venv\Scriptsctivate`
   - **Mac/Linux**: `source venv/bin/activate`



---
