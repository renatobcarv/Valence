import '@/styles/globals.css';
import { Inter, Outfit } from 'next/font/google';
import { cn } from '@/lib/utils';

const interFont = Inter({ subsets: ['latin'], variable: '--font-sans' });
const outfitFont = Outfit({ subsets: ['latin'], variable: '--font-display' });

export const metadata = {
  title: 'Valence | Recupere Receita Perdida com IA',
  description: 'A Valence analisa seu funil de vendas para detectar vazamentos de receita e automatizar a recuperação.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={cn("scroll-smooth dark", interFont.variable, outfitFont.variable)}>
      <body className={cn(interFont.className, "bg-black text-white selection:bg-primary/30 antialiased")}>
        {children}
      </body>
    </html>
  );
}
