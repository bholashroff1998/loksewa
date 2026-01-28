// Quiz Data - Science Studies Questions
const quizData = [
    {
        question: "What is Anatomy?",
        correct: "Study of internal structure of organisms",
        options: [
            "Study of internal structure of organisms",
            "Study of ancient writing",
            "Study of human races and cultures",
            "Study of the mind"
        ]
    },
    {
        question: "What is Anthropology?",
        correct: "Study of humans, their origins, and societies",
        options: [
            "Study of humans, their origins, and societies",
            "Study of human history through artifacts",
            "Study of moral principles",
            "Study of aging"
        ]
    },
    {
        question: "What is Archaeology?",
        correct: "Study of human history through artifacts",
        options: [
            "Study of celestial bodies",
            "Study of human history through artifacts",
            "Study of ancient writing",
            "Study of mountains"
        ]
    },
    {
        question: "What is Astronomy?",
        correct: "Study of celestial bodies (planets, stars, etc.)",
        options: [
            "Study of celestial bodies (planets, stars, etc.)",
            "Study of the influence of stars on human affairs",
            "Study of the universe's origin and structure",
            "Study of time measurement"
        ]
    },
    {
        question: "What is Astrology?",
        correct: "Study of the influence of stars on human affairs",
        options: [
            "Study of celestial bodies",
            "Study of the universe's origin",
            "Study of the influence of stars on human affairs",
            "Study of sound"
        ]
    },
    {
        question: "What is Acoustics?",
        correct: "Study of sound",
        options: [
            "Study of light",
            "Study of sound",
            "Study of matter and energy",
            "Study of time measurement"
        ]
    },
    {
        question: "What is Botany?",
        correct: "Study of plants",
        options: [
            "Study of plants",
            "Study of trees",
            "Study of flowers",
            "Study of garden cultivation"
        ]
    },
    {
        question: "What is Biology?",
        correct: "Study of all living organisms",
        options: [
            "Study of bacteria",
            "Study of all living organisms",
            "Study of microorganisms",
            "Study of viruses"
        ]
    },
    {
        question: "What is Bacteriology?",
        correct: "Study of bacteria",
        options: [
            "Study of bacteria",
            "Study of viruses",
            "Study of microorganisms",
            "Study of all living organisms"
        ]
    },
    {
        question: "What is Calligraphy?",
        correct: "Art of beautiful handwriting",
        options: [
            "Study of ancient writing",
            "Art of beautiful handwriting",
            "Study of inscriptions",
            "Study of teaching"
        ]
    },
    {
        question: "What is Cosmology?",
        correct: "Study of the universe's origin and structure",
        options: [
            "Study of celestial bodies",
            "Study of the universe's origin and structure",
            "Study of matter and its changes",
            "Study of the Earth's physical structure"
        ]
    },
    {
        question: "What is Chemistry?",
        correct: "Study of matter and its changes",
        options: [
            "Study of matter and energy",
            "Study of matter and its changes",
            "Study of metals and their properties",
            "Study of the Earth's physical structure"
        ]
    },
    {
        question: "What is Dendrology?",
        correct: "Study of trees",
        options: [
            "Study of plants",
            "Study of trees",
            "Study of flowers",
            "Study of garden cultivation"
        ]
    },
    {
        question: "What is Ethics?",
        correct: "Study of moral principles",
        options: [
            "Study of moral principles",
            "Study of the mind",
            "Study of teaching",
            "Study of human races and cultures"
        ]
    },
    {
        question: "What is Ethnology?",
        correct: "Study of human races and cultures",
        options: [
            "Study of humans, their origins, and societies",
            "Study of human races and cultures",
            "Study of inscriptions",
            "Study of ancient writing"
        ]
    },
    {
        question: "What is Entomology?",
        correct: "Study of insects",
        options: [
            "Study of insects",
            "Study of fish",
            "Study of birds",
            "Study of animals"
        ]
    },
    {
        question: "What is Eugenics?",
        correct: "Study of improving the human species through genetics",
        options: [
            "Study of improving the human species through genetics",
            "Study of female health",
            "Study of aging",
            "Study of diseases"
        ]
    },
    {
        question: "What is Epigraphy?",
        correct: "Study of inscriptions",
        options: [
            "Study of ancient writing",
            "Study of inscriptions",
            "Art of beautiful handwriting",
            "Study of coins or currency"
        ]
    },
    {
        question: "What is Floriculture?",
        correct: "Study of growing flowers",
        options: [
            "Study of plants",
            "Study of growing flowers",
            "Study of garden cultivation",
            "Study of trees"
        ]
    },
    {
        question: "What is Geology?",
        correct: "Study of the Earth's physical structure",
        options: [
            "Study of mountains",
            "Study of earthquakes",
            "Study of the Earth's physical structure",
            "Study of the universe's origin"
        ]
    },
    {
        question: "What is Gerontology?",
        correct: "Study of aging",
        options: [
            "Study of aging",
            "Study of female health",
            "Study of diseases",
            "Study of body functions"
        ]
    },
    {
        question: "What is Gynecology?",
        correct: "Study of female health",
        options: [
            "Study of female health",
            "Study of aging",
            "Study of body functions",
            "Study of diseases"
        ]
    },
    {
        question: "What is Gastronomy?",
        correct: "Study of food and culture",
        options: [
            "Study of food and culture",
            "Study of the stomach",
            "Study of body functions",
            "Study of kidneys"
        ]
    },
    {
        question: "What is Horticulture?",
        correct: "Study of garden cultivation",
        options: [
            "Study of plants",
            "Study of garden cultivation",
            "Study of growing flowers",
            "Study of trees"
        ]
    },
    {
        question: "What is Horology?",
        correct: "Study of time measurement",
        options: [
            "Study of time measurement",
            "Study of sound",
            "Study of light",
            "Study of mountains"
        ]
    },
    {
        question: "What is Ichthyology?",
        correct: "Study of fish",
        options: [
            "Study of fish",
            "Study of insects",
            "Study of birds",
            "Study of animals"
        ]
    },
    {
        question: "What is Microbiology?",
        correct: "Study of microorganisms",
        options: [
            "Study of bacteria",
            "Study of viruses",
            "Study of microorganisms",
            "Study of all living organisms"
        ]
    },
    {
        question: "What is Metallurgy?",
        correct: "Study of metals and their properties",
        options: [
            "Study of metals and their properties",
            "Study of matter and its changes",
            "Study of the Earth's physical structure",
            "Study of matter and energy"
        ]
    },
    {
        question: "What is Nephrology?",
        correct: "Study of kidneys",
        options: [
            "Study of kidneys",
            "Study of the nervous system",
            "Study of teeth",
            "Study of body functions"
        ]
    },
    {
        question: "What is Neurology?",
        correct: "Study of the nervous system",
        options: [
            "Study of the mind",
            "Study of the nervous system",
            "Study of body functions",
            "Study of diseases"
        ]
    },
    {
        question: "What is Numismatics?",
        correct: "Study/collection of coins or currency",
        options: [
            "Study/collection of coins or currency",
            "Study of inscriptions",
            "Study of ancient writing",
            "Study of time measurement"
        ]
    },
    {
        question: "What is Odontology?",
        correct: "Study of teeth",
        options: [
            "Study of teeth",
            "Study of kidneys",
            "Study of the nervous system",
            "Study of diseases"
        ]
    },
    {
        question: "What is Ornithology?",
        correct: "Study of birds",
        options: [
            "Study of birds",
            "Study of fish",
            "Study of insects",
            "Study of animals"
        ]
    },
    {
        question: "What is Optics?",
        correct: "Study of light",
        options: [
            "Study of light",
            "Study of sound",
            "Study of matter and energy",
            "Study of time measurement"
        ]
    },
    {
        question: "What is Orology?",
        correct: "Study of mountains",
        options: [
            "Study of mountains",
            "Study of the Earth's physical structure",
            "Study of earthquakes",
            "Study of the universe's origin"
        ]
    },
    {
        question: "What is Paleography?",
        correct: "Study of ancient writing",
        options: [
            "Study of ancient writing",
            "Study of inscriptions",
            "Art of beautiful handwriting",
            "Study of human history through artifacts"
        ]
    },
    {
        question: "What is Physiology?",
        correct: "Study of body functions",
        options: [
            "Study of body functions",
            "Study of diseases",
            "Study of the mind",
            "Study of internal structure of organisms"
        ]
    },
    {
        question: "What is Pathology?",
        correct: "Study of diseases",
        options: [
            "Study of diseases",
            "Study of body functions",
            "Study of poisons",
            "Study of viruses"
        ]
    },
    {
        question: "What is Psychology?",
        correct: "Study of the mind",
        options: [
            "Study of the mind",
            "Study of the nervous system",
            "Study of moral principles",
            "Study of teaching"
        ]
    },
    {
        question: "What is Pedagogy?",
        correct: "Study of teaching",
        options: [
            "Study of teaching",
            "Study of the mind",
            "Study of moral principles",
            "Study of ancient writing"
        ]
    },
    {
        question: "What is Pisciculture?",
        correct: "Breeding and rearing of fish",
        options: [
            "Study of fish",
            "Breeding and rearing of fish",
            "Study of silk production",
            "Study of garden cultivation"
        ]
    },
    {
        question: "What is Physics?",
        correct: "Study of matter and energy",
        options: [
            "Study of matter and energy",
            "Study of matter and its changes",
            "Study of light",
            "Study of sound"
        ]
    },
    {
        question: "What is Seismology?",
        correct: "Study of earthquakes",
        options: [
            "Study of earthquakes",
            "Study of mountains",
            "Study of the Earth's physical structure",
            "Study of sound"
        ]
    },
    {
        question: "What is Sericulture?",
        correct: "Study of silk production",
        options: [
            "Study of silk production",
            "Breeding and rearing of fish",
            "Study of garden cultivation",
            "Study of growing flowers"
        ]
    },
    {
        question: "What is Toxicology?",
        correct: "Study of poisons",
        options: [
            "Study of poisons",
            "Study of diseases",
            "Study of viruses",
            "Study of bacteria"
        ]
    },
    {
        question: "What is Virology?",
        correct: "Study of viruses",
        options: [
            "Study of viruses",
            "Study of bacteria",
            "Study of microorganisms",
            "Study of diseases"
        ]
    },
    {
        question: "What is Zoology?",
        correct: "Study of animals",
        options: [
            "Study of animals",
            "Study of all living organisms",
            "Study of birds",
            "Study of fish"
        ]
    }
];