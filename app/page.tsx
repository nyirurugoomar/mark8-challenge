// app/page.tsx
'use client';
import { Header,Footer, Hero, RecentProduct } from "@/components";


export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero/>
        <RecentProduct/>
      </main>
      <Footer />
    </>
  );
}
