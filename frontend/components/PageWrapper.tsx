import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-lightBg">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="p-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
