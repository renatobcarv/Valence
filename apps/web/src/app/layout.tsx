import '@/styles/globals.css';
export const metadata = {
  title: 'Valence',
  description: 'Revenue Recovery AI platform',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
