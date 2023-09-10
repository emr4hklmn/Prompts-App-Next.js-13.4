"use client"
import Link from "next/link"
import Image from "next/image"
import React,{useState,useReduceer,useEffect} from "react"
import {signIn,signOut, useSession,geProviders} from  "next-auth/react"
const Nav = () => {
const isUserLoggedIn=true
  return (
    <nav className="flex-between w-full mb-16 pt-3">
        <Link href="/" className="flex gap-2 flex-center ">
            <Image src="assets/images/logo.svg" width={30} height={30} alt="logo" className="object-contain"/>
            <p className="logo_text">Prompts</p>
        </Link>
        <div className="sm:flex hidden">
            {isUserLoggedIn?<div className="flex ga-3 md:gap-5">
                <Link href="/creaye-prompt" className="black_btn">Create Poat</Link>
            </div>:null}
        </div>
    </nav>
  )
}

export default Nav