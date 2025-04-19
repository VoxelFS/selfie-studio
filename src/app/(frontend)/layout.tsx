import React from 'react'
import "../../styles/global.css";

export const metadata = {
  description: 'The website for Selfie Studio.',
  title: 'Selfie Studio',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
