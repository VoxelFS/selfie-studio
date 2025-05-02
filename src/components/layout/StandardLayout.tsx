"use client";

import { HtmlHTMLAttributes, ReactNode } from "react";
import { Navbar } from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";

interface StandardPageLayoutProps extends HtmlHTMLAttributes<HTMLElement> {
    children: ReactNode;
}

export default function StandardLayout({ children }: StandardPageLayoutProps) {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <main className="responsive-body grow">{children}</main>
                <Footer />
            </div>
        </>
    );
}
