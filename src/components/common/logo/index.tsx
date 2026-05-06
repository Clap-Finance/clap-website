import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import LogoImage from "@/assets/logo_adaptations/android-chrome-512x512.png"

const Logo = ({}) => {
  return (
    <Link href={"/"} className='flex items-center gap-1'>
      <Image src={LogoImage} alt='Logo' className='w-8 md:w-11' />
      <span className='text-3xl tracking-tighter font-medium'>Clap</span>
    </Link>
  )
}

export default Logo