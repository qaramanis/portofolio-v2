import React from "react";

interface BackgroundImageProps {
  hoverIndex: number | null;
}

const BackgroundImage: React.FC<BackgroundImageProps> = ({ hoverIndex }) => {
  return (
    <div
      id="menu-background-image"
      className={`
        bg-[url('https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2664&auto=format&fit=crop&ixlib')]
        h-full w-full left-0 top-0 absolute
        bg-center bg-cover opacity-30
        transition-[opacity,background-size,background-position] duration-800 ease-in-out z-0
        ${hoverIndex === 0 ? "md:bg-[position:center_30%]" : ""}
        ${hoverIndex === 1 ? "md:bg-[position:center_40%]" : ""}
        ${hoverIndex === 2 ? "md:bg-[position:center_50%]" : ""}
        ${hoverIndex === 3 ? "md:bg-[position:center_60%]" : ""}
        ${hoverIndex === 4 ? "md:bg-[position:center_70%]" : ""}
        ${hoverIndex === 5 ? "md:bg-[position:center_80%]" : ""}
        ${hoverIndex !== null ? "" : "bg-[position:center_55%]"}
        ${
          hoverIndex !== null
            ? "md:bg-[size:100vmax] md:opacity-15"
            : "md:bg-[size:115vmax] md:opacity-20"
        }
      `}
    ></div>
  );
};

export default BackgroundImage;
