import type { Metadata } from "next"
import "@cloudscape-design/global-styles/index.css"

export const metadata: Metadata = {
  title: "Cloudscape App",
  description: "Built with the Cloudscape Design System",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}