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
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://endocrinolog.uz',
    title: 'Азиза Шахзадэевна - Эндокринолог в Ташкенте, Узбекистан',
    description: "Эндокринолог высшей категории в Ташкенте, Узбекистан, специализируется на лечении диабета, заболеваний щитовидной железы и гормональных нарушений.",
    images: [
      {
        url: 'https://endocrinolog.uz/opGraph.png',
        width: 1200,
        height: 630,
        alt: 'Азиза Шахзадэевна - Эндокринолог',
      },
    ],
    site_name: 'Endocrinolog.uz',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Азиза Шахзадэевна - Эндокринолог в Ташкенте, Узбекистан',
    description: "Эндокринолог высшей категории в Ташкенте, Узбекистан, специализируется на лечении диабета, заболеваний щитовидной железы и гормональных нарушений.",
    images: ['https://endocrinolog.uz/opGraph.png'],
  },
  alternates: {
    canonical: 'https://endocrinolog.uz',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    shortcut: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <Header />
        <main className="w-full bg-white relative">{children}</main>
        <Footer />

        {/* Google Analytics */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-11414753579"></Script>
        <Script id="google-analytics-1">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-11414753579');
          `}
        </Script>

        {/* Additional Google Analytics */}
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
