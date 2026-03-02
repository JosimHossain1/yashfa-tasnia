
"use client";
import { Grid } from "@/components/Grid";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { VideoReel } from "@/components/VideoReel";
import { About } from "@/components/About";
export default function Home() {
  return (
    <>
    <Hero/>
    <Grid/>
    <Services/>
    <VideoReel/>
    <About/>
    </>
  );
}


