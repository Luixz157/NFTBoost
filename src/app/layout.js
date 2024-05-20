//Aqui é aonde faz que o Componente renderize apenas uma vez
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const inter = Inter({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-inter'
});

const poppins = Poppins ({
  subsets: ["latin"],
  weight: ['600'],
  display: 'swap',
  variable: '--font-poppins'
})

export const metadata = {
  title: "NFTBoost",
  description: "Projeto do CodeBoost",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable}`}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
