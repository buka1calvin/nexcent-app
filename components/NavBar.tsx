"use client";
import React, { useEffect, useState } from "react";
import { navLinks } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

const NavBar = () => {
  const [useColor,setUseColor]=useState("");
  // const [textColor,setTextColor]=useState("")
  useEffect(()=>{
    const changeColor=()=>{
      if(window.scrollY>=90){
        setUseColor("bg-silver-1")
      }else{
        setUseColor("bg-transparent")
      }
    }
    window.addEventListener('scroll',changeColor);
  },[])
  return (
    <section className={clsx(`flex w-screen px-[105px] items-center justify-between h-[84px] text-[16px] fixed z-10`,useColor)}>
      <Image src="/icons/Logo.svg" alt="logo" width={154.49} height={40} />
      <div className="flex items-center w-[588px] h-[24px] gap-[50px] text-textColor-1">
        {navLinks.map((link) => {
          return (
            <Link href={link.route} key={link.label}>
              {link.label}
            </Link>
          );
        })}
      </div>
      <div className="flex gap-[14px] w-[182px] h-[42px] items-center">
        <Link href="/login">Login</Link>

        <button className="w-[91px] h-[40px] bg-primary text-white rounded-[6px]">
          <Link href="/signup">Sign Up</Link>
        </button>
      </div>
    </section>
  );
};

export default NavBar;
