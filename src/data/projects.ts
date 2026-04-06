import workNoSignal from "@/assets/work-no-signal.jpg";
import work37Below from "@/assets/work-37-below.jpg";
import workAlanMakeup from "@/assets/work-alan-makeup.jpg";
import workConsecrated from "@/assets/work-the-consecrated.jpg";
import workOrionsTalk from "@/assets/work-orions-talk.jpg";

export interface Project {
  slug: string;
  title: string;
  type: string;
  tagline: string;
  description: string;
  details: {
    format: string;
    status: string;
    year: string;
    role: string;
  };
  sections: {
    title: string;
    content: string;
  }[];
  caseStudy?: {
    problem: string;
    idea: string;
    execution: string;
    result: string;
  };
  image: string;
}

export const projects: Project[] = [
  {
    slug: "no-signal",
    title: "No Signal",
    type: "Documentary",
    tagline: "สารคดีเอาชีวิตรอดในพื้นที่ไร้สัญญาณ",
    description: "A survival documentary exploring what happens when you strip away every modern convenience and step into the unknown. No phone, no GPS, no safety net — just instinct, endurance, and the will to keep going.",
    details: {
      format: "Documentary Film",
      status: "In Production",
      year: "2025",
      role: "Created, Directed & Produced by ØRIONS",
    },
    sections: [
      {
        title: "The Concept",
        content: "In a world where we're always connected, what happens when you take everything away? No Signal follows individuals as they navigate remote wilderness areas with zero technology, zero contact with the outside world. It's a test of survival, but more than that — it's a mirror that shows who you really are when there's nothing left to hide behind.",
      },
      {
        title: "The Approach",
        content: "We embedded our crew in some of the most remote locations in Southeast Asia, filming in conditions that tested our own limits. The result is raw, unfiltered footage that captures genuine human struggle and triumph. No scripts. No re-takes. Just reality.",
      },
      {
        title: "Why This Story",
        content: "Modern life has disconnected us from our instincts. No Signal is about reconnection — not with technology, but with ourselves. Every episode strips away another layer of comfort and forces both the participants and the audience to confront a simple question: what are you capable of?",
      },
    ],
    image: workNoSignal,
  },
  {
    slug: "37-below",
    title: "37° Below",
    type: "Documentary",
    tagline: "สารคดีเอาชีวิตรอดในพื้นที่ติดลบสุดขั้ว",
    description: "An extreme survival documentary that pushes human limits in the most unforgiving frozen environments on Earth. When the temperature drops below -37°C, every decision becomes a matter of life and death.",
    details: {
      format: "Documentary Film",
      status: "In Production",
      year: "2025",
      role: "Created, Directed & Produced by ØRIONS",
    },
    sections: [
      {
        title: "The Concept",
        content: "37° Below takes viewers into environments where the cold itself is the adversary. From frozen tundras to ice-covered mountain passes, this documentary follows people who choose to confront nature at its most extreme — and the physical and psychological toll it takes.",
      },
      {
        title: "The Approach",
        content: "Filming in extreme cold requires specialized equipment and extraordinary crew resilience. We used custom-built camera rigs and heating systems to capture footage in conditions where most equipment fails. The cinematography emphasizes the vast, isolating beauty of frozen landscapes.",
      },
      {
        title: "Why This Story",
        content: "In comfort, we forget what the human body and mind are capable of. 37° Below is a reminder that our limits are further than we think — and that the greatest discoveries happen at the edge of what we can endure.",
      },
    ],
    image: work37Below,
  },
  {
    slug: "alan-makeup",
    title: "Alan Makeup",
    type: "Documentary Series",
    tagline: "สารคดีเกี่ยวกับการแต่งหน้าและอัตลักษณ์",
    description: "A documentary series that goes beyond brushes and palettes to explore the deeper story of identity, transformation, and self-expression through the art of makeup.",
    details: {
      format: "Documentary Series",
      status: "Released",
      year: "2024",
      role: "Created, Directed & Produced by ØRIONS",
    },
    sections: [
      {
        title: "The Concept",
        content: "Makeup is more than cosmetics — it's armor, it's identity, it's art. Alan Makeup follows a makeup artist whose work transcends beauty standards and enters the realm of personal transformation. Each episode explores a different face, a different story, a different reason someone sits in that chair.",
      },
      {
        title: "The Approach",
        content: "We filmed with intimate, close-up cinematography that captures every brushstroke and every emotion. The lighting was designed to mirror the transformation happening on screen — starting raw and natural, gradually becoming more dramatic as each look takes shape.",
      },
      {
        title: "Why This Story",
        content: "In a world that often judges appearances, Alan Makeup celebrates the power of choosing how you present yourself to the world. It's about agency, creativity, and the courage to be exactly who you want to be.",
      },
    ],
    caseStudy: {
      problem: "A talented makeup artist with a growing following had no content that showed what made their work different — just before-and-after photos like everyone else.",
      idea: "Instead of a beauty show, we made it a documentary about identity. Each episode follows one person and the reason they sit in the chair — not just what they look like after.",
      execution: "Shot with intimate, close-up cinematography. Natural lighting that shifts as the transformation progresses. No scripts — real conversations captured in real time across 6 episodes.",
      result: "The series was released and became ØRIONS' first completed original production. It established a documentary format that the team now applies to other projects — story-first, visually cinematic, emotionally honest.",
    },
    image: workAlanMakeup,
  },
  {
    slug: "the-consecrated",
    title: "The Consecrated",
    type: "Documentary",
    tagline: "สารคดีสำรวจความเชื่อ พิธีกรรม และสิ่งลี้ลับ",
    description: "A documentary that ventures into the world of belief, ritual, and the supernatural forces that continue to shape how people live, think, and make decisions in modern Thailand.",
    details: {
      format: "Documentary Film",
      status: "In Production",
      year: "2025",
      role: "Created, Directed & Produced by ØRIONS",
    },
    sections: [
      {
        title: "The Concept",
        content: "Thailand is a country where the modern and the mystical coexist. The Consecrated explores sacred rituals, spiritual beliefs, and the unseen forces that millions of people still live with every day. From temple ceremonies to personal talismans, this film documents a world that exists alongside — and often within — contemporary life.",
      },
      {
        title: "The Approach",
        content: "We approached each subject with deep respect and cultural sensitivity. The film uses natural and candlelight lighting to create an atmosphere that honors the gravity of these practices. Long takes and observational filmmaking allow viewers to sit with each moment.",
      },
      {
        title: "Why This Story",
        content: "Belief is one of the most powerful forces in human life. The Consecrated doesn't ask whether these forces are real — it shows what they mean to the people who believe in them, and how that belief shapes every aspect of their existence.",
      },
    ],
    image: workConsecrated,
  },
  {
    slug: "orions-talk",
    title: "ØRIONS Talk",
    type: "Podcast",
    tagline: "Podcast เชิงสารคดี เล่าเรื่องราวของบุคคลที่น่าสนใจ",
    description: "A documentary-style podcast that tells the stories, histories, and philosophies of fascinating people — from artists and entrepreneurs to everyday individuals with extraordinary stories.",
    details: {
      format: "Podcast Series",
      status: "Ongoing",
      year: "2024–Present",
      role: "Created & Produced by ØRIONS",
    },
    sections: [
      {
        title: "The Concept",
        content: "ØRIONS Talk is a long-form podcast that applies documentary storytelling principles to audio. Each episode is a deep dive into a single person's life — not just what they do, but why they do it, what shaped them, and what drives them forward.",
      },
      {
        title: "The Approach",
        content: "We treat every episode like a mini-documentary. Pre-production research, thoughtful interview frameworks, and cinematic sound design create an immersive listening experience that goes far beyond a typical conversation podcast.",
      },
      {
        title: "Why This Format",
        content: "Some stories need time. ØRIONS Talk gives space for depth, nuance, and honesty — the kind of storytelling that gets lost in short-form content. It's our way of extending the documentary approach into a format people can carry with them.",
      },
    ],
    image: workOrionsTalk,
  },
];
