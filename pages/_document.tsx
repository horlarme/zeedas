import { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script
          type="module"
          src="//unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
        />
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script
          noModule
          src={"//unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"}
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,301,701,300,501,401,901,400&f[]=nunito@300,201,301,700,601,501,600,701,800,401,200,400,500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
