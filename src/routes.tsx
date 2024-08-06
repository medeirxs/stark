import { createBrowserRouter } from "react-router-dom"

import { Mines } from "@/pages/mines"
import { Homepage } from "./pages/homepage"

export const r = createBrowserRouter([
  {
    path: '/',
    children: [
      { path: '/', element: <Homepage /> },
      { path: '/mines', element: <Mines /> },
    ],
  },
])