'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'


const nav = () => {
  const isUseredLogged = true;
  const [ToggleDropDown, setToggleDropDown] = useState(false)
  // const [providers,setProviders]=useState(null);
  // useEffect(()=>{
  //   const setProviders=async()=>{
  //     const response=await getProviders();
  //     setProviders(response);
  //   }
  //   setProviders();
  // },[])
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


      {/*Desktop view*/}
      <div className="sm:flex hidden">
        {isUseredLogged ?
          (
            <div className="flex gap-3 md:gap-5 items-center">
              <Link
                href='/create-promot'
                className="black_btn"
              >
                Create Post
              </Link>
              <button type="button" onClick={()=>signOut()} className="outline_btn">Sign out</button>
              <Link
                href='/profile'
                className="items-center"
              >
                <Image
                  src='/assets/images/logo.svg'
                  alt='profile'
                  width={20}
                  height={17}
                  className="rounded-full"
                />
              </Link>
            </div>
          ) :
          (
            <>
            {/* {providers
            && Object.values(providers).map((provider)=>(
              <button 
              type="button"
              key={provider.name}
                >
                  
                </button>
            ))
            } */}

            </>
          )}
      </div>
      
      {/*Desktop view*/}
      <div className="sm:hidden flex relative">
      {isUseredLogged ?
          (
            
           <div className="flex">
            
                <Image
                  src='/assets/images/logo.svg'
                  alt='profile'
                  width={20}
                  height={17}
                  className="rounded-full"
                  onClick={()=>setToggleDropDown((prev)=>!prev)} 
                />
                {ToggleDropDown&&(
                <div className="dropdown ">
                  <Link
                  href='/profile'
                  className="dropdown_link "
                  onClick={()=>setToggleDropDown(false)}
                  >
                  My profile
                  </Link>
                  <Link
                  href='/profile'
                  className="dropdown_link "
                  onClick={()=>setToggleDropDown(false)}
                  >
                  Create Post
                  </Link>
                  <button type="button" 
                  onClick={()=>{
                    setToggleDropDown(false);
                    signOut();
                  }}
                  className="mt-5 black_btn w-full"
                  >
                     Sign Out
                  </button>
                </div>
              )}
              
              

            </div>
          ) :
          (
            <>
            {/* {providers
            && Object.values(providers).map((provider)=>(
              <button 
              type="button"
              key={provider.name}
                >
                  
                </button>
            ))
            } */}

            </>
          )}
      </div>
      


    </nav>
  )
}

export default nav