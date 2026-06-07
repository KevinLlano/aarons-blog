import { Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly seoTitle = 'Guild Wars 2 Beginner Guide: Tips, Leveling & More';
  protected readonly metaDescription = 'Learn Guild Wars 2 beginner tips, leveling, classes, mounts, gold farming, and endgame progression in this 2026 guide.';
  protected readonly slug = 'guild-wars-2-beginner-guide';
  protected readonly featuredImageAlt = 'Featured image placeholder for a Guild Wars 2 beginner guide article';
  protected readonly twitchUrl = 'https://www.twitch.tv/maddwrath';

  protected readonly tocItems = [
    { id: 'start-strong', label: 'How to Start Strong in Guild Wars 2' },
    { id: 'beginner-tips', label: 'Best Beginner Tips' },
    { id: 'leveling-guide', label: 'Leveling Guide for Faster Progress' },
    { id: 'best-classes', label: 'Choosing the Right Class' },
    { id: 'mounts', label: 'How Mounts Change the Game' },
    { id: 'gold-farming', label: 'Gold Farming for New Players' },
    { id: 'endgame', label: 'Endgame Progression Explained' },
    { id: 'mistakes', label: 'Common Beginner Mistakes' },
    { id: 'faq', label: 'Guild Wars 2 Beginner FAQ' }
  ];

  protected readonly beginnerTips = [
    'Follow the personal story and dynamic events in each zone so you level naturally instead of grinding one spot for hours.',
    'Use waypoints, gather materials as you move, and unlock map objectives to build account-wide progress while you level.',
    'Try different weapon sets early. In Guild Wars 2, your class plays very differently depending on the weapon you equip.',
    'Join a public squad for world bosses and meta events whenever you see them pop up. The reward density is excellent for new players.'
  ];

  protected readonly levelingSteps = [
    'Finish hearts, events, and story chapters in the same zone before moving on, because this keeps travel efficient and reduces downtime.',
    'Do daily activities when they line up with your leveling path. Small account bonuses add up quickly in a long MMO like GW2.',
    'Keep your gear current every 10 to 15 levels. Stats matter more than rarity while you are learning the game.',
    'Use an experience booster only when you can stay active for a solid session, such as during a story run or event chain.'
  ];

  protected readonly classAdvice = [
    {
      name: 'Guardian',
      summary: 'A strong beginner choice with forgiving defenses, easy support value, and flexible weapon options.'
    },
    {
      name: 'Warrior',
      summary: 'Simple to understand and durable, which makes it a comfortable pick for learning combat basics.'
    },
    {
      name: 'Ranger',
      summary: 'Pet support and straightforward damage help new players stay mobile and survive awkward encounters.'
    },
    {
      name: 'Necromancer',
      summary: 'A safe option for players who want survivability and room to make mistakes while they learn.'
    }
  ];

  protected readonly goldTips = [
    'Sell salvage, crafting materials, and unwanted upgrade materials regularly instead of letting your inventory fill up.',
    'Run dynamic event chains, world bosses, and map completion routes because they produce steady loot for a fresh account.',
    'Do not rush expensive cosmetics first. Keep your first gold focused on bag space, quality-of-life unlocks, and essential gear.',
    'If you want a deeper breakdown later, use a related resource such as [Related Article: Best GW2 Gold Farming Methods].'
  ];

  protected readonly endgameOptions = [
    'Fractals of the Mists for scalable five-player content and a smooth bridge into structured group play.',
    'Strikes for short, focused encounters that teach mechanics without the full time commitment of a raid night.',
    'Raids if you want the hardest coordinated PvE challenge and are ready to learn roles, encounters, and squad discipline.',
    'Open-world metas and expansion systems if you prefer exploration, long event chains, and account progression.'
  ];

  protected readonly mistakes = [
    'Buying random gear too often instead of learning which stats actually match your build and playstyle.',
    'Ignoring movement and positioning. A good dodge at the right time matters more than standing still and trading hits.',
    'Skipping exploration and waypoints, which makes future leveling and farming routes slower than they need to be.',
    'Treating every class like a traditional MMO trinity role. Guild Wars 2 rewards adaptability more than rigid expectations.'
  ];

  protected readonly faqItems = [
    {
      question: 'Is Guild Wars 2 good for beginners in 2026?',
      answer: 'Yes. Guild Wars 2 remains one of the most beginner-friendly MMOs because leveling is flexible, combat is active, and the game lets you learn at your own pace.'
    },
    {
      question: 'What is the best class for a new Guild Wars 2 player?',
      answer: 'Guardian, Warrior, Ranger, and Necromancer are all strong beginner picks. The best choice is usually the class that feels clear and fun while you learn movement and skills.'
    },
    {
      question: 'What is the fastest way to level in Guild Wars 2?',
      answer: 'The fastest leveling comes from a mix of story, dynamic events, heart tasks, exploration, and quick world boss participation rather than repetitive mob grinding.'
    },
    {
      question: 'When should I unlock mounts in Guild Wars 2?',
      answer: 'Mounts become a huge quality-of-life upgrade once you start expansion content, especially Path of Fire. Unlock them as soon as your account can reach that progression path.'
    },
    {
      question: 'How do beginners make gold in Guild Wars 2?',
      answer: 'The safest gold comes from selling materials, completing events, doing world bosses, and learning simple farming routes before you move into more advanced gold farming.'
    },
    {
      question: 'What should I do after reaching level 80 in Guild Wars 2?',
      answer: 'After level 80, start exploring fractals, strikes, raids, expansion zones, mastery progression, and build optimization so your account keeps growing instead of stalling.'
    }
  ];

  protected readonly faqSchema = JSON.stringify(
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: this.faqItems.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer
        }
      }))
    },
    null,
    2
  );

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
