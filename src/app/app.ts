import { DOCUMENT } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { APP_PAGE_CONTENT, APP_STRUCTURED_DATA } from './app.content';
import { configureSeo } from './app.seo';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly seoTitle = APP_PAGE_CONTENT.seoTitle;
  protected readonly metaDescription = APP_PAGE_CONTENT.metaDescription;
  protected readonly slug = APP_PAGE_CONTENT.slug;
  protected readonly featuredImageAlt = APP_PAGE_CONTENT.featuredImageAlt;
  protected readonly twitchUrl = APP_PAGE_CONTENT.twitchUrl;
  protected readonly tocItems = APP_PAGE_CONTENT.tocItems;
  protected readonly beginnerTips = APP_PAGE_CONTENT.beginnerTips;
  protected readonly communityTips = APP_PAGE_CONTENT.communityTips;
  protected readonly levelingSteps = APP_PAGE_CONTENT.levelingSteps;
  protected readonly classAdvice = APP_PAGE_CONTENT.classAdvice;
  protected readonly goldTips = APP_PAGE_CONTENT.goldTips;
  protected readonly endgameOptions = APP_PAGE_CONTENT.endgameOptions;
  protected readonly faqItems = APP_PAGE_CONTENT.faqItems;
  protected readonly structuredData = APP_STRUCTURED_DATA;

  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);

  constructor() {
    configureSeo(this.title, this.meta, this.document);
  }
}
