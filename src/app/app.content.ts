export interface TocItem {
  id: string;
  label: string;
}

export interface AdviceItem {
  name: string;
  summary: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const APP_PAGE_CONTENT = {
  // Update siteUrl to your live blog URL before deploying.
  siteUrl: 'https://maddwrathgw2.vercel.app',
  canonicalPath: '/',
  ogImagePath: '/gw1.jpg',
  ogImageAlt: 'Guild Wars 2 beginner guide hero artwork',
  authorName: 'Maddwrath',
  datePublished: '2026-06-15',
  dateModified: '2026-06-15',
  themeColor: '#07111f',
  keywords:
    'guild wars 2 beginner guide, gw2 beginner tips, gw2 leveling guide, best gw2 class for beginners, gw2 mounts guide, gw2 gold farming, gw2 endgame guide, guild wars 2 2026',
  seoTitle: 'Guild Wars 2 Beginner Guide: Tips, Leveling & More',
  metaDescription:
    'Learn Guild Wars 2 beginner tips, leveling, classes, mounts, gold farming, and endgame progression in this 2026 guide.',
  slug: 'guild-wars-2-beginner-guide',
  featuredImageAlt: 'Guild Wars 2 beginner guide hero artwork for new players',
  twitchUrl: 'https://www.twitch.tv/maddwrath',
  tocItems: [
    { id: 'start-strong', label: 'What Is Guild Wars 2? Is It Worth Your Time?' },
    { id: 'beginner-tips', label: 'Best Beginner Tips' },
    { id: 'community', label: 'Guilds & Finding Groups' },
    { id: 'leveling-guide', label: 'Leveling Guide for Faster Progress' },
    { id: 'best-classes', label: 'Choosing the Right Class' },
    { id: 'mounts', label: 'How Mounts Change the Game' },
    { id: 'gold-farming', label: 'Gold Farming for New Players' },
    { id: 'endgame', label: 'Endgame Progression Explained' },
    { id: 'faq', label: 'Guild Wars 2 Beginner FAQ' },
    { id: 'learn-more', label: 'Learn More & Stay Connected' }
  ] satisfies TocItem[],
  beginnerTips: [
    'Follow the personal story and dynamic events in each zone so you level naturally instead of grinding one spot for hours.',
    'Use waypoints, gather materials as you move, and unlock map objectives to build account-wide progress while you level.',
    'Try different weapon sets early. In Guild Wars 2, your class plays very differently depending on the weapon you equip.',
    'Join a public squad for world bosses and meta events whenever you see them pop up. The reward density is excellent for new players.'
  ],
  communityTips: [
    'Join a guild early so you have people to ask questions, run content with, and learn the game from while you progress.',
    'Use Looking For Group for world bosses, strikes, and other open-world activity when you want fast access to squads.',
    'Keep an eye out for Maddwrath’s guild if you want a familiar place to start meeting players and finding group runs.',
    'Treat community play as part of your progression, not extra homework. Guild Wars 2 is better when you are connected to other players.'
  ],
  levelingSteps: [
    'Finish hearts, events, and story chapters in the same zone before moving on, because this keeps travel efficient and reduces downtime.',
    'Do daily activities when they line up with your leveling path. Small account bonuses add up quickly in a long MMO like GW2.',
    'Keep your gear current every 10 to 15 levels. Stats matter more than rarity while you are learning the game.',
    'Use an experience booster only when you can stay active for a solid session, such as during a story run or event chain.'
  ],
  classAdvice: [
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
  ] satisfies AdviceItem[],
  goldTips: [
    'Sell salvage, crafting materials, and unwanted upgrade materials regularly instead of letting your inventory fill up.',
    'Run dynamic event chains, world bosses, and map completion routes because they produce steady loot for a fresh account.',
    'Do not rush expensive cosmetics first. Keep your first gold focused on bag space, quality-of-life unlocks, and essential gear.',
    'If you want a deeper breakdown later, use a related resource such as [Related Article: Best GW2 Gold Farming Methods].'
  ],
  endgameOptions: [
    'Fractals of the Mists for scalable five-player content and a smooth bridge into structured group play.',
    'Strikes for short, focused encounters that teach mechanics without the full time commitment of a raid night.',
    'Raids if you want the hardest coordinated PvE challenge and are ready to learn roles, encounters, and squad discipline.',
    'Open-world metas and expansion systems if you prefer exploration, long event chains, and account progression.',
    'WvW and PvP if you want competitive endgame with team fights, map control, and a more player-versus-player focused grind.',
    'Legendary Crafting/Collection if you want to make gold and improve your account with the best items in the game.'
  ],
  faqItems: [
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
  ] satisfies FaqItem[]
} as const;

function getAbsoluteUrl(path: string): string {
  const base = APP_PAGE_CONTENT.siteUrl.replace(/\/$/, '');
  return `${base}${path}`;
}

const canonicalUrl = `${APP_PAGE_CONTENT.siteUrl.replace(/\/$/, '')}${APP_PAGE_CONTENT.canonicalPath}`;
const ogImageUrl = getAbsoluteUrl(APP_PAGE_CONTENT.ogImagePath);

export const APP_STRUCTURED_DATA = JSON.stringify({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${canonicalUrl}#website`,
      url: canonicalUrl,
      name: APP_PAGE_CONTENT.authorName,
      inLanguage: 'en-US'
    },
    {
      '@type': 'WebPage',
      '@id': `${canonicalUrl}#webpage`,
      url: canonicalUrl,
      name: APP_PAGE_CONTENT.seoTitle,
      description: APP_PAGE_CONTENT.metaDescription,
      inLanguage: 'en-US',
      isPartOf: { '@id': `${canonicalUrl}#website` },
      primaryImageOfPage: { '@id': `${canonicalUrl}#primaryimage` }
    },
    {
      '@type': 'ImageObject',
      '@id': `${canonicalUrl}#primaryimage`,
      url: ogImageUrl,
      contentUrl: ogImageUrl,
      caption: APP_PAGE_CONTENT.ogImageAlt
    },
    {
      '@type': 'Article',
      '@id': `${canonicalUrl}#article`,
      headline: APP_PAGE_CONTENT.seoTitle,
      description: APP_PAGE_CONTENT.metaDescription,
      image: { '@id': `${canonicalUrl}#primaryimage` },
      author: {
        '@type': 'Person',
        name: APP_PAGE_CONTENT.authorName,
        url: APP_PAGE_CONTENT.twitchUrl
      },
      publisher: {
        '@type': 'Person',
        name: APP_PAGE_CONTENT.authorName
      },
      datePublished: APP_PAGE_CONTENT.datePublished,
      dateModified: APP_PAGE_CONTENT.dateModified,
      mainEntityOfPage: { '@id': `${canonicalUrl}#webpage` },
      inLanguage: 'en-US',
      keywords: APP_PAGE_CONTENT.keywords
    },
    {
      '@type': 'FAQPage',
      '@id': `${canonicalUrl}#faq`,
      mainEntity: APP_PAGE_CONTENT.faqItems.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer
        }
      }))
    }
  ]
});
