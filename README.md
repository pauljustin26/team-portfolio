Team Portfolio — React + Vite
This project is a team portfolio website built using React and Vite, styled with Tailwind CSS.
It includes smooth animations, responsive design, and integration with services like EmailJS.

🚀 Tech Stack
React (frontend library)

Vite (build tool)

Tailwind CSS (utility-first CSS framework)

EmailJS (email service)

Heroicons (icon library)

React Icons (icon library)

📦 Installed Dependencies
bash
Copy
Edit
npm install @tailwindcss/vite
npm install emailjs-com
npm install @heroicons/react
npm install react-icons
🗂️ Project Structure
pgsql
Copy
Edit
team-portfolio/
├── public/
│   ├── index.html
│   └── assets/
│       └── images/
│           ├── eye-c-you/
│           ├── cvsu-management-system/
│           ├── cvsu-sports-management/
│           └── developers/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── MobileMenu.jsx
│   │   ├── LoadingScreen.jsx
│   │   ├── RevealOnScroll.jsx
│   │   ├── ScrollUpButton.jsx
│   │   └── sections/
│   │       ├── Home.jsx
│   │       ├── About.jsx
│   │       ├── Team.jsx
│   │       ├── Projects.jsx
│   │       └── Contact.jsx
│   ├── pages/
│   │   └── Allprojects.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   ├── main.jsx
├── package.json
├── vite.config.js
└── README.md
🛠️ Setup and Installation
Clone the repository:

bash
Copy
Edit
git clone https://github.com/your-username/team-portfolio.git
Navigate to the project folder:

bash
Copy
Edit
cd team-portfolio
Install the dependencies:

bash
Copy
Edit
npm install
Start the development server:

bash
Copy
Edit
npm run dev
Build for production:

bash
Copy
Edit
npm run build
📄 Notes
Base URL:
In vite.config.js, the base is set to / for correct deployment.

Assets:
All static assets like images are stored inside the public/assets directory.

Deployment:
The project is ready to deploy on platforms like Vercel, Netlify, or any static hosting provider.

🔗 Useful Links
Vite Documentation

React Documentation

Tailwind CSS Documentation

EmailJS Documentation

Made with ❤️ by the Team.