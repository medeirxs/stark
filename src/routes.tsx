import { createBrowserRouter } from "react-router-dom"

import { Mines } from "@/pages/mines"

export const r = createBrowserRouter([
  {
    path: '/',
    children: [
      { path: '/', element: <Mines /> },
    ],
  },
])