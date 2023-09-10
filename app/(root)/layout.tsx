import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import { Providers } from "../providers";
import "../globals.css";
import TopBar from "@/components/shared/TopBar";
import LeftSideBar from "@/components/shared/LeftSideBar";
import BottomBar from "@/components/shared/BottomBar";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata = {
  title: "Trizcla",
  description: "Next.js 13 Finance Tracker Application",
};
<link rel="icon" href="/icon.ico" sizes="any" />;
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="pt-BR">
        <body className={`${inter.className} `}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <TopBar />
            <main className="flex flex-row">
              <LeftSideBar />
              <Providers>
                <section className="main-container">
                  <div className="w-full max-w-4xl mt-20">{children}</div>
                </section>
              </Providers>
            </main>
            <BottomBar />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
