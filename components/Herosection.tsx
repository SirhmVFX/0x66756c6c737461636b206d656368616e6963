"use client"

import { useState } from "react"
import { Check, Copy } from "./Icons"


export default function HeroSection() {
    const [isCopied, setIsCopied] = useState(false)
    return (
<section className="h-screen flex flex-col justify-center items-start">
      <div className="flex items-center gap-4 relative">
        {isCopied ? <p className="absolute top-0 -right-20 transition-all duration-500 text-sm text-primarycolor">Copied</p> : ""}
        <p className="text-sm text-white/30">0x66756c6c737461636b206d656368616e6963</p>

        <button className="cursor-pointer transition-all duration-500" onClick={() => {
            navigator.clipboard.writeText("0x66756c6c737461636b206d656368616e6963")
            setIsCopied(true)
            setTimeout(() => {
                setIsCopied(false)
            }, 2000)
        }}>{isCopied ? <Check /> : <Copy />}</button>
      </div>

      <h1 className="text-[100px] font-bold">Ganiu Samuel.</h1>
      <h1 className="text-7xl font-bold text-white/50">I bring your ideas to life</h1>
      <p className="text-lg text-white/30">I'm a Frontend Developer, I specialize in securing digital landscapes while crafting dynamic and user-friendly web experiences using React with TypeScript for web development I am currently and actively learning to improve my knowledge in my feild of work. Am also into web3 domain, where I actively engage in developing and designing immersiveweb3 applications. This involves working withSmart Contracts on theBlockchain. creating and deploying them, as well as implementing the front-end components to enable seamless user interactions.</p>
      <button className="p-4 border border-white/30 ">Download resume</button>
      </section>
    )
}