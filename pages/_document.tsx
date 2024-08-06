// pages/_document.js
import Document, { Html, Head, Main, NextScript } from "next/document";
import type { AppProps } from "next/app";
import { Figtree, Lora } from "@next/font/google";
import "../styles/global.css";

// const figtree = Figtree({
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600", "700", "800", "900"],
// });

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={lora.className}>
      <Component {...pageProps} />
    </main>
  );
}

// class MyDocument extends Document {
//   render() {
//     return (
//       <Html>
//         <Head>
//           <link
//             href="https://fonts.googleapis.com/css2?family=Figtree:wght@0,300..900;1,300..900&display=swap"
//             rel="stylesheet"
//           />
//         </Head>
//         <body>
//           <Main />
//           <NextScript />
//         </body>
//       </Html>
//     );
//   }
// }

// export default MyDocument;
