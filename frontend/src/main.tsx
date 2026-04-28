import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import './index.css'
import App from './App.tsx'
import Layout from './layout.tsx'
import Students from './pages/students.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index:  true, Component: App },
      { path: "students", Component: Students }
    ]
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>
)
