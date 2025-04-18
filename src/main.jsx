import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import DashboardPage from "./routes/dashboardPage/DashboardPage.jsx"
import HomePage from "./routes/homePage/HomePage.jsx"
import ChatPage from "./routes/chatPage/ChatPage.jsx"
import SignInPage from "./routes/signInPage/SignInPage.jsx"
import SignUpPage from "./routes/signUpPage/SignUpPage.jsx"

import RootLayout from "./layouts/rootLayout/RootLayout.jsx"
import DashboardLayout from "./layouts/dashboardLayout/DashboardLayout.jsx"

// const router = createBrowserRouter([
//   {
//     element: <RootLayout />,
//     children: [
//       {
//         path: "/",
//         element: <HomePage />,
//       },
//       {
//         path: "/sign-in/*",
//         element: <SignInPage />,
//       },
//       {
//         path: "/sign-up/*",
//         element: <SignUpPage />,
//       },
//       {
//         element: <DashboardLayout />,
//         children: [
//           {
//             path: "/dashboard",
//             element: <DashboardPage />,
//           },
//           {
//             path: "/dashboard/chats/:id",
//             element: <ChatPage />,
//           },
//         ],
//       },
//     ],
//   },
// ]);

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/sign-in/*",
        element: <SignInPage />,
      },
      {
        path: "/sign-up/*",
        element: <SignUpPage />,
      },
      {
        element: <DashboardLayout />,
        children: [
          {
            path: "/dashboard",
            element: <DashboardPage />,
          },
          {
            path: "/dashboard/chats/:id",
            element: <ChatPage />,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
