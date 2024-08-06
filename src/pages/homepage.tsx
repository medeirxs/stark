import { NavLink } from "react-router-dom";

import explosion from "@/assets/explosion.png"

export function Homepage(){
  return(
    <div className="mx-auto w-[360px] flex items-center justify-center flex-col">
      <p className="text-white">Mines</p>
      <NavLink to="/mines">
        <img src={explosion} className="w-24"/>
      </NavLink>
    </div>
  )
}