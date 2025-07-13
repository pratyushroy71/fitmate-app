# 🏋️‍♂️ FitMate – Full-Stack Fitness & Nutrition Tracker

**FitMate** is a full-stack fitness and nutrition tracking web app designed to help users reach their health goals through intelligent nutrition logging, macro tracking, and (coming soon) personalized workout suggestions powered by AI.

---

## 🚀 Tech Stack

- **Frontend**: React.js (fitmate-client)
- **Backend**: Node.js, Express.js (fitmate-server)
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Styling**: CSS, Chart.js for visual insights
- **Image Analysis**: AI-based food recognition (via image upload)

---

## ✅ Current Features

### 🔐 Authentication
- User sign-up and login with secure JWT-based authentication.

### 🥗 Nutrition Tracking
- Upload images of meals to automatically detect calorie and macro content.
- Label meals as **breakfast**, **lunch**, **dinner**, or **snack**.
- Add analyzed meals to daily logs with image and nutrient breakdown.

### 🎯 Daily Goals
- Set daily goals for:
  - Calories
  - Protein
  - Carbohydrates
  - Fats

### 📊 Dashboard
- Visual representation of current intake vs. daily goals using:
  - Pie Charts
  - Progress Cards
- Toggle view between **Daily**, **Weekly**, and **Monthly** progress.

---

## 🛠️ Folder Structure

FitMate/
├── fitmate-client/ # React frontend
├── fitmate-server/ # Node.js + Express backend
├── .gitignore
└── README.md

yaml
Copy
Edit

---

## 🌱 Upcoming Features (In Progress)

### 📓 Workout Logging
- Manually log workouts by type, intensity, duration, and calories burned.
- Visualize workout consistency and trends over time.

### 🤖 AI-Based Suggestions
- Personalized fitness suggestions based on:
  - Nutrition habits
  - Workout history
  - Progress vs. goals
- Smart reminders and alerts for staying on track

### 📅 Meal Planner & Scheduler
- AI-assisted meal planning based on macro goals and history

### 📈 Community & Progress Sharing (Optional)
- Ability to share weekly progress snapshots with friends or fitness coaches.

- 
Frontend Setup

cd fitmate-client
npm install
npm start

---

Backend Setup

cd fitmate-server
npm install
npm run dev

## 📦 Getting Started

### Clone the Repository

