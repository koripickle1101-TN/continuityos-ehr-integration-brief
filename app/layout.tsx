import "./globals.css";

export const metadata = {
  title: "Continuity OS Integration Brief | Kori Pickle",
  description:
    "A simulated healthcare information systems integration brief applying EHR workflow, patient intake, documentation, coding, billing, and revenue cycle continuity concepts from a patient-to-professional perspective.",
  metadataBase: new URL("https://continuityos-ehr-integration-brief.vercel.app"),
  openGraph: {
    title: "Continuity OS Integration Brief | Kori Pickle",
    description:
      "A simulated healthcare information systems integration brief applying EHR workflow, patient intake, documentation, coding, billing, and revenue cycle continuity concepts from a patient-to-professional perspective.",
    url: "https://continuityos-ehr-integration-brief.vercel.app",
    siteName: "Continuity OS Integration Brief",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Continuity OS Integration Brief by Kori Pickle"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Continuity OS Integration Brief | Kori Pickle",
    description:
      "A healthcare information systems integration brief focused on EHR workflow, documentation, coding, billing, and revenue cycle continuity.",
    images: ["/og-image.svg"]
  },
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
