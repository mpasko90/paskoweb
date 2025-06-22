# SEO Technical Implementation Plan 2024-2025

## 1. Metadata Implementation (App Router)

### Root Layout (`app/layout.tsx`)

```typescript
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://paskomichal.pl"),
  title: {
    default: "Web Developer Wrocław | Michał Paśko - Next.js & React Expert",
    template: "%s | Michał Paśko - Web Developer",
  },
  description:
    "Tworzę nowoczesne strony internetowe w Next.js 15 i React. 10+ lat doświadczenia, projekty dla firm z Wrocławia. Darmowa wycena ➤ Sprawdź!",
  openGraph: {
    title: "Web Developer Wrocław | Michał Paśko",
    description:
      "Tworzę nowoczesne strony internetowe w Next.js 15 i React. 10+ lat doświadczenia, wdrożenia dla firm z Wrocławia.",
    url: "https://paskomichal.pl",
    siteName: "Michał Paśko - Web Developer",
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Michał Paśko - Web Developer Wrocław",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-site-verification",
  },
};
```

### Page-Specific Metadata

Example for Portfolio page (`app/portfolio/page.tsx`):

```typescript
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio Web Developera | Realizacje Next.js i React",
  description:
    "Zobacz projekty stron internetowych i aplikacji webowych. Specjalizacja: Next.js 15, React, TypeScript. Case studies z wydajnością i Core Web Vitals.",
  openGraph: {
    title: "Portfolio Web Developera | Michał Paśko",
    description:
      "Zobacz realizacje stron i aplikacji webowych w Next.js i React.",
    images: [
      {
        url: "/images/portfolio-og.webp",
        width: 1200,
        height: 630,
        alt: "Portfolio projektów webowych",
      },
    ],
  },
};
```

## 2. Structured Data Implementation

### Enhanced JSON-LD Schema (`components/seo/EnhancedJsonLdSchema.tsx`)

```typescript
import { Organization, Person, WebSite } from 'schema-dts'

export function EnhancedJsonLdSchema() {
  const personSchema: Person = {
    '@type': 'Person',
    '@id': 'https://paskomichal.pl/#person',
    name: 'Michał Paśko',
    url: 'https://paskomichal.pl',
    image: 'https://paskomichal.pl/images/developer-photo.webp',
    description: 'Web Developer specjalizujący się w Next.js, React i TypeScript',
    jobTitle: 'Web Developer',
    knowsAbout: [
      'Next.js 15',
      'React',
      'TypeScript',
      'Web Development',
      'Frontend Development',
      'JavaScript',
      'SEO'
    ],
    sameAs: [
      'https://github.com/yourgithub',
      'https://linkedin.com/in/yourlinkedin'
    ],
    worksFor: {
      '@type': 'Organization',
      '@id': 'https://paskomichal.pl/#organization',
      name: 'Michał Paśko Web Development',
      url: 'https://paskomichal.pl'
    }
  }

  const organizationSchema: Organization = {
    '@type': 'Organization',
    '@id': 'https://paskomichal.pl/#organization',
    name: 'Michał Paśko Web Development',
    url: 'https://paskomichal.pl',
    logo: {
      '@type': 'ImageObject',
      url: 'https://paskomichal.pl/images/logo.webp'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+48-XXX-XXX-XXX',
      contactType: 'customer service',
      areaServed: 'PL',
      availableLanguage: ['Polish', 'English']
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Wrocław',
      addressRegion: 'Dolnośląskie',
      addressCountry: 'PL'
    }
  }

  const websiteSchema: WebSite = {
    '@type': 'WebSite',
    '@id': 'https://paskomichal.pl/#website',
    name: 'Michał Paśko - Web Developer Wrocław',
    url: 'https://paskomichal.pl',
    description: 'Tworzenie nowoczesnych stron internetowych i aplikacji webowych',
    publisher: {
      '@id': 'https://paskomichal.pl/#organization'
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@graph': [personSchema, organizationSchema, websiteSchema]
        })
      }}
    />
  )
}
```

## 3. Performance Optimizations

### Image Component Usage

```typescript
import Image from 'next/image'

export function OptimizedImage() {
  return (
    <Image
      src="/images/example.webp"
      alt="Description"
      width={800}
      height={600}
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,..."
      priority={true} // for LCP images
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
  )
}
```

### Dynamic Imports for Non-Critical Components

```typescript
import dynamic from 'next/dynamic'

const DynamicComponent = dynamic(
  () => import('@/components/heavy-component'),
  {
    loading: () => <LoadingSpinner />,
    ssr: false // for client-only components
  }
)
```

## 4. Server Components Implementation

### Example Server Component

```typescript
// app/(main)/page.tsx
import { Suspense } from 'react'
import { ProjectsList } from '@/components/projects-list'

async function getProjects() {
  const res = await fetch('https://api.example.com/projects', {
    next: { revalidate: 3600 } // revalidate every hour
  })
  return res.json()
}

export default async function HomePage() {
  const projects = await getProjects()

  return (
    <main>
      <h1>Web Developer Wrocław | Next.js & React Expert</h1>
      <Suspense fallback={<LoadingProjects />}>
        <ProjectsList projects={projects} />
      </Suspense>
    </main>
  )
}
```

## 5. Core Web Vitals Optimization

### Font Loading Strategy

```typescript
// app/layout.tsx
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-inter'
})

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl" className={inter.variable}>
      <body>{children}</body>
    </html>
  )
}
```

### Third-Party Script Loading

```typescript
import Script from 'next/script'

export default function Analytics() {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX');
        `}
      </Script>
    </>
  )
}
```

## 6. Implementation Timeline

### Phase 1 (Immediate)

1. Update metadata in root layout
2. Implement basic JSON-LD schema
3. Optimize images with next/image

### Phase 2 (Week 2)

1. Server Components implementation
2. Dynamic imports optimization
3. Font loading strategy

### Phase 3 (Week 3-4)

1. Enhanced JSON-LD schema
2. Core Web Vitals optimization
3. Third-party scripts optimization

## 7. Monitoring Plan

### Tools Setup

- Vercel Analytics
- Google Search Console
- Google Analytics 4
- Core Web Vitals monitoring

### Regular Checks

- Weekly Core Web Vitals review
- Monthly SEO performance analysis
- Quarterly technical SEO audit
