import { Meta, Title } from '@angular/platform-browser';
import { APP_PAGE_CONTENT } from './app.content';

export function getCanonicalUrl(): string {
  const base = APP_PAGE_CONTENT.siteUrl.replace(/\/$/, '');
  return `${base}${APP_PAGE_CONTENT.canonicalPath}`;
}

export function getOgImageUrl(): string {
  const base = APP_PAGE_CONTENT.siteUrl.replace(/\/$/, '');
  return `${base}${APP_PAGE_CONTENT.ogImagePath}`;
}

export function configureSeo(title: Title, meta: Meta, document: Document): void {
  const {
    seoTitle,
    metaDescription,
    authorName,
    datePublished,
    dateModified,
    keywords,
    ogImageAlt,
    themeColor
  } = APP_PAGE_CONTENT;
  const canonicalUrl = getCanonicalUrl();
  const ogImageUrl = getOgImageUrl();

  title.setTitle(seoTitle);

  const tags: Array<Record<string, string>> = [
    { name: 'description', content: metaDescription },
    { name: 'author', content: authorName },
    {
      name: 'robots',
      content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
    },
    { name: 'googlebot', content: 'index, follow' },
    { name: 'keywords', content: keywords },
    { name: 'theme-color', content: themeColor },
    { property: 'og:title', content: seoTitle },
    { property: 'og:description', content: metaDescription },
    { property: 'og:type', content: 'article' },
    { property: 'og:url', content: canonicalUrl },
    { property: 'og:image', content: ogImageUrl },
    { property: 'og:image:alt', content: ogImageAlt },
    { property: 'og:site_name', content: authorName },
    { property: 'og:locale', content: 'en_US' },
    { property: 'article:author', content: authorName },
    { property: 'article:published_time', content: datePublished },
    { property: 'article:modified_time', content: dateModified },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: seoTitle },
    { name: 'twitter:description', content: metaDescription },
    { name: 'twitter:image', content: ogImageUrl },
    { name: 'twitter:image:alt', content: ogImageAlt }
  ];

  for (const tag of tags) {
    meta.updateTag(tag);
  }

  upsertLinkTag(document, 'canonical', canonicalUrl);
}

function upsertLinkTag(document: Document, rel: string, href: string): void {
  let link = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', rel);
    document.head.appendChild(link);
  }
  link.href = href;
}
