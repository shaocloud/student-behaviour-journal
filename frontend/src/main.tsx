import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import './index.css'
import App from './App.tsx'
import Layout from './layout.tsx'
import Students from './pages/students.tsx'
import StudentProfile from './pages/student_profile.tsx'
import StudentErrorBoundary from './pages/studentErrorPage.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index:  true, Component: App },
      { path: "students", 
        children: [
          { index: true, Component: Students },
          { path: ":id", 
            loader: async ({ params }) => {
              const res = await fetch(`http://localhost:8080/api/students/${params.id}`);
              if (!res.ok) {
                //throw new Error('Failed to fetch student data');
                return res; // Return the response object to be handled in the errorElement
              }
              return res.json();
            },
            ErrorBoundary: StudentErrorBoundary,
            Component: StudentProfile }
      ] },

    ]
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>
)
