import dynamic from 'next/dynamic';
import "@/app/_styles/globals.css";
import Footer from "@/app/_components/Footer/Footer";
import Script from 'next/script';

const Header = dynamic(() => import('@/app/_components/Header/Header'), { ssr: true });

export const metadata = {
  title: {
    template: "%s",
    default: "Азиза Шахзадэевна - Эндокринолог в Ташкенте, Узбекистан"
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
      <head>
        <meta property="og:image" content="https://endocrinolog.uz/opGraph.png" />
        <meta property="og:url" content="https://endocrinolog.uz" />
        <meta property="og:image:secure_url" content="https://endocrinolog.uz/opGraph.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="100" />
        <meta property="og:image:height" content="100" />
        <meta name="description" content="Эндокринолог высшей категории в Ташкенте, Узбекистан, специализируется на лечении диабета, заболеваний щитовидной железы и гормональных нарушений." />
        <meta name="keywords" content="эндокринолог Ташкент, лечение диабета Узбекистан, специалист по щитовидной железе Ташкент, гормональные нарушения, Азиза Шахзадэевна эндокринолог, медицинский специалист Узбекистан, лечение щитовидной железы" />
        <meta name="author" content="Азиза Шахзадэевна" />
      </head>
      <body>
        <Header />
        <main className="w-full bg-white relative">{children}</main>
        <Footer />

        {/* Google Tag Manager (gtag.js) */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-11414753579"></Script>
        <Script id="google-analytics-1">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-11414753579');
          `}
        </Script>

        {/* Additional Google Tag */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-LM1W5DLE7P"></Script>
        <Script id="google-analytics-2">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LM1W5DLE7P');
          `}
        </Script>

        {/* Yandex.Metrika counter */}
        <Script id="yandex-metrika">
          {`
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {
              if (document.scripts[j].src === r) { return; }
            }
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

            ym(98512559, "init", {
              clickmap:true,
              trackLinks:true,
              accurateTrackBounce:true,
              webvisor:true
            });
          `}
        </Script>
        <noscript>
          <div>
            <img src="https://mc.yandex.ru/watch/98512559" style={{ position: "absolute", left: "-9999px" }} alt="" />
          </div>
        </noscript>
      </body>
    </html>
  );
}
