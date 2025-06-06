import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <title>Euro Promotion</title>


          <meta name="description" content="Zde najdete kompletní nabídku našich služeb" />
          <meta name="keywords" content="europromotion, euro promotion" />
          <meta name="author" content="euro promotion" />
          <meta name="robots" content="index, follow" />

          <meta property="og:title" content="Euro Promotion" />
          <meta property="og:description" content="Zde najdete kompletní nabídku našich služeb" />
          <meta property="og:image" content="https://example.com/logo.png" />
          <meta property="og:url" content="https://europromotion.cz/" />
          <meta property="og:type" content="website" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Euro Promotion" />
          <meta name="twitter:description" content="Zde najdete kompletní nabídku našich služeb" />
          <meta name="twitter:image" content="https://europromotion.cz/logo.png" />

          <link rel="canonical" href="https://europromotion.cz/" />

          <link rel="icon" href="/favicon.ico" type="image/x-icon" />


        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`font-jetbrains antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
