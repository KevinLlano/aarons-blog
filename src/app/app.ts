import { Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { APP_FAQ_SCHEMA, APP_PAGE_CONTENT } from './app.content';

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
  protected readonly levelingSteps = APP_PAGE_CONTENT.levelingSteps;
  protected readonly classAdvice = APP_PAGE_CONTENT.classAdvice;
  protected readonly goldTips = APP_PAGE_CONTENT.goldTips;
  protected readonly endgameOptions = APP_PAGE_CONTENT.endgameOptions;
  protected readonly mistakes = APP_PAGE_CONTENT.mistakes;
  protected readonly faqItems = APP_PAGE_CONTENT.faqItems;
  protected readonly faqSchema = APP_FAQ_SCHEMA;

  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  constructor() {
    this.title.setTitle(this.seoTitle);
    this.meta.updateTag({ name: 'description', content: this.metaDescription });
    this.meta.updateTag({ property: 'og:title', content: this.seoTitle });
    this.meta.updateTag({ property: 'og:description', content: this.metaDescription });
    this.meta.updateTag({ property: 'og:type', content: 'article' });
  }
}
