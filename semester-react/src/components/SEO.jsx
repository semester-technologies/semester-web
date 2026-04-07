import { Helmet } from 'react-helmet-async'

const defaults = {
  siteName: 'Semester Technologies',
  baseUrl: 'https://semestertech.ng',
  image: 'https://semestertech.ng/og-default.jpg',
  twitterHandle: '@semestertech',
}

export default function SEO({
  title,
  description,
  path = '/',
  type = 'website',
  image,
  schema,
}) {
  const fullTitle = title
    ? `${title} | ${defaults.siteName}`
    : `${defaults.siteName} — Tech Training & Software Agency in Nigeria`
  const url = `${defaults.baseUrl}${path}`
  const ogImage = image || defaults.image

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={defaults.siteName} />
      <meta property="og:locale" content="en_NG" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={defaults.twitterHandle} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured Data */}
      {schema && (
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      )}
    </Helmet>
  )
}

// Pre-built schemas
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Semester Integrated Technologies',
  alternateName: 'Semester Tech',
  url: 'https://semestertech.ng',
  logo: 'https://semestertech.ng/logo.png',
  description:
    'Premier tech training academy and software agency in Nigeria. 200+ services, 120+ trained experts.',
  foundingDate: '2018',
  address: [
    {
      '@type': 'PostalAddress',
      streetAddress: '12, Bashiru Oweh Street, Computer Village',
      addressLocality: 'Ikeja, Lagos',
      addressCountry: 'NG',
    },
    {
      '@type': 'PostalAddress',
      streetAddress:
        'Suite C2, Nymex Plaza, Opposite Ammasco Filling Station, Gado Nasco Road, NNPC Junction, Kubwa',
      addressLocality: 'Abuja',
      addressCountry: 'NG',
    },
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+234-706-092-8686',
    contactType: 'sales',
    email: 'sales@semestertech.ng',
    availableLanguage: 'English',
  },
  sameAs: [
    'https://www.linkedin.com/company/semestertech',
    'https://www.instagram.com/semestertech',
    'https://www.facebook.com/semestertech',
    'https://www.tiktok.com/@semestertech',
    'https://www.youtube.com/@semestertech',
  ],
}

export const courseSchema = (name, description, price, duration) => ({
  '@context': 'https://schema.org',
  '@type': 'Course',
  name,
  description,
  provider: {
    '@type': 'Organization',
    name: 'Semester Integrated Technologies',
    url: 'https://semestertech.ng',
  },
  offers: {
    '@type': 'Offer',
    price,
    priceCurrency: 'NGN',
    availability: 'https://schema.org/InStock',
  },
  timeRequired: duration,
  courseMode: ['onsite', 'online'],
  locationCreated: {
    '@type': 'Place',
    name: 'Semester Tech Academy',
    address: { '@type': 'PostalAddress', addressLocality: 'Lagos', addressCountry: 'NG' },
  },
})

export const faqSchema = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
})

export const serviceSchema = (name, description) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name,
  description,
  provider: {
    '@type': 'Organization',
    name: 'Semester Integrated Technologies',
    url: 'https://semestertech.ng',
  },
  areaServed: { '@type': 'Country', name: 'Nigeria' },
})
