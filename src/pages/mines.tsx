import { useEffect } from "react";
import defaultt from "@/assets/default.png";
import diamond from "@/assets/diamondd.png";
import explosion from "@/assets/explosion.png";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { NavLink } from "react-router-dom";

export function Mines() {
  useEffect(() => {
    const draw = document.querySelectorAll(".dr");

    const resetGame = () => {
      draw.forEach((el) => {
        (el as HTMLImageElement).src = defaultt;
        (el as HTMLElement).style.pointerEvents = "auto"
      });
    };

    draw.forEach((ob) => {
      ob.addEventListener("click", (evt) => {
        const el = evt.target as HTMLImageElement;
        let DrawNumber = Math.floor(Math.random() * 10 + 1);
        let WinNumber = Math.floor(Math.random() * 10);
        if (DrawNumber >= WinNumber) {
          el.src = diamond
        }else{
          el.src = explosion
          draw.forEach((el) => {
            (el as HTMLElement).style.pointerEvents = "none"
          });
          setTimeout(() => {
            resetGame()
          }, 4000)
        }
      });
    });

    return () => {
      draw.forEach((ob) => {
        ob.removeEventListener("click", () => {});
      });
    };
  }, []);

  return (
    <div className="mx-auto w-[360px] pt-4">
      <NavLink to="/">
        <div>
          <div className="bg-pennblue w-8 h-8 flex items-center justify-center rounded-full mb-2">
            <ArrowLeftIcon className="text-muted-foreground w-5 h-5"/>
          </div>
        </div>
      </NavLink>
      <div className="grid grid-cols-4 gap-3">
        <img src={defaultt} className="w-20 cursor-pointer dr" />
        <img src={defaultt} className="w-20 cursor-pointer dr" />
        <img src={defaultt} className="w-20 cursor-pointer dr" />
        <img src={defaultt} className="w-20 cursor-pointer dr" />
        <img src={defaultt} className="w-20 cursor-pointer dr" />
        <img src={defaultt} className="w-20 cursor-pointer dr" />
        <img src={defaultt} className="w-20 cursor-pointer dr" />
        <img src={defaultt} className="w-20 cursor-pointer dr" />
        <img src={defaultt} className="w-20 cursor-pointer dr" />
        <img src={defaultt} className="w-20 cursor-pointer dr" />
        <img src={defaultt} className="w-20 cursor-pointer dr" />
        <img src={defaultt} className="w-20 cursor-pointer dr" />
        <img src={defaultt} className="w-20 cursor-pointer dr" />
        <img src={defaultt} className="w-20 cursor-pointer dr" />
        <img src={defaultt} className="w-20 cursor-pointer dr" />
        <img src={defaultt} className="w-20 cursor-pointer dr" />
        <img src={defaultt} className="w-20 cursor-pointer dr" />
        <img src={defaultt} className="w-20 cursor-pointer dr" />
        <img src={defaultt} className="w-20 cursor-pointer dr" />
        <img src={defaultt} className="w-20 cursor-pointer dr" />
      </div>
    </div>
  );
}