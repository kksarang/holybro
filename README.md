# Holybro Group - Modern Corporate Website

A premium, SEO-friendly React website for Holybro Group, built with Vite, React, and Tailwind CSS.

## 🚀 Quick Start

1.  **Iterate to the project directory:**
    ```bash
    cd holybro-modern
    ```

2.  **Install dependencies:**
    ```bash
    npm install --legacy-peer-deps
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    ```

4.  **Build for production:**
    ```bash
    npm run build
    ```

## 🛠️ Technologies Used

-   **Frontend:** React 18 (Vite)
-   **Styling:** Tailwind CSS + PostCSS
-   **Routing:** React Router DOM v6
-   **Animations:** Framer Motion
-   **SEO:** React Helmet Async
-   **Icons:** Lucide React

## 📂 Project Structure

-   `src/components/layout`: Navbar, Footer, Layout wrapper.
-   `src/components/home`: Hero, Services Overview, CTA.
-   `src/pages`: Home, About, Services, Contact.
-   `src/assets`: Images and styles.

## 🚢 Deployment

This project is ready for **Netlify** or **Vercel** deployment.

### Netlify / Vercel
1.  Connect your repository.
2.  Set Build Command to `npm run build`.
3.  Set Output Directory to `dist`.

## 📝 Notes

-   **Forms**: The contact form is a frontend integration ready to be connected to a backend or service like FormSubmit.co.
-   **SEO**: Meta tags are managed via `react-helmet-async` in each page component.



https://kksarang.github.io/holybro/?v=2Step 1: Create account

Go to 👉 https://www.emailjs.com

Create account

Add Email Service (Gmail / Outlook)

Create Email Template

Template example:

Name: {{name}}
Email: {{email}}
Subject: {{subject}}
Message: {{message}}

Step 2: Install EmailJS
npm install emailjs-com
