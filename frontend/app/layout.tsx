import "./globals.css";
import "leaflet/dist/leaflet.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Hermes Cab Booking",
  description: "Luxury Cab Booking Platform",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        {/* Global Navbar */}
        <Navbar />

        <main className="min-h-screen px-6 py-6 max-w-6xl mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
