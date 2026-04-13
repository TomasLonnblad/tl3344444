"use client";
import React from "react";
import { SparklesCore } from "@/components/ui/sparkles";


export default function Page() {
  return (
    <div className="h-[40rem]  bg-black flex    absolute inset-0">
      <div className="w-full absolute inset-0 ">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
</div>
</div>
  )}


