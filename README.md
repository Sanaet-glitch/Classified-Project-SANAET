# Classified Project SANAET

> **Mission-Critical Developer Portfolio**  
> _Unauthorized Access Highly Encouraged_

---

## 🛰️ Project Overview

**Classified Project SANAET** is a cyberpunk-themed, production-grade developer portfolio designed to showcase the skills, projects, and operational history of a full-stack software engineer. Built for maximum impact and security, this portfolio is ready for deployment on Vercel and features a unique, immersive interface inspired by espionage and intelligence dossiers.

---

## 🕵️‍♂️ Mission Statement

Deliver a visually striking, interactive, and secure online presence for a developer with a focus on:
- Modern web technologies
- Real-world project experience
- Professional and community engagement
- Secure, confidential communication

---

## 🗂️ Key Features

- **Hero Section:** Animated cyberpunk intro, glitch effects, and agent profile.
- **Mission Archives (Projects):**
  - Declassified project cards with tech stack, images, and direct links (e.g., SmartCampus attendance system).
- **Agent Dossier (Resume):**
  - Summarized field operations (work experience), training, and education.
  - Downloadable full resume (PDF).
- **Agent Capabilities (Skills):**
  - Technical and soft skills, tools, and technologies visualized with progress bars and badges.
- **Asset Evaluations (Testimonials):**
  - Rotating testimonials from collaborators and references.
- **Research Logs (Blog):**
  - Placeholder for future technical articles and mission reports.
- **Secure Uplink (Contact):**
  - Encrypted contact form powered by EmailJS for confidential communication.
  - Social and professional network links.
- **Responsive Design:**
  - Fully mobile-friendly and accessible.
- **Cyberpunk UI:**
  - Neon gradients, glassmorphism, animated borders, and terminal-inspired effects.

---

## 🛠️ Technology Stack

- **Frontend:** React, TypeScript, Vite
- **Styling:** Tailwind CSS, custom CSS, shadcn-ui
- **UI/UX:** Lucide icons, animated effects, custom DataCard components
- **Email:** EmailJS (for secure contact form)
- **Deployment:** Vercel-ready

---

## 🚀 Getting Started

### 1. Clone the Repository
```sh
git clone <YOUR_GIT_URL>
cd Classified-Project-SANAET
```

### 2. Install Dependencies
```sh
npm install
```

### 3. Configure Environment Variables
Create a `.env` file in the project root:
```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### 4. Run Locally
```sh
npm run dev
```

### 5. Build for Production
```sh
npm run build
```

---

## ☁️ Deployment (Vercel)
1. Push your code to GitHub.
2. Import the repo into [Vercel](https://vercel.com/).
3. Add the same environment variables in the Vercel dashboard.
4. Deploy and enjoy your classified portfolio!

---

## 📁 Folder Structure
```
public/           # Static assets (images, favicon, etc.)
src/
  components/     # All React components (sections, UI, etc.)
  hooks/          # Custom React hooks
  lib/            # Utility functions
  pages/          # Main page(s)
  App.tsx         # App entry point
  index.css       # Global styles
  ...
```

---

## 🛡️ Customization & Theming
- Update your agent profile, resume, and project data in the respective components in `src/components/`.
- Replace images in `public/` as needed (e.g., project screenshots).
- Tweak theme colors and effects in `tailwind.config.ts` and custom CSS files.

---

## 🔒 Security & Best Practices
- All communications via the contact form are encrypted in transit (TLS via EmailJS).
- No sensitive data is stored in the repo; use environment variables for secrets.
- Follows modern accessibility and responsive design standards.

---

## 👤 Credits
- Designed and developed by SANAET
- Inspired by cyberpunk, espionage, and classified mission aesthetics
- Built with open-source tools and libraries

---

## 📜 License
This project is open source and available under the MIT License.

---

> **Status:** Operational  
> **Access Level:** AUTHORIZED  
> **Connection:** SECURE
