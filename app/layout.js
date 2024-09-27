import dynamic from 'next/dynamic';
import Head from 'next/head';
import "@/app/_styles/globals.css";
import Footer from "@/app/_components/Footer/Footer";

const Header = dynamic(() => import('@/app/_components/Header/Header'), { ssr: true });

export const metadata = {
  title: {
    template: "%s",
    default: "Азиза Шахзодевна - Эндокринолог в Ташкенте, Узбекистан"
  },
  description: "Эндокринолог высшей категории в Ташкенте, Узбекистан, специализируется на лечении диабета, заболеваний щитовидной железы и гормональных нарушений.",
  keywords: [
    "эндокринолог Ташкент",
    "лечение диабета Узбекистан",
    "специалист по щитовидной железе Ташкент",
    "гормональные нарушения",
    "Азиза Шахзодевна эндокринолог",
    "медицинский специалист Узбекистан",
    "лечение щитовидной железы"
  ],
  icons: {
    icon: [
      '/favicon.ico'
    ],
    apple: [
      '/apple-touch-icon.png',
    ],
    shortcut: [
      '/apple-touch-icon.png'
    ]
  },
  manifest: '/site.webmanifest'
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <Head>
        <meta property="og:image" content="https://endocrinolog.uz/opGraph.png" />
        <meta property="og:url" content="https://endocrinolog.uz" />
        <meta property="og:image:secure_url" content="https://endocrinolog.uz/opGraph.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="100" />
        <meta property="og:image:height" content="100" />
        <meta name="description" content="Эндокринолог высшей категории в Ташкенте, Узбекистан, специализируется на лечении диабета, заболеваний щитовидной железы и гормональных нарушений." />
        <meta name="keywords" content="эндокринолог Ташкент, лечение диабета Узбекистан, специалист по щитовидной железе Ташкент, гормональные нарушения, Азиза Шахзодевна эндокринолог, медицинский специалист Узбекистан, лечение щитовидной железы" />
        <meta name="author" content="Азиза Шахзодевна" />
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-11414753579"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-11414753579');
          `,
        }} />
      </Head>
      <body>
        <Header />
        <main className="w-full bg-white relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
