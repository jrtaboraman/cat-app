import Image from "next/image"
import cat1 from '../public/images/cat1.gif'
import cat2 from '../public/images/cat2.gif'
import cat3 from '../public/images/cat3.gif'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen space-y-5">
      <h1 className="text-3xl">
        The Cat App
      </h1>
      <div className="relative w-32 h-32 overflow-hidden rounded-full ring-2 ring-pink-300">
        <Image 
        src={cat1}
        alt='catcat'
        priority
        fill={true}       
        />
      </div>
      <div className="relative w-32 h-32 overflow-hidden rounded-full ring-2 ring-pink-300">
        <Image 
        src={cat2}
        alt='catcat'
        priority
        fill={true}       
        />
      </div>
      <div className="relative w-32 h-32 overflow-hidden rounded-full ring-2 ring-pink-300">
        <Image 
        src={cat3}
        alt='catcat'
        priority
        fill={true}       
        />
      </div>
    </div>
  )
}
