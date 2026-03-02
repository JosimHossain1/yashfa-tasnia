"use client";
import { Grid } from "@/components/Grid";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { VideoReel } from "@/components/VideoReel";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Stats } from "@/components/Stats";
export default function Home() {
  return (
    <>
    <Hero/>
    <Grid/>
    <Services/>
    <VideoReel/>
    <Stats/>
    <About/>
    <Contact/>
    </>
  );
}


