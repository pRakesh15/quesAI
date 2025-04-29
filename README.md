# MERN Stack Project – Project & quesAi

This is a MERN stack-based full-stack application for managing projects, fields, and files. It uses **Next.js App Router** for frontend routing and follows a modular architecture.

---

## 📁 Folder Structure

src/ ├── app/ │ ├── createProject/ │ │ ├── [projectId]/ │ │ │ ├── [fileId]/ │ │ │ │ └── page.jsx │ │ │ ├── layout.jsx │ │ │ └── page.jsx │ │ └── page.jsx │ ├── layout.js │ └── page.jsx │ ├── components/ │ └── ui/ │ ├── AddProdcastModal.jsx │ ├── AppSideBar.jsx │ ├── CreateProject.jsx │ ├── CreateProjectModal.jsx │ ├── FilesTable.jsx │ ├── FileUpdate.jsx │ └── ProductCard.jsx │ ├── hooks/ │ └── use-mobile.js │ ├── lib/ │ ├── allApi.js │ ├── authContext.jsx │ ├── axiosInstance.js │ └── utils.js │ ├── favicon.ico ├── globals.css

yaml
Copy
Edit

---

## 🚀 Features

- ✅ Dynamic Routing using App Router (`[projectId]`, `[fileId]`)
- ✅ Modular components and modals
- ✅ Custom hook for mobile responsiveness
- ✅ Axios-based API interaction
- ✅ Global state using Context API

---

## 🧪 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/your-repo.git
cd your-repo
2. Install Dependencies
bash
Copy
Edit
npm install
3. Setup Environment Variables
Create a .env.local file in the root directory and add:

env
Copy
Edit
NEXT_PUBLIC_API_BASE_URL=http://localhost:5000/api
4. Run the Development Server
bash
Copy
Edit
npm run dev
🛠 Built With
Next.js – Frontend Framework

React – UI Library

Axios – HTTP Client

Context API – State Management

🧑‍💻 Author
Rakesh Pradhan
MERN Stack Developer

📌 Notes
You can deploy this app on Vercel.

Ensure your backend supports CORS for both localhost:3000 and the deployed domain.

vbnet
Copy
Edit

Let me know if you'd like to auto-generate a `vercel.json` config or backend README next.
