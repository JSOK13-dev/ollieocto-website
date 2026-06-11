import {
  Award,
  BookOpen,
  Brain,
  FileText,
  HeartHandshake,
  Map,
  Palette,
  ShieldCheck,
  Sparkles,
  Star,
  Users
} from "lucide-react";

export const amazonBookUrl =
  "https://www.amazon.com/Ollie-Octopus-Great-Bubble-Chase/dp/B0GZCRKG4P";

export const siteBuildVersion = "2026-06-11-ollie-launch";

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/about-ollie", label: "About Ollie" },
  { href: "/characters", label: "Meet Ollie" },
  { href: "/sparkle-bay", label: "Sparkle Bay" },
  { href: amazonBookUrl, label: "Buy the Book" },
  { href: "/activity-pack", label: "Free Pack" },
  { href: "/resources", label: "Resources" },
  { href: "/youtube", label: "YouTube" },
  { href: "/merch-waitlist", label: "Merch" },
  { href: "/faq", label: "FAQ" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" }
];

export const primaryNavItems = [
  { href: "/#book", label: "Book" },
  { href: "/characters", label: "Meet Ollie" },
  { href: "/activity-pack", label: "Free Pack" },
  { href: "/about-ollie", label: "About" },
  { href: amazonBookUrl, label: "Buy Book" }
];

export const artwork = {
  cover: "/artwork/cover.jpg",
  sparkleBayOpening: "/artwork/sparkle-bay-opening.jpg",
  rainbowBubble: "/artwork/rainbow-bubble.jpg",
  rainbowBubbleCutout: "/artwork/rainbow-bubble-cutout.png",
  coralChase: "/artwork/coral-chase.jpg",
  kelpForest: "/artwork/kelp-forest.jpg",
  ollieHelps: "/artwork/ollie-helps.jpg",
  ollieCutout: "/artwork/ollie-cutout.png",
  stellaCutout: "/artwork/stella-cutout.png",
  finnCutout: "/artwork/finn-cutout.png",
  zippyCutout: "/artwork/zippy-cutout.png",
  coralCrabCutout: "/artwork/grumpy-gus-cutout.png",
  grumpyGusCutout: "/artwork/grumpy-gus-lobster.jpg",
  kekeCutout: "/artwork/keke-cutout.png",
  friendsFree: "/artwork/friends-free.jpg"
};

export const videoAssets = {
  firstShort: "/videos/ollie-first-short.mp4"
};

export const bookBenefits = [
  {
    icon: HeartHandshake,
    title: "Friends help friends",
    text: "Ollie's gentle rescue shows little readers how teamwork can untangle a tricky moment."
  },
  {
    icon: Users,
    title: "Made for read-aloud time",
    text: "Short, bright story moments are easy for preschoolers to follow and ask for again."
  },
  {
    icon: BookOpen,
    title: "Wonder on every page",
    text: "A bright bubble turns an ordinary day into a magical ocean chase."
  },
  {
    icon: Sparkles,
    title: "A kind ocean adventure",
    text: "Sparkle Bay invites curiosity, courage, and warm conversations after storytime."
  }
];

export const bookOneCharacters = [
  {
    name: "Ollie the Octopus",
    role: "Main Character",
    image: artwork.ollieCutout,
    trait: "Curious, kind, adventurous",
    superpower: "Eight arms that help solve problems",
    catchphrase: "Let's see where the adventure takes us!",
    text: "The heart of Sparkle Bay, Ollie is always ready to discover something new and help along the way."
  },
];

export const futureCharacters = [
  {
    name: "Stella Starfish",
    role: "Best Friend",
    image: artwork.stellaCutout,
    trait: "Optimistic and encouraging",
    superpower: "Always sees the bright side",
    catchphrase: "There's always a way to shine!",
    text: "Stella brings sparkle, cheer, and a bright point of view to every ocean adventure."
  },
  {
    name: "Finn the Pufferfish",
    role: "Courage Character",
    image: artwork.finnCutout,
    trait: "Nervous but brave",
    superpower: "Faces fears even when scared",
    catchphrase: "I can do hard things!",
    text: "Finn reminds young readers that being brave can start with one small try."
  },
  {
    name: "Zippy the Seahorse",
    role: "Explorer & Messenger",
    image: artwork.zippyCutout,
    trait: "Fast, energetic, excited",
    superpower: "Speed and quick thinking",
    catchphrase: "Last one there is a jellyfish!",
    text: "Zippy zips through Sparkle Bay with big energy and quick ideas."
  },
  {
    name: "Coral the Crab",
    role: "Sparkle Bay Friend",
    image: artwork.coralCrabCutout,
    trait: "Cheerful, playful, energetic",
    superpower: "Brings a bright smile to every adventure",
    catchphrase: "Let's make a splash!",
    text: "Coral scuttles into Sparkle Bay with big energy, a bright smile, and plenty of playful ocean fun."
  },
  {
    name: "Grumpy Gus the Lobster",
    role: "Comic Relief",
    image: artwork.grumpyGusCutout,
    trait: "Complains at first but has a big heart",
    superpower: "Always shows up when friends need help",
    catchphrase: "I don't like adventures... but I'll help anyway.",
    text: "Gus may grumble, but his caring heart always finds its way to the surface."
  },
  {
    name: "Keke the Endangered Elkhorn Coral",
    role: "Environmental Hero",
    image: artwork.kekeCutout,
    trait: "Caring, protective",
    superpower: "Teaches ocean conservation naturally",
    catchphrase: "Every reef needs a friend.",
    text: "Keke helps children see how caring for the reef can feel natural and kind."
  }
];

export const characters = [...bookOneCharacters, ...futureCharacters];

export const brandMessage = {
  setting: "Sparkle Bay",
  core: "Kind Hearts. Big Adventures.",
  tagline: "Every adventure begins with a bubble.",
  leadMagnet: "Free Ollie Ocean Adventure Activity Pack"
};

export const bookInfo = {
  title: "Ollie the Octopus and the Great Bubble Chase",
  author: "Joshua Sokolow",
  pages: 24,
  copyrightYear: 2026,
  description:
    "Meet Ollie, a curious little octopus who follows a mysterious bubble through an unforgettable ocean adventure about friendship, curiosity, and courage.",
  themes: [
    "Friendship",
    "Teamwork",
    "Helping friends",
    "Curiosity",
    "Ocean adventure"
  ]
};

export const testimonials = [
  {
    quote: "Coming Soon: Reviews from parents, teachers, and early readers.",
    name: "Reviews coming soon"
  }
];

export const resourceCards = [
  {
    icon: Star,
    title: "Printable Coloring Pages",
    text: "Color Ollie, ocean scenes, bubbles, coral, and cheerful Sparkle Bay moments."
  },
  {
    icon: ShieldCheck,
    title: "Kindness Activity Sheets",
    text: "Simple prompts about helping, trying again, and noticing when friends need care."
  },
  {
    icon: FileText,
    title: "Read-Aloud Questions",
    text: "Gentle pause points for parents, teachers, libraries, and preschool storytime."
  },
  {
    icon: Brain,
    title: "Ocean Facts Sheets",
    text: "Preschool-friendly notes about octopuses, ocean habitats, coral, bubbles, and kelp."
  }
];

export const activityPackItems = [
  "Ollie coloring page",
  "Bubble coloring page",
  "Ocean maze",
  "Kindness certificate"
];

export const sparkleBayLocations = [
  {
    name: "Sparkle Bay",
    image: artwork.sparkleBayOpening,
    text: "The sunny underwater world where Ollie wakes up and the Great Bubble Chase begins."
  },
  {
    name: "Coral Areas",
    image: artwork.coralChase,
    text: "Bright coral fills the chase with color as Ollie and his friends follow the shiny bubble."
  },
  {
    name: "Kelp Forest",
    image: artwork.kelpForest,
    text: "The tall green kelp creates the story's tricky moment before Ollie helps everyone get free."
  }
];

export const futureAdventureIdeas = [
  "More Sparkle Bay friends",
  "New bubbly surprises",
  "Gentle ocean discoveries",
  "More kindness adventures"
];

export const merchWaitlistItems = [
  {
    title: "Ollie Plush Toy",
    text: "A soft Ollie friend for bedtime reading and cozy storytime."
  },
  {
    title: "Sparkle Bay Sticker Pack",
    text: "Ollie, bubbles, coral, and cheerful ocean friends."
  },
  {
    title: "Ollie Activity Book",
    text: "Coloring pages, mazes, certificates, and story-inspired activities."
  }
];

export const youtubePlaylists = [
  "Story Time with Ollie",
  "Sparkle Bay Shorts",
  "Ocean Facts",
  "Kindness Adventures",
  "Sparkle Bay Stories"
];

export const latestVideos = [
  "Meet Ollie the Octopus",
  "The Great Bubble Chase",
  "What is Sparkle Bay?"
];

export const faqItems = [
  {
    question: "What age is Ollie the Octopus for?",
    answer:
      "Ollie is designed for ages 3-5, with a gentle story that works for bedtime, preschool classrooms, libraries, and family read-aloud time."
  },
  {
    question: "What is Sparkle Bay?",
    answer:
      "Sparkle Bay is Ollie's bright underwater home, filled with colorful sea friends, gentle adventures, and ocean curiosity."
  },
  {
    question: "Who appears in the first book?",
    answer:
      "Ollie the Octopus leads the first book, with more Sparkle Bay friends appearing as the world grows."
  },
  {
    question: "What does the story teach?",
    answer:
      "The story gently shows friendship, teamwork, curiosity, and helping friends when they get into a tricky spot."
  },
  {
    question: "Can teachers use the free resources?",
    answer:
      "Yes. The activity pack and parent resources are intended for homes, preschool classrooms, libraries, and storytime programs."
  }
];

export const blogPosts = [
  {
    slug: "benefits-of-read-aloud-time",
    title: "Benefits of Read-Aloud Time",
    excerpt:
      "How a few cozy minutes of shared reading can support language, connection, attention, and emotional growth.",
    category: "Reading"
  },
  {
    slug: "ocean-animals-kids-love",
    title: "Ocean Animals Kids Love",
    excerpt:
      "A preschool-friendly guide to octopuses, ocean habitats, coral, bubbles, and kelp forests.",
    category: "Ocean Learning"
  },
  {
    slug: "teaching-kindness-through-stories",
    title: "Teaching Kindness Through Stories",
    excerpt:
      "Why picture books help children practice empathy, sharing, repair, and friendship language.",
    category: "Kindness"
  },
  {
    slug: "preschool-social-emotional-learning-activities",
    title: "Preschool Social Emotional Learning Activities",
    excerpt:
      "Simple activities for friendship, helping, teamwork, and naming big feelings after storytime.",
    category: "SEL"
  }
];

export const shortsIdeas = [
  "A bubbly surprise appears",
  "Meet Ollie and his eight helping arms",
  "Ollie notices something bright",
  "Ollie tries one brave thing",
  "The Great Bubble Chase begins",
  "Can you spot the bright bubble?",
  "A swim through coral",
  "Uh-oh, the Kelp Forest!",
  "Ollie helps his friends get free",
  "Friends help friends in Sparkle Bay",
  "Count Ollie's eight arms",
  "What color is the bubble?",
  "A tiny kindness challenge",
  "Guess the sea animal",
  "Bedtime bubble breath",
  "Ollie's favorite helping moment",
  "Ollie's kind choice",
  "Ollie says: I can do hard things",
  "A coral color hunt",
  "Kelp Forest peekaboo",
  "A bright bubble floats by",
  "Ollie says: Let's catch it!",
  "A gentle ocean fact",
  "Storytime in Sparkle Bay",
  "The friends are free",
  "With friends by your side",
  "Draw a bright bubble",
  "Ollie's book is here",
  "Free activity pack preview",
  "More Sparkle Bay fun"
];

export const longFormIdeas = [
  "Meet Ollie the Octopus",
  "The Great Bubble Chase storytime preview",
  "Meet Ollie's Ocean World",
  "What is Sparkle Bay?",
  "Draw and color a bright bubble",
  "Ollie's Kelp Forest kindness lesson",
  "Ocean animals from the book",
  "Bedtime in Sparkle Bay",
  "Free activity pack walkthrough",
  "More Sparkle Bay fun for families"
];

export const authorInfo = {
  name: "Joshua Sokolow",
  text:
    "Born and raised in South Florida, Joshua Sokolow spent countless hours exploring the ocean, fishing, boating, and walking the beach. His lifelong love of marine life, conservation, and the natural beauty of the sea inspired Ollie the Octopus and the Great Bubble Chase.",
  details:
    "A lifelong artist, serial entrepreneur, and former tax attorney with a Master of Science in Accounting, Joshua has always loved turning ideas into reality. Through Ollie and Sparkle Bay, he brings together creativity, storytelling, and ocean conservation to inspire curiosity, kindness, friendship, and love for the underwater world.",
  closing:
    "Joshua lives in South Florida with his wife and their two dogs. He hopes Ollie's adventures encourage young readers to explore, imagine, and discover that every great adventure begins with a little curiosity and a little kindness.",
  icon: Award
};
