# 🚀 AI Resume Generator

An AI-powered full-stack Resume Builder that allows users to create, customize, and enhance resumes using Large Language Models.

🌐 **Live Application:** [View Frontend](https://ai-resume-generator-amber.vercel.app/)

---

## ✨ Features

* 🧠 **AI-powered Content Enhancement:** Automatically improve resume descriptions using LLMs.
* 📄 **Multiple Resume Templates:** Choose between Modern, Professional, and Minimal styles.
* 🎨 **Clean and Responsive UI:** Built with Material UI (MUI) for a seamless experience.
* 🔄 **Live Resume Preview:** See changes in real-time as you edit or generate content.
* 📤 **Export to PDF:** High-quality PDF generation ready for job applications.
* 🐳 **Dockerized Backend:** Simplified deployment and environment consistency.
* ☁️ **Cloud Infrastructure:** Deployed on Vercel (Frontend) and Render (Backend).

---

## 🏗️ Tech Stack

### 🔹 Frontend
- **React (Vite)**
- **Material UI (MUI)**
- **Axios** (API Requests)
- **Context API** (State Management)
- **Vercel** (Hosting)

### 🔹 Backend
- **Spring Boot (Java 17)**
- **Maven** (Build Tool)
- **Docker** (Containerization)
- **REST APIs**
- **Render** (Hosting)

### 🔹 AI Integration
- **Groq LLM API**
- **Prompt Engineering** for resume optimization

---

## 📂 Project Structure

```text
AI-Resume-Generator
│
├── frontend/          # React + Vite UI
└── backend/           # Spring Boot REST API
    ├── src/           # Application logic (Controllers, Services, Models)
    ├── Dockerfile     # Docker configuration
    └── pom.xml        # Maven dependencies
```

---

## 📸 Screenshots
<img width="1920" height="1200" alt="image" src="https://github.com/user-attachments/assets/73bc7188-1841-4cc6-928a-48247f035b16" />
<img width="1920" height="1200" alt="image" src="https://github.com/user-attachments/assets/c304e743-c7fa-49c3-a589-463f72c70107" />


---

## ⚙️ Environment Variables

### 🔐 Backend (Render)
Set this in **Render → Environment → Add Environment Variable**:
`GROQ_API_KEY=your_secret_key_here`

In `application.properties`:
```properties
spring.application.name=ai-resume-builder
groq.api.key=${GROQ_API_KEY}
```

### 🌍 Frontend (Vercel)

Set in **Vercel → Project Settings → Environment Variables**:

`VITE_API_BASE_URL=https://your-render-backend-url`

Example:
`VITE_API_BASE_URL=https://ai-resume-generator-fhhn.onrender.com`

---

## 🛠️ Local Setup Guide

### 1️⃣ Clone Repository
```bash
git clone [https://github.com/AnshikaGoel3/AI-Resume-Generator.git](https://github.com/AnshikaGoel3/AI-Resume-Generator.git)
cd AI-Resume-Generator
```

### 2️⃣ Run Backend
```bash
cd backend
mvn clean package
java -jar target/app.jar
```
### 3️⃣ Run Frontend
```bash
cd ../frontend
npm install
npm run dev
```
## 🚀 Deployment Links

* 🌐 **Frontend (Vercel):** [https://ai-resume-generator-amber.vercel.app/](https://ai-resume-generator-amber.vercel.app/)
* 🔗 **Backend (Render):** [https://ai-resume-generator-fhhn.onrender.com](https://ai-resume-generator-fhhn.onrender.com)

---

## 👩‍💻 Author

**Anshika Goel** 

