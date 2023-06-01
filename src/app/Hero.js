import Image from "next/image";
import Hero1 from "../../public/img/Hero1.jpg"

import React from 'react'

export default function Hero() {
  return (
    <div className="flex justify-center py-12 bg-[#F6F1F1]">
        <Image src={Hero1}  className="object-none h-80 rounded-xl"/>
    </div>
  )
}
