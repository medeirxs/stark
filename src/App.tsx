import { RouterProvider } from "react-router-dom";
import { r } from "@/routes"

export function App() {
  return (
    <>
      <RouterProvider router={r}/>
    </>
  )
}