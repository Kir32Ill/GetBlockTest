import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { BalanceCard } from "@/components/BalanceCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-blue-500/30">
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full" />
      </div>

      <Header />
      
      <main className="container mx-auto px-6 flex flex-col items-center">
        <Hero />
        <BalanceCard />
        
        <footer className="mt-20 py-10 text-gray-600 text-sm">
          © {new Date().getFullYear()} GetBlock.io Junior Frontend Test Assignment
        </footer>
      </main>
    </div>
  );
}