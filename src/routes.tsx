import { createBrowserRouter } from "react-router-dom"

import { Homepage } from "@/pages/homepage"
import { Teste } from "@/pages/teste.tsx"

export const r = createBrowserRouter([
  {
    path: '/',
    children: [
      { path: '/', element: <Homepage /> },
      { path: '/teste', element: <Teste /> },
    ],
  },
])