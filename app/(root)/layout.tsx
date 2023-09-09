import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import "../globals.css";
import Topbar from "@/components/shared/Topbar";
import LeftSideBar from "@/components/shared/LeftSideBar";
import BottomBar from "@/components/shared/BottomBar";

export const metadata = {
  title: "Trizcla",
  description: "A Next.js 13 Finance Tracker Application",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="pt-BR">
        <body className={inter.className}>
          <Topbar />
          <main className='flex flex-row'>
            <LeftSideBar />

            <section className='main-container'>
              <div className="w-full max-w-4xl">{children}</div>
            </section>
          </main>
          <BottomBar />
        </body>
      </html>
    </ClerkProvider>
  );
}
