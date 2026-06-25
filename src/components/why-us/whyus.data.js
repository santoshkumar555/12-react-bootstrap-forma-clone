import { BsFillLightningFill } from "react-icons/bs";
import { BsGraphUpArrow } from "react-icons/bs";
import { IoShieldCheckmarkOutline } from "react-icons/io5";

const CardData = [
    {
        title: "fast turnaround",
        description:
            "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor.",
        linkText: "learn more",
        icon: BsFillLightningFill,
        active: false,
    },
    {
        title: "data-driven strategy",
        description:
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam.",
        linkText: "learn more",
        icon: BsGraphUpArrow,
        active: true,
    },
    {
        title: "proven expertise",
        description:
            "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni.",
        linkText: "learn more",
        icon: IoShieldCheckmarkOutline,
        active: false,
    },
];

const LongCardData = [
    {
        number: "01",
        title: "Discovery",
        description: "Understanding your goals",
    },
    {
        number: "02",
        title: "Strategy",
        description: "Planning the approach",
    },
    {
        number: "03",
        title: "Execution",
        description: "Bringing ideas to life",
    },
    {
        number: "04",
        title: "Optimization",
        description: "Continuous improvement",
    },
];

const data = [
    {
        title: "Strategic Planning & Consulting",
        description:
            "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates.",
    },
    {
        title: "Custom Development Solutions",
        description:
            "Nam libero tempore cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime.",
    },
    {
        title: "Ongoing Support & Optimization",
        description:
            "taque earum rerum hic tenetur a sapiente delectus ut aut reiciendis voluptatibus maiores alias.",
    },
];

export { CardData, LongCardData, data };
