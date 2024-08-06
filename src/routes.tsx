import { createBrowserRouter } from "react-router-dom"

import { Homepage } from "@/pages/homepage"
import { Mines } from "@/pages/mines"

export const r = createBrowserRouter([
  {
    path: '/',
    children: [
      { path: '/', element: <Homepage /> },
      { path: '/mines', element: <Mines /> },
    ],
  },
])