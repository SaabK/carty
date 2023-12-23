import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import StoreProvider from "./_components/StoreProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Carty - An E-commerce Platform",
    description:
        "Carty is an ecommerce platform on which sellers can sell their products to customers",
    keywords: ["Carty", "E-commerce Platform", "Pakistan"],
    icons: ["/favicon.png"],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className={`${inter.className} min-h-screen flex flex-col justify-between`}
            >
                <StoreProvider>
                    <div>
                        <Navbar />
                        {children}
                    </div>
                    <Footer />
                </StoreProvider>
            </body>
        </html>
    );
}
