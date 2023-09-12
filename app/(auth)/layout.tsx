import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import { ptBR } from "@clerk/localizations";
import { dark } from "@clerk/themes";

import "../globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import TopBar from "@/components/shared/TopBar";

export const metadata = {
  title: "Trizcla",
  description: "Next.js 13 Finance Tracker Application",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      localization={ptBR}
      appearance={{
        elements: {
          card: "py-2 bg-white dark:bg-slate-950",
          headerTitle: 'text-black dark:text-white',
          headerSubtitle: 'text-black dark:text-white',
          socialButtonsBlockButton: 'text-black bg-white',
          dividerLine: 'bg-black dark:bg-white',
          dividerText: "text-black dark:text-white",
          formFieldLabel:"text-black dark:text-white",
          formFieldRow: "text-black dark:text-white",
          footerActionText: "text-black dark:text-white",
          formButtonPrimary: "bg-gradient-to-tl from-pink-500 via-red-500 to-yellow-500"
        },
      }}
    >
      <html lang="pt-BR">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <TopBar />
          <body
            className={`${inter.className} main-container max-w-4xl h-screen flex items-center justify-start pt-28 dark:bg-slate-950 bg-gray-100`}
          >
            {children}
          </body>
        </ThemeProvider>
      </html>
    </ClerkProvider>
  );
}
