// Arrays of verbs, adjectives, and nouns
const verbs = [
    "DISRUPT", "SHIFT", "RECONFIGURE", "SUBVERT", "DECONSTRUCT", "BLUR", "BREAK", "EXPAND", "AMPLIFY", "MEDIATE",
    "RECONCILE", "INFUSE", "DISPLACE", "ILLUMINATE", "DISTORT", "ERODE", "CONCEAL", "MERGE", "REFLECT", "EXPLODE",
    "NAVIGATE", "CHALLENGE", "REIMAGINE", "RESHAPE", "SIMULATE", "UNVEIL", "EXPOSE", "INTEGRATE", "MULTIPLY",
    "TRANSCEND", "SHIFT", "NEGATE", "UNFOLD", "CONFLATE", "ADAPT", "REFRAME", "CONVERGE", "MANIPULATE"
];

const adjectives = [
    "FRAGMENTED", "ABSTRACT", "DYSTOPIAN", "CHAOTIC", "EVOLVING", "INTIMATE", "DISTORTED", "SUBVERSIVE", "OBSCURE",
    "MULTILAYERED", "EPHEMERAL", "INTERCONNECTED", "PROVOCATIVE", "INHERENT", "TRANSIENT", "HYPOTHETICAL", "LIMINAL",
    "SENSORY", "AMBIGUOUS", "SURREAL", "CONCEPTUAL", "RADICAL", "ORGANIC", "MINIMAL", "SYMBOLIC", "AUTHENTIC",
    "EMOTIONAL", "VULNERABLE", "INNOVATIVE", "REFLECTIVE", "SPATIAL", "POLITICAL", "EERIE", "ARTIFICIAL", "PROVOCATIVE",
    "ETHEREAL", "REPETITIVE", "CONTRADICTORY", "METAPHORICAL", "SUBTLE", "METAMORPHIC", "ICONIC", "FRAGMENTARY",
    "RADICAL", "TEMPORAL", "RESONANT"
];

const nouns = [
    "IDENTITY", "MEMORY", "VIOLENCE", "POLITICS", "TECHNOLOGY", "LOVE", "ENVIRONMENT", "SPACE", "GENDER", "POWER",
    "DESIRE", "ALIENATION", "TRAUMA", "CONFLICT", "CULTURE", "PERCEPTION", "BEAUTY", "AUTHENTICITY", "LOVE", "DAMAGE",
    "JUSTICE", "RESISTANCE", "MIGRATION", "FREEDOM", "TIME", "COMMUNICATION", "INNOVATION", "ISOLATION", "CONSUMPTION",
    "NARRATIVES", "FRAGMENT", "LOVE", "LANGUAGE", "BODY", "REPRESENTATION", "SPIRITUALITY", "MEMORY", "TECHNOLOGY",
    "STRUCTURE", "TRADITION", "ECOLOGY", "TRANSFORMATION", "MYTHOLOGY", "LOVE", "RITUAL", "EXPERIENCE", "HISTORY",
    "DREAMS", "SPACE", "CONFLICT", "MEDIA", "VULNERABILITY", "PERCEPTION", "ETHICS", "LOVE", "ABSENCE", "REALITY",
    "SIMULATION"
];

// Function to randomly select one verb, adjective, and noun
function getRandomWord(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Event listener for button click
document.getElementById("generateButton").addEventListener("click", function () {
    const verb = getRandomWord(verbs);
    const adjective = getRandomWord(adjectives);
    const noun = getRandomWord(nouns);

    // Display the result
    document.getElementById("output").textContent = `${verb} ${adjective} ${noun}`;
});
