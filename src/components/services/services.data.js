import { IoMdColorPalette } from "react-icons/io";
import { BsLayoutTextWindowReverse } from "react-icons/bs";
import { FaCode } from "react-icons/fa";
import { CiMobile1 } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { RiMegaphoneLine } from "react-icons/ri";

const servicesData = [
    {
        index: 0,
        icon: IoMdColorPalette,
        title: "Brand Identity Design",
        popular: true,
        description:
            "Create memorable brand experiences with strategic design that resonates with your target audience and sets you apart.",
        features: [
            "Logo & Visual Identity",
            "Brand Guidelines",
            "Marketing Materials",
        ],
        linkText: "Explore Service",
    },
    {
        index: 1,
        icon: BsLayoutTextWindowReverse,
        title: "UI/UX Design",
        description:
            "Design intuitive, user-centered interfaces that enhance engagement and deliver exceptional digital experiences.",
        features: [
            "User Research & Testing",
            "Wireframing & Prototyping",
            "Interaction Design",
        ],
        linkText: "Explore Service",
    },
    {
        index: 2,
        icon: FaCode,
        title: "Web Development",
        description:
            "Build fast, scalable, and secure web applications using cutting-edge technologies and best development practices.",
        features: [
            "Custom Web Applications",
            "Ecommerce Solutions",
            "API Integration",
        ],
        linkText: "Explore Service",
    },
    {
        index: 3,
        icon: CiMobile1,
        title: "Mobile App Design",
        description:
            "Craft engaging mobile experiences with native and cross-platform designs that users love to interact with daily.",
        features: [
            "iOS & Android Design",
            "Cross-platform Solutions",
            "App Store Optimization",
        ],
        linkText: "Explore Service",
    },
    {
        index: 4,
        icon: RiMegaphoneLine,
        title: "Digital Marketing",
        description:
            "Drive measurable results with data-driven marketing strategies that increase visibility and convert prospects into customers.",
        features: [
            "Social Media Marketing",
            "Content Strategy",
            "PPC Campaigns",
        ],
        linkText: "Explore Service",
    },
    {
        index: 5,
        icon: CiSearch,
        title: "SEO Optimization",
        description:
            "Improve search rankings and organic traffic with comprehensive SEO strategies tailored to your business goals.",
        features: ["Technical SEO Audit", "Keyword Research", "Link Building"],
        linkText: "Explore Service",
    },
];

export default servicesData;
