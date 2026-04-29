import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import './index.css'
import App from './App.tsx'
import Layout from './layout.tsx'
import Students from './pages/students.tsx'
import StudentProfile from './pages/student_profile.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index:  true, Component: App },
      { path: "/students", 
        children: [
          { index: true, Component: Students },
          { path: "/student/:id", Component: StudentProfile }
      ] },

    ]
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>
)
