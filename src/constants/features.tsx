import React from "react";

interface Feature {
    title: string
    description: string
    icon: React.ComponentType<{ className?: string }>
}

export const features: Feature[] = [
    {
        title: "Enterprise-Ready Solutions",
        description: "From rapid prototypes to production-grade systems across fintech, healthtech, edtech, and more.",
        icon: function Icon(props) {
            return (
                <svg
                    {...props}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
                </svg>
            )
        },
    },
    {
        title: "Deep Tech & Applied R&D",
        description: "Explore advanced work in machine learning, generative AI, decentralized identity, secure infrastructure, and intelligent automation.",
        icon: function Icon(props) {
            return (
                <svg
                    {...props}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                    <polyline points="14 2 14 8 20 8"/>
                </svg>
            )
        },
    },
    {
        title: "Builder-Led Innovation",
        description: "Engage with the engineers, designers, researchers, and product leaders shaping Africa’s role in the global digital economy.",
        icon: function Icon(props) {
            return (
                <svg
                    {...props}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
            )
        },
    },
]
