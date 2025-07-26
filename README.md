Gym Management System
A complete Gym CRM (Customer Relationship Management) application with separate Backend (Node.js/Express) and Frontend. It manages gym members, memberships, attendance, and admin/receptionist functionalities.

🚀 Features
✅ Member Registration & Management

✅ Membership Plans

✅ Attendance Tracking

✅ Admin & Receptionist Roles

✅ Secure Authentication (JWT/Bcrypt)

✅ REST API with Express.js

✅ MongoDB/Mongoose Database Integration

📂 Project Structure
bash
Copy
Edit
GYM_CRM/
│
├── Backend/         # Node.js/Express API
│   ├── config/      # DB & environment configuration
│   ├── controllers/ # Business logic
│   ├── middleware/  # Auth & error handling
│   ├── models/      # Mongoose Schemas
│   ├── routes/      # API Routes
│   ├── app.js       # Main server file
│   ├── .env         # Environment variables
│   ├── package.json # Backend dependencies
│
├── Frontend/        # React/Frontend
│   ├── src/         # React components & pages
│   ├── package.json # Frontend dependencies
│
└── README.md
🛠️ Tech Stack
Backend
Node.js

Express.js

MongoDB + Mongoose

JWT Authentication

Bcrypt for password hashing

Frontend
React.js

TailwindCSS / CSS

⚙️ Installation & Setup
1️⃣ Clone the repository
bash
Copy
Edit
git clone <repo-url>
cd GYM_CRM
2️⃣ Backend Setup
bash
Copy
Edit
cd Backend
npm install
Create a .env file inside Backend/ with:

ini
Copy
Edit
PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_secret_key
Run the backend:

bash
Copy
Edit
npm run dev
(or node app.js if no dev script)

3️⃣ Frontend Setup
bash
Copy
Edit
cd Frontend
npm install
npm run dev
📌 API Endpoints (Backend)
Auth

POST /api/auth/register → Register user

POST /api/auth/login → Login user

Members

GET /api/members → Get all members

POST /api/members → Add new member

Attendance

POST /api/attendance → Mark attendance

🧑‍💻 Roles
Admin: View/manage all members, plans, and attendance.

Receptionist: Register members and mark attendance.
