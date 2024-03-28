import { FaYoutube } from "react-icons/fa";

import {
  facebook,
  instagram,
  tiktok,
  youtube,
  goal1,
  goal2,
  goal3,
  goalpc1,
  goalpc2,
  goalpc3,
  emailPc,
  socialPc,
  instapic,
  facebookpic,
  tiktokpic,
  youtubepic,
  phonePc,
  cTikDark,
  cTikLight,
  cFaceDark,
  cFaceLight,
  cInstDark,
  cInstLight,
  cYouDark,
  cYouLight,
} from "../assets";

export const navLinks = [
  { href: "/#hero", label: "التسجيل" },
  { href: "/#AboutUs", label: "معلومات عنا" },
  { href: "/#goalPhone", label: "هدفنا" },
  { href: "/#how", label: "كيف تشارك ؟" },
];

export const footerLinks = [
  { href: "/#hero", label: "التسجيل" },
  { href: "/#AboutUs", label: "معلومات عنا" },
  { href: "/#goalPhone", label: "هدفنا" },
  { href: "/contact", label: "التواصل معنا" },
  { href: "/contact", label: "ارسال رسالة" },
];
export const footerLinks2 = [
  {
    href: "#hero",
    label: "التسجيل",
  },
  { href: "/#why", label: " لماذا نصرة؟" },
  { href: "/#how", label: "كيف تشارك" },
  { href: "/#where", label: "أين تجدنا؟" },
  { href: "/#contact-us", label: "  " },
];

export const socialMedia = [
  {
    iconLight: cInstLight,
    iconDark: cInstDark,
    icon: instagram,
    link: "https://www.instagram.com/nosra.palestine/",
    text: "إنستغرام",
    image: instapic,
  },
  {
    iconLight: cFaceLight,
    iconDark: cFaceDark,
    icon: facebook,
    link: "https://www.facebook.com/profile.php?id=61557265543220",
    text: "فيسبوك",
    image: facebookpic,
  },
  {
    iconLight: cTikLight,
    iconDark: cTikDark,
    icon: tiktok,
    link: "https://www.tiktok.com/@nosrapalestine",
    text: "تيكتوك",
    image: tiktokpic,
  },
  {
    iconLight: cYouLight,
    iconDark: cYouDark,
    icon: youtube,
    link: "https://www.youtube.com/channel/UC0XhyXC-D1_P3N0DRJh2eoA",
    text: "يوتيوب",
    image: youtubepic,
  },
];
export const carousel = [
  {
    image: goal1,
    title: "المشاركة في المشاريع",
    text: "أيا كان تخصصك, يمكنك الدخول و التسجيل و العمل على المشاريع المتاحة, ستجد دائما المهمة الخاصة بك موجودة للمساهمة",
  },
  {
    image: goal2,
    title: "إنشاء مشروعك الخاص",
    text: "يمكنك طرح فكرتك حيث ان تم الموافقة عليها يمكنك تكوين فريق من مختلف المجالات التي تحتاجها لتحقيق فكرتك",
  },
  {
    image: goal3,
    title: "المساهمة بطريقة اخرى",
    text: "سواء بالدعم المالي , اللوجيستي , شبكة العلاقات والمعارف , الشهرة , شراكات مع المجتمع , … الخ",
  },
];
export const carouselpc = [
  {
    image: goalpc3,
    title: "المساهمة بطريقة اخرى",
    text: "سواء بالدعم المالي , اللوجيستي , شبكة العلاقات والمعارف , الشهرة , شراكات مع المجتمع , … الخ",
  },
  {
    image: goalpc2,
    title: "إنشاء مشروعك الخاص",
    text: "يمكنك طرح فكرتك حيث ان تم الموافقة عليها يمكنك تكوين فريق من مختلف المجالات التي تحتاجها لتحقيق فكرتك",
  },
  {
    image: goalpc1,
    title: "المشاركة في المشاريع",
    text: "أيا كان تخصصك, يمكنك الدخول و التسجيل و العمل على المشاريع المتاحة, ستجد دائما المهمة الخاصة بك موجودة للمساهمة",
  },
];
export const contactInfo = [
  {
    img: phonePc,
    info: "07 80 50 28 44  /  07 94 51 59 34",
    title: "الهاتف",
  },
  {
    img: emailPc,
    info: "contact@nosra.online",
    title: "الإيمايل",
  },
  {
    img: socialPc,
    social: socialMedia,
    title: "مواقع التواصل",
  },
];
