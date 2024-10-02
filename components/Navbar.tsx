import { Socials } from "@/constants";
import Image from "next/image";
import Link from "next/link"; 
import React from "react";

const Navbar = () => {
  return (
    <div className="fixed top-0 bg-transparent z-[20] w-full flex gap-5 md:justify-between md:px-60 p-5">
      <h1 className="text-white text-[45px]">
        Compas <span className="font-thin">Gram</span>
        <span className="text-red-500">.</span>
      </h1>
      <div className="flex flex-row gap-5 items-center"> 
        {Socials.map((social) => (
          <Image
            key={social.name}
            src={social.src}
            alt={social.name}
            width={24}
            height={24}
          />
        ))}
        <Link href="/auth/login"> 
          <button className="bg-black-500 text-white p-2 rounded hover:bg-orange-600 transition">
            Вход
          </button>
        </Link>
        <Link href="/auth/register"> 
          <button className="bg-black-500 text-white p-2 rounded hover:bg-orange-600 transition">
            Регистрация
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;