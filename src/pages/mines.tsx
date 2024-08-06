import defaultt from "@/assets/default.png"
import diamond from "@/assets/diamond.png"
import explosion from "@/assets/explosion.png"

export function Mines(){
  const draw = document.querySelectorAll(".dr")

  draw.forEach((ob) => {
    ob.addEventListener("click", (evt) => {
      const el = evt.target
      let RandomNumber = Math.floor(Math.random() * 10 + 1)
      let WinNumber = Math.floor(Math.random() * 10 + 1)
      if(RandomNumber === WinNumber){
        el.src = diamond
      }else{
        el.src = explosion
      }
    });
  });

  return(
    <div className="mx-auto bg-red-500 w-[360px] p-3">
      <h1 className="text-white">mines</h1>
      <div className="grid grid-cols-4 gap-1">
        <img src={defaultt} className="w-20 dr" />
        <img src={defaultt} className="w-20 dr" />
        <img src={defaultt} className="w-20 dr" />
        <img src={defaultt} className="w-20 dr" />
        <img src={defaultt} className="w-20 dr" />
        <img src={defaultt} className="w-20 dr" />
        <img src={defaultt} className="w-20 dr" />
        <img src={defaultt} className="w-20 dr" />
        <img src={defaultt} className="w-20 dr" />
        <img src={defaultt} className="w-20 dr" />
        <img src={defaultt} className="w-20 dr" />
        <img src={defaultt} className="w-20 dr" />
        <img src={defaultt} className="w-20 dr" />
        <img src={defaultt} className="w-20 dr" />
        <img src={defaultt} className="w-20 dr" />
        <img src={defaultt} className="w-20 dr" />
        <img src={defaultt} className="w-20 dr" />
        <img src={defaultt} className="w-20 dr" />
        <img src={defaultt} className="w-20 dr" />
        <img src={defaultt} className="w-20 dr" />
      </div>
    </div>
  )
}