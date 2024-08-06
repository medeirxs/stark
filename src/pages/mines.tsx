import { useEffect } from "react";
import defaultt from "@/assets/default.png";
import diamond from "@/assets/diamond.png";
import explosion from "@/assets/explosion.png";
import { Button } from "@/components/ui/button";

export function Mines() {
  useEffect(() => {
    const draw = document.querySelectorAll(".dr");

    const resetGame = () => {
      draw.forEach((el) => {
        el.src = defaultt
        el.style.pointerEvents = "auto"
      });
    };

    draw.forEach((ob) => {
      ob.addEventListener("click", (evt) => {
        const el = evt.target;
        let DrawNumber = Math.floor(Math.random() * 10 + 1)
        let WinNumber = Math.floor(Math.random() * 10)
        if(DrawNumber >= WinNumber){
          el.src = diamond
        }else{
          el.src = explosion
          draw.forEach((el) => {
            el.style.pointerEvents = "none"
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
    <div className="mx-auto bg-red-500 w-[360px] p-3">
      <h1 className="text-white">mines</h1>
      <div className="grid grid-cols-4 gap-1">
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