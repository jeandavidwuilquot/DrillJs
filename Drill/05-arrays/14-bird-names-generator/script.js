const birds = [{
        name: "mouette",
        fem: true
    },
    {
        name: "corbeau"
    },
    {
        name: "mésange",
        fem: true
    },
    {
        name: "hibou"
    },
    {
        name: "buse",
        fem: true
    },
    {
        name: "pigeon"
    },
    {
        name: "pie",
        fem: true
    },
    {
        name: "vautour"
    },
    {
        name: "faucon"
    },
    {
        name: "rouge-gorge"
    },
    {
        name: "tourterelle",
        fem: true
    },
    {
        name: "corneille",
        fem: true
    },
];
const adjectives = new Set([
    "cendré",
    "huppé",
    "chantant",
    "hurlant",
    "perché",
    "grand",
    "petit",
    "bleu",
    "pantelant",
    "tangent",
    "arboré",
]);


document.querySelector("#run").addEventListener("click", () => {

        let oiseau = birds[Math.floor(Math.random() * birds.length)];

        let article;
        if (oiseau.fem === true)
            article = "La"
        else
            article = "Le"

        let tab = Array.from(adjectives);

        let adj = tab[Math.floor(Math.random() * tab.length)];
        if (oiseau.fem === true)
            adj += "e"
        else
            adj += ""

        let texte = document.querySelector("#target").innerHTML = (`${article} ${oiseau.name} ${adj}`);
    }

)