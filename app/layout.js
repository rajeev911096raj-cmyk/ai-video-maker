import "./globals.css";

export const metadata = {
  title: "AI Video Maker",
  description: "Create AI videos easily",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
