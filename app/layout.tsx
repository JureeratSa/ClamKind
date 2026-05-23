import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "ClamKind",
  description: "ClamKind App",
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
    >
      <body>{children}</body>
    </html>
  );
}
