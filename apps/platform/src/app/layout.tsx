import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Sidebar } from "@/components/layout/sidebar";
import { Topbar } from "@/components/layout/topbar";
import { IntelligentBackground } from "@/components/layout/IntelligentBackground";
import { cn } from "@/lib/utils";

const interFont = Inter({ subsets: ["latin"], variable: "--font-sans" });
const outfitFont = Outfit({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  title: "Valence | Revenue Intelligence Platform",
  description: "AI-powered revenue recovery platform to identify and recover lost revenue in your sales funnel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className={cn("font-sans dark", interFont.variable, outfitFont.variable)}>
      <body className={interFont.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <IntelligentBackground />
          <div className="flex min-h-screen w-full">
            <Sidebar />
            <div className="flex flex-1 flex-col overflow-hidden">
              <Topbar />
              <main className="flex-1 overflow-y-auto p-8">
                {children}
              </main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
