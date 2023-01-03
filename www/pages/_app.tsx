import { APP_NAME, DESCRIPTION } from 'lib/constants'
import { DefaultSeo } from 'next-seo'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import Meta from '~/components/Favicons'
import '../styles/index.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  const site_title = `The Open Source Twilio Alternative | ${APP_NAME}`
  const { basePath } = useRouter()

  return (
    <>
      <Meta />
      <DefaultSeo
        title={site_title}
        description={DESCRIPTION}
        openGraph={{
          type: 'website',
          url: 'https://fonoster.com/',
          site_name: 'Fonoster',
          images: [
            {
              url: `https://fonoster.com${basePath}/images/og/og-image.jpg`,
              width: 800,
              height: 600,
              alt: 'Fonoster Og Image',
            },
          ],
        }}
        twitter={{
          handle: '@fonoster',
          site: '@fonoster',
          cardType: 'summary_large_image',
        }}
      />
      <Component {...pageProps} />
    </>
  )
}
