import Default from "./demos/default.vue?raw";
import WithSecondaryButton from "./demos/withSecondaryButton.vue?raw";
import WithSecondaryButtonCustom from "./demos/withSecondaryButtonCustom.vue?raw";
import EntryHero from "./demos/entryHero.vue?raw";
import EntryHeroCustom from "./demos/entryHeroCustom.vue?raw";
import EntryWithoutImage from "./demos/entryWithoutImage.vue?raw";
import EntryWithoutImageCustom from "./demos/entryWithoutImageCustom.vue?raw";
import WithSlots from "./demos/withSlots.vue?raw";
import RightImage from "./demos/rightImage.vue?raw";

export const demos = [
  {
    id: 1,
    title: "TODOvue main hero",
    description: "Main hero for TODOvue blog.",
    propsData: {
      configHero: {
        title: "TODOvue Blog",
        description:
          "Introducing my Vue.js blog! Get ready to dive into the world of Vue.js and discover how this powerful JavaScript framework can help you build beautiful and dynamic user interfaces for your web applications.",
        button: "View all blogs",
        image: "https://res.cloudinary.com/dcdfhi8qz/image/upload/v1763663056/uqqtkgp1lg3xdplutpga.png",
        alt: "TODOvue Logo",
      },
    },
    html: Default,
  },
  {
    id: 2,
    title: "TODOvue main hero with secondary button",
    description: "Main hero for TODOvue blog with secondary button.",
    propsData: {
      configHero: {
        title: "TODOvue Blog",
        description:
          "Introducing my Vue.js blog! Get ready to dive into the world of Vue.js and discover how this powerful JavaScript framework can help you build beautiful and dynamic user interfaces for your web applications.",
        button: "View all blogs",
        buttonSecondary: "View last blog",
        image: "https://res.cloudinary.com/dcdfhi8qz/image/upload/v1763663056/uqqtkgp1lg3xdplutpga.png",
        alt: "TODOvue Logo",
      },
    },
    html: WithSecondaryButton,
  },
  {
    id: 3,
    title: "TODOvue main hero with custom colors",
    description: "Main hero for TODOvue blog with secondary button and custom colors.",
    propsData: {
      configHero: {
        title: "TODOvue Blog",
        description:
          "Introducing my Vue.js blog! Get ready to dive into the world of Vue.js and discover how this powerful JavaScript framework can help you build beautiful and dynamic user interfaces for your web applications.",
        button: "View all blogs",
        buttonSecondary: "View last blog",
        image: "https://res.cloudinary.com/dcdfhi8qz/image/upload/v1763663056/uqqtkgp1lg3xdplutpga.png",
        alt: "TODOvue Logo",
      },
      customHero: {
        bgBody: "#1e1d23",
        colorBody: "#e1e2dc",
        bgButton: "#8673a1",
        buttonText: "#e1e2dc",
        bgButtonSecondary: "#79308d",
        buttonSecondaryText: "#e1e2dc",
      },
    },
    html: WithSecondaryButtonCustom,
  },
  {
    id: 4,
    title: "TODOvue entry hero",
    description: "Entry hero for TODOvue blog.",
    propsData: {
      configHero: {
        title: "What is Vue.js?",
        description:
          "Vue.js is a progressive JavaScript framework for building user interfaces. It is designed from the ground up to be incrementally adoptable, and can easily scale between a library and a full-featured framework. It is also one of the most popular JavaScript frameworks, with over 1 million GitHub stars and 100,000+ contributors.",
        image: "https://res.cloudinary.com/dcdfhi8qz/image/upload/v1763701508/jarnmxxvmhbisvpzzfwu.webp",
        alt: "What is Vue.js?",
      },
      isEntry: true,
    },
    html: EntryHero,
  },
  {
    id: 5,
    title: "TODOvue entry hero with custom colors",
    description: "Entry hero for TODOvue blog with custom colors.",
    propsData: {
      configHero: {
        title: "What is Vue.js?",
        description:
          "Vue.js is a progressive JavaScript framework for building user interfaces. It is designed from the ground up to be incrementally adoptable, and can easily scale between a library and a full-featured framework. It is also one of the most popular JavaScript frameworks, with over 1 million GitHub stars and 100,000+ contributors.",
        image: "https://res.cloudinary.com/dcdfhi8qz/image/upload/v1763701538/kua2i5ayhbne1dmmexfd.webp",
        alt: "What is Vue.js?",
      },
      isEntry: true,
      customHero: {
        bgBody: "#202020",
        colorBody: "#ffffff",
      },
    },
    html: EntryHeroCustom,
  },
  {
    id: 6,
    title: "TODOvue entry without image hero",
    description: "Entry hero for TODOvue blog without image.",
    propsData: {
      configHero: {
        title: "What is Vue.js?",
        description:
          "Vue.js is a progressive JavaScript framework for building user interfaces. It is designed from the ground up to be incrementally adoptable, and can easily scale between a library and a full-featured framework. It is also one of the most popular JavaScript frameworks, with over 1 million GitHub stars and 100,000+ contributors.",
      },
      isEntry: true,
    },
    html: EntryWithoutImage,
  },
  {
    id: 7,
    title: "TODOvue entry without image hero with custom colors",
    description: "Entry hero for TODOvue blog without image and with custom colors.",
    propsData: {
      configHero: {
        title: "What is Vue.js?",
        description:
          "Vue.js is a progressive JavaScript framework for building user interfaces. It is designed from the ground up to be incrementally adoptable, and can easily scale between a library and a full-featured framework. It is also one of the most popular JavaScript frameworks, with over 1 million GitHub stars and 100,000+ contributors.",
      },
      isEntry: true,
      customHero: {
        bgBody: "#202020",
        colorBody: "#ffffff",
      },
    },
    html: EntryWithoutImageCustom,
  },
  {
    id: 8,
    title: "TODOvue hero with Slots",
    description: "Hero showing the power of Slots for full customization.",
    propsData: {
      configHero: {
        title: "Original Title",
        description: "Original Description",
        image: "https://res.cloudinary.com/dcdfhi8qz/image/upload/v1763663056/uqqtkgp1lg3xdplutpga.png",
        alt: "TODOvue Logo",
      },
    },
    html: WithSlots,
  },
  {
    id: 9,
    title: "TODOvue hero with right image",
    description: "Hero showing the image on the right side.",
    propsData: {
      configHero: {
        title: "Right Aligned Image",
        description:
          "This hero has the image positioned on the right side using the new imagePosition prop.",
        button: "Action",
        image: "https://res.cloudinary.com/dcdfhi8qz/image/upload/v1763663056/uqqtkgp1lg3xdplutpga.png",
        alt: "TODOvue Logo",
      },
      imagePosition: "right",
    },
    html: RightImage,
  },
];
