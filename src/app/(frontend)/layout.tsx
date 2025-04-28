import React from 'react'
import "../../styles/global.css";

export const metadata = {
  description: 'The website for Selfie Studio.',
  title: 'Selfie Studio',
}


/* font */
import { Figtree } from "next/font/google";
const figtree = Figtree({ subsets: ["latin"] });


export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body className={`${figtree.className}`}>
        <main>{children}</main>
      </body>
    </html>
  )
}
