import "./globals.css";

export const metadata = {
  title: "ContinuityOS | Kori Pickle",
  description:
    "A simulated healthcare information systems integration brief focused on patient experience, EHR workflow, documentation, coding, billing, and revenue cycle continuity.",
  themeColor: "#ffffff",
  colorScheme: "light"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ colorScheme: "light" }}>
      <head>
        <meta name="color-scheme" content="light only" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body>{children}</body>
    </html>
  );
}
