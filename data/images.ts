import type { StaticImageData } from "next/image";

import appleBlocks from "@/public/images/apple-blocks.jpg";
import artsSupplies from "@/public/images/arts-supplies.jpg";
import backpacksWalking from "@/public/images/backpacks-walking.jpg";
import boyWriting from "@/public/images/boy-writing.jpg";
import classroomBack from "@/public/images/classroom-back.jpg";
import classroomRug from "@/public/images/classroom-rug.jpg";
import collaboration from "@/public/images/collaboration.jpg";
import educatorsTeam from "@/public/images/educators-team.jpg";
import elementaryReading from "@/public/images/elementary-reading.jpg";
import engineeringPlans from "@/public/images/engineering-plans.jpg";
import heroClassroom from "@/public/images/hero-classroom.jpg";
import joyfulGroup from "@/public/images/joyful-group.jpg";
import joyfulStudent from "@/public/images/joyful-student.jpg";
import outdoorPlay from "@/public/images/outdoor-play.jpg";
import piano from "@/public/images/piano.jpg";
import readingTogether from "@/public/images/reading-together.jpg";
import lettersPlaydough from "@/public/images/letters-playdough.jpg";
import libraryStacks from "@/public/images/library-stacks.jpg";
import libraryWindows from "@/public/images/library-windows.jpg";
import loveToLearn from "@/public/images/love-to-learn.jpg";
import middleSchoolClass from "@/public/images/middle-school-class.jpg";
import middleSchoolWriting from "@/public/images/middle-school-writing.jpg";
import musicRoom from "@/public/images/music-room.jpg";
import paintBrushes from "@/public/images/paint-brushes.jpg";
import paintedSmile from "@/public/images/painted-smile.jpg";
import parachute from "@/public/images/parachute.jpg";
import scienceModel from "@/public/images/science-model.jpg";
import soccer from "@/public/images/soccer.jpg";
import stemCoding from "@/public/images/stem-coding.jpg";
import studentSmiling from "@/public/images/student-smiling.jpg";
import teacherRaisedHands from "@/public/images/teacher-raised-hands.jpg";
import tugOfWar from "@/public/images/tug-of-war.jpg";

export type SiteImage = { src: StaticImageData; alt: string };

/**
 * Central photo library. Photography sourced from Unsplash (unsplash.com/license)
 * and stored locally for performance. Each photo is used in a single primary
 * placement to avoid visible repetition across the site.
 */
export const images = {
  hero: {
    src: heroClassroom,
    alt: "Elementary students focused on drawing and reading activities around a shared classroom table",
  },
  teacherRaisedHands: {
    src: teacherRaisedHands,
    alt: "A teacher at the front of a bright classroom as students eagerly raise their hands",
  },
  elementaryReading: {
    src: elementaryReading,
    alt: "Two young students reading and writing together at a yellow classroom table",
  },
  middleSchoolWriting: {
    src: middleSchoolWriting,
    alt: "Middle school students concentrating while writing at their desks",
  },
  stemCoding: {
    src: stemCoding,
    alt: "A student programming small robots using a block-based coding app on a tablet",
  },
  artsSupplies: {
    src: artsSupplies,
    alt: "A young artist's hands working among markers, paints, and painted stones",
  },
  classroomRug: {
    src: classroomRug,
    alt: "Students gathered on a classroom rug raising their hands during a lesson",
  },
  middleSchoolClass: {
    src: middleSchoolClass,
    alt: "A teacher leading a discussion with middle school students seated at group tables",
  },
  studentSmiling: {
    src: studentSmiling,
    alt: "A smiling student seated at his desk with a notebook",
  },
  collaboration: {
    src: collaboration,
    alt: "Elementary students working together on a colorful group project",
  },
  engineeringPlans: {
    src: engineeringPlans,
    alt: "A student sketching engineering designs at a worktable surrounded by tools",
  },
  paintedSmile: {
    src: paintedSmile,
    alt: "A joyful young student with paint on her cheeks after an art activity",
  },
  soccer: {
    src: soccer,
    alt: "A coach huddled with young students in soccer uniforms on a field",
  },
  parachute: {
    src: parachute,
    alt: "Children lifting a rainbow parachute together outdoors on a sunny day",
  },
  backpacksWalking: {
    src: backpacksWalking,
    alt: "Young students wearing colorful backpacks and sun hats walking together",
  },
  boyWriting: {
    src: boyWriting,
    alt: "A young student carefully writing in a workbook",
  },
  libraryWindows: {
    src: libraryWindows,
    alt: "A light-filled library with tall windows, bookshelves, and reading tables",
  },
  tugOfWar: {
    src: tugOfWar,
    alt: "Students pulling together in an outdoor tug-of-war on a grassy hill",
  },
  appleBlocks: {
    src: appleBlocks,
    alt: "An apple on a stack of books beside ABC blocks and colored pencils",
  },
  lettersPlaydough: {
    src: lettersPlaydough,
    alt: "Wooden alphabet letters and modeling clay set out in a kindergarten classroom",
  },
  scienceModel: {
    src: scienceModel,
    alt: "A detailed anatomical model of the human heart used for science lessons",
  },
  musicRoom: {
    src: musicRoom,
    alt: "A music room with acoustic guitars, an electric guitar, and a keyboard",
  },
  classroomBack: {
    src: classroomBack,
    alt: "A student viewed from behind listening to a teacher at the whiteboard",
  },
  educatorsTeam: {
    src: educatorsTeam,
    alt: "A group of educators collaborating and celebrating around a laptop",
  },
  loveToLearn: {
    src: loveToLearn,
    alt: "A pencil-shaped sign reading 'Love to Learn' outside a school",
  },
  paintBrushes: {
    src: paintBrushes,
    alt: "Well-used paintbrushes with bright paint on an art table",
  },
  libraryStacks: {
    src: libraryStacks,
    alt: "Long rows of library bookshelves filled with books",
  },
  outdoorPlay: {
    src: outdoorPlay,
    alt: "Children running and jumping to catch a ball in a sunny, tree-lined field",
  },
  readingTogether: {
    src: readingTogether,
    alt: "A group of students sitting together on the floor reading books and drawing",
  },
  piano: {
    src: piano,
    alt: "An open music book resting on a piano above the keys",
  },
  joyfulGroup: {
    src: joyfulGroup,
    alt: "A group of smiling children crowding together toward the camera",
  },
  joyfulStudent: {
    src: joyfulStudent,
    alt: "A joyful student in sunglasses posing with arms outstretched against a blue wall",
  },
} satisfies Record<string, SiteImage>;
