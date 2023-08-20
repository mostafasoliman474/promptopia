'use client'

import { useState,useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {signIn,signOut,useSession,getProviders} from 'next-auth/react'

const nav = () => {
  return (
    <nav className="w-full flex-between mb-16 pt-4">
      <Link href='/' className="flex flex-center gap-4">
        <Image
        src='/assets/images/logo.svg'
        alt='logo'
        width={30}
        height={30}
        className="object-contain"
        />
        <p className="logo_text">Promptopia</p>
      </Link> 
      
    </nav>
  )
}

export default nav