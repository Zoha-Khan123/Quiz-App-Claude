# 📘 Student Quiz Web App — Professional Project Guide

**Tech Stack:** Node.js + Express + MongoDB + React + JWT

---

# 🎯 Project Overview

Build a **Student Quiz Web Application** with:

* 🔐 Authentication (Signup/Login)
* 🧠 Quiz Attempt System
* ⏱ Timer with Auto Submit
* 🔁 Multiple Attempts
* 📊 Attempt History

---

# 🧩 Development Strategy (3 Phases)

1. **Backend Development (API + Database)**
2. **Frontend UI Development (React)**
3. **Integration (Frontend ↔ Backend)**

---

# 🔵 PART 1: BACKEND DEVELOPMENT

---

## 🔹 1. Project Setup

```bash
npm init -y
npm install express mongoose bcrypt jsonwebtoken cors dotenv
```

---

## 🔹 2. Folder Structure

```
models/
controllers/
routes/
middleware/
config/
server.js
.env
```

---

## 🔹 3. Environment Variables (.env)

```
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
```

---

## 🔹 4. MongoDB Connection

* Use Mongoose to connect database
* Handle success & error logs

---

## 🔹 5. User Authentication

### ✅ Signup

* Input: name, email, password
* Hash password using bcrypt
* Save user in DB

### ✅ Login

* Verify email & password
* Generate JWT token

---

## 🔹 6. JWT Authentication Middleware

### Token Format:

```
Authorization: Bearer <TOKEN>
```

### Flow:

```
Token → Verify → Decode → req.user
```

---

## 🔹 7. Database Models

### 🧾 User

```js
{
  name,
  email,
  password,
  role: "student"
}
```

---

### 🧾 Quiz

```js
{
  title,
  timeLimit, // seconds
  questions: [
    {
      question,
      options: [],
      correctAnswer
    }
  ]
}
```

---

### 🧾 Attempt

```js
{
  studentId,
  quizId,
  answers: [],
  score,
  createdAt
}
```

---

## 🔹 8. Quiz APIs

### 📌 GET /api/quiz

* Protected route
* Returns:

```json
{
  "quiz": {...},
  "timeLimit": 300
}
```

---

### 📌 POST /api/quiz/submit

* Input:

```json
{
  "quizId": "123",
  "answers": [0, 2, 1]
}
```

* Output:

```json
{
  "score": 4,
  "total": 5
}
```

---

### 📌 GET /api/quiz/attempts

* Returns all attempts of logged-in student

---

## ⚠️ Backend Notes

* Timer logic frontend handle karega
* Backend sirf `timeLimit` provide karega
* Unanswered questions → null ya 0 treat karein
* Routes must be protected via JWT

---

## ✅ PART 1 RESULT

✔ Authentication system ready
✔ Quiz APIs functional
✔ MongoDB integration complete

---

# 🟣 PART 2: FRONTEND UI (React)

---

## 🔹 1. Setup React App

```bash
npx create-react-app quiz-frontend
npm install axios react-router-dom
```

---

## 🔹 2. Folder Structure

```
src/
├── pages/
├── components/
├── services/
├── App.js
```

---

## 🔹 3. Pages

* Signup Page
* Login Page
* Quiz Page
* Result Page
* History Page

---

## 🔹 4. Quiz UI Layout

```
---------------------------------
| Timer        Question 2/5     |
---------------------------------
| Question Text                |
|                             |
| [ Option A ]                |
| [ Option B ]                |
| [ Option C ]                |
|                             |
| Prev        Next            |
| Submit (last question)      |
---------------------------------
```

---

## 🔹 5. State Management

* `currentQuestion`
* `answers[]`
* `time`
* `quizData`

---

## 🔹 6. Timer Implementation

* Countdown (MM:SS)
* Auto submit when time = 0

---

## 🔹 7. Features

### ✅ Answer Selection

* Highlight selected option

### ✅ Navigation

* Next / Previous buttons

### ✅ Submit

* Only on last question

### ✅ Timer

* Auto submit on timeout

---

## 🔹 8. Attempt History UI

Display:

* Score
* Date
* Multiple attempts

---

## 🔹 9. UX Enhancements

* Loading spinner during API calls
* Disable submit while processing
* Progress indicator
* Prevent empty submission

---

## ✅ PART 2 RESULT

✔ Clean UI ready
✔ Quiz logic working locally
✔ Timer & navigation implemented

---

# 🟢 PART 3: INTEGRATION (Frontend ↔ Backend)

---

## 🔹 1. API Service Setup

```js
axios.create({
  baseURL: "http://localhost:5000/api"
});
```

---

## 🔹 2. Authentication Flow

### Signup

* Send form data to backend

### Login

* Receive JWT token
* Store in localStorage

---

## 🔹 3. Protected Requests

```js
headers: {
  Authorization: "Bearer " + token
}
```

---

## 🔹 4. Quiz Flow

* Fetch quiz → store in state
* Start timer
* Render questions

---

## 🔹 5. Submit Quiz

* Send:

```json
{
  "quizId": "...",
  "answers": [...]
}
```

* Receive score → show result

---

## 🔹 6. Attempt History

* Fetch `/quiz/attempts`
* Render in history page

---

## 🔹 7. Error Handling

* Invalid token → redirect to login
* Empty answers → block submit
* API errors → show message

---

## ⚠️ Security Note

* localStorage is fine for development
* Production → use httpOnly cookies

---

## ✅ PART 3 RESULT

✔ Full system connected
✔ Real data flow working
✔ Functional quiz app

---

# 🔄 COMPLETE USER FLOW

```
Signup → Login → Fetch Quiz → Start Timer  
→ Answer Questions → Submit → Score  
→ View History → Reattempt Quiz
```

---

# 🎯 FINAL OUTCOME

After completing all phases:

* ✅ Secure authentication
* ✅ Quiz with timer
* ✅ Multiple attempts
* ✅ History tracking
* ✅ Clean UI + UX
* ✅ Production-ready base

---

# 🚀 FUTURE IMPROVEMENTS

* 🏆 Leaderboard
* 🎯 Difficulty levels
* 🔀 Randomized questions
* 🌙 Dark mode
* 👨‍🏫 Teacher dashboard
* 👑 Admin panel

---

# 🧠 FINAL NOTE

👉 Follow this order strictly:

1. Backend (logic first)
2. UI (user experience)
3. Integration (connect both)

🔥 This is how real-world applications are built.
