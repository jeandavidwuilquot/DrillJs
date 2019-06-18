const computers = [{
        id: "0001",
        available: false,
        user: "leny",
        os: "macOS"
    },
    {
        id: "0002",
        available: false,
        user: "Nicolas"
    },
    {
        id: "0003"
    },
    {
        id: "0004",
        os: "Windows"
    },
    {
        id: "0005"
    },
    {
        id: "0006",
        os: "macOS"
    },
    {
        id: "0007"
    },
    {
        id: "0008"
    },
    {
        id: "0009",
        available: false,
        user: "Anthony"
    },
];
const defaultProps = {
    available: true,
    os: "linux",
    user: null,
};
document.getElementById("run").addEventListener("click", () => {
    for (i = 0; i < computers.length; i++) {
        if (computers[i].available === undefined) {
            computers[i].available = defaultProps.available
        }
    }
    for (i = 0; i < computers.length; i++) {
        if (computers[i].os === undefined) {
            computers[i].os = defaultProps.os
        }
    }
    for (i = 0; i < computers.length; i++) {
        if (computers[i].user === undefined) {
            computers[i].user = defaultProps.user
        }
    }
    console.log(computers)
})