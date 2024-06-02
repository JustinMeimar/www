import type { Project } from "$lib/types";


export type TagMapType = {
    [key: string]: string;
};

export const tagMap : TagMapType = {
    '#gui': '#28a6aa',
    '#systems': '#fa901d',
    '#hackathon': '#f94e95',
    "#web-dev": "#cc76e5",
};

export let projectDescs: Project[] = [
    {
        title: 'Regex Engine',
        route: 'regex-engine',
        imgLink: "/images/preview-regex.png",
        link: "https://github.com/JustinMeimar/nfa-regex",
        guiLink: "https://justinmeimar.com/regex-www",
        desc: 'Regex engine based on closure properties of regular langauges',
        longDesc: `A C++ regular expression engine built from the closure properties of regular languages.
        Given a regex, the engine will iteratively build a corresponding NFA.  
        A stack-augmented walk of the parse tree lets us compose the final NFA from simpler 
        sub-automatas. A web interface once thrived, collecting several dozen clicks a month 
        but has since been depreciated due to server costs.`,
        tags: ["#gui", "#systems"],
        iconLinks: ["cplusplus", "webassembly"],
    },
    {
        title: 'Recurrence Trees',
        route: 'tree',
        link: "https://justinmeimar.github.io/algo-trees/",
        desc: 'Using recurrence relations with a hint of randomness to generate nature',
        tags: ["#gui", "#web-dev"],
        iconLinks: ["typescript", "svelte"],
    },
    {
        title: 'Semantic Journal',
        link: "https://github.com/JustinMeimar/semantic-journal",
        route: 'semantic-journal',
        desc: 'A journal that can be chatted with! Developed at HackED 2024',
        date: 'January 2024',
        longDesc: `
            Creating and keep track of progress towards measureable goals is hard. 
            Luckily Semantic Samantha is here to help you in achieving you goals!
            When you give Samantha a goal, she will decide on three metrics that
            you will keep track of together. Each day, you can then create a journal 
            entry where you talk about your efforts. She will handle all the evaluation
            for you. At any time, you can chat with her about how your progress is going.
        `,
        technologies: ['flask', 'react', 'openai'],
        imgLink: '/images/semantic-journal.png',
        guiLink: "https://github.com/JustinMeimar/semantic-journal",
        tags: ["#hackathon", "#web-dev"],
        iconLinks: ["openai", "typescript", "flask"],
    },
    {
        title: 'Home Server',
        route: 'home-server',
        link: "https://justinmeimar.com/regex",
        desc: 'The server you\'re connected to... Fully equipped for SSH and HTTPS',
        imgLink: "/images/homeserver.jpg",
        guiLink: "https://github.com/JustinMeimar/www-justin",
        date: "May 2023",
        technologies: ["nginx", "ssh", "flask", "svelte"],
        tags: ["#systems"],
        longDesc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip`, 
        iconLinks: ["ubuntu", "nginx", "postgresql"],
    },
    {
        title: 'B+ Tree',
        route: 'btree',
        link: "https://github.com/JustinMeimar/btree",
        desc: 'A database index implemnentation in C++ with fast ranged queries!',
        date: 'December 2023',
        longDesc: 'A C++ implementation of a B+ Tree, a common database index. The implementation is benchmarked and testsed with up to 100,000,000 random inserts and lookups.',
        imgLink: '/images/btree.jpg',
        guiLink: "https://github.com/JustinMeimar/btree",
        technologies: ["C++"],
        tags: ["#systems"],
        iconLinks: ["cplusplus", "sqlite"],
    },
    {
        title: 'The Deadly Bird',
        route: 'tree',
        link: "https://github.com/uofa-cmput404/w24-project-the-deadly-bird",
        desc: 'Distributed Social Networking Platform built in a team of 4',
        imgLink: '/images/btree.jpg',
        guiLink: "https://github.com/JustinMeimar/btree",
        tags: ["#web-dev"],
        iconLinks: ["typescript", "react", "django", "docker"],
    },
    {
        title: '8-Bit CPU Emulator',
        route: 'tree',
        link: "https://github.com/JustinMeimar/vn-8bit",
        desc: 'CHIP-8 implementation in Rust from my early days',
        imgLink: '/images/btree.jpg',
        guiLink: "https://github.com/JustinMeimar/btree",
        tags: ["#systems"],
        iconLinks: ["rust"],
    },
    {
        title: 'Real AI',
        route: 'semantic-journal',
        link: "https://github.com/JustinMeimar/hack-gpt",
        desc: 'HackGPT Edmonton 2023. Real Estate listings \
        with semantic search',
        date: 'January 2024',
        imgLink: '/images/semantic-journal.png',
        guiLink: "https://github.com/JustinMeimar/semantic-journal",
        tags: ["#hackathon", "#web-dev"],
        iconLinks: ["openai", "flask", "javascript"],
    },
    // {
    //     title: 'Compiler Explorer',
    //     route: 'compiler',
    //     desc: 'A visual component to my teams Compiler',
    //     date: "Fall 2022",
    //     longDesc: 'A visual window into NAGC (Not another Gazprea Compiler), a strongly typed vector langauge compiler implemented with ANTLR and LLVM-IR.',
    //     imgLink: '',
    //     guiLink: '',
    //     tags: ["#gui", "#systems"]
    // },
    // {
    //     title: 'Green Thread Library',
    //     route: 'tree',
    //     desc: 'User-level threads, running in pure C!',
    //     imgLink: '/images/btree.jpg',
    //     guiLink: "https://github.com/JustinMeimar/btree",
    //     tags: ["#systems"]
    // },
    // {
    //     title: 'Thymos',
    //     route: '',
    //     desc: 'Developed for HackGPT Edmonton 2023 - A real estate listings \
    //     with semantic search',
    //     date: 'January 2024',
    //     imgLink: '/images/semantic-journal.png',
    //     guiLink: "https://github.com/JustinMeimar/semantic-journal",
    //     tags: ["#systems"]
    // },
];