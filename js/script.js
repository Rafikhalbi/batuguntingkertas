const resultPoint = document.getElementById("resultPoint");
const player = document.getElementById("player");
const vsbot = document.getElementById("bot");
const statusGame = document.getElementById("status");
const garis = document.getElementById("garis");
const level = document.getElementById("level");
const winn = document.getElementById("winn");
const lose = document.getElementById("lose");
const drw = document.getElementById("drw");
const body = document.querySelector("body");
const tDark = document.querySelector(".textDark");

const music = new Audio("../assets/music/backsound.mp3").play().loop = true;

let point = 0;
let winner = 0;
let loser = 0;
let draw = 0;

const darkMode = () => {
    body.classList.toggle("dark");
    if (body.classList.contains("dark")) {
        tDark.innerHTML = "White Mode";
    } else {
        tDark.innerHTML = "Dark Mode";
    }
};

const startGame = (choice) => {
    let user = choice;
    let bot = botChoice();
    player.innerHTML = user;
    console.log(`anda memilih: ${choice}\nbot memilih: ${bot}`);
    garis.classList.add("garis");
    setTimeout(() => {
        vsbot.innerHTML = "Bot Sedang Memilih...";
    }, 500);
    selection(user, bot);
    switch (true) {
        case point == 200:
            setTimeout(() => {
                level.innerHTML = "1";
            }, 1000);
            break;
        case point == 600:
            setTimeout(() => {
                level.innerHTML = "2";
            }, 1000);
            break;
        case point == 1200:
            setTimeout(() => {
                level.innerHTML = "3";
            }, 1000);
            break;
        case point == 1600:
            setTimeout(() => {
                level.innerHTML = "4";
            }, 1000);
            break;
        case point == 2200:
            setTimeout(() => {
                level.innerHTML = "5";
            }, 1000);
            break;
        case point == 2600:
            setTimeout(() => {
                level.innerHTML = "6";
            }, 1000);
            break;
        case point == 3200:
            setTimeout(() => {
                level.innerHTML = "7";
            }, 1000);
            break;
        case point == 3600:
            setTimeout(() => {
                level.innerHTML = "8";
            }, 1000);
            break;
        case point == 4200:
            setTimeout(() => {
                level.innerHTML = "9";
            }, 1000);
            break;
        case point == 4600:
            setTimeout(() => {
                level.innerHTML = "10";
                alert(
                    `GAME BERAKHIR!!\nTotal Point: ${point}\nTotal Winner: ${winner}\nTotal Lose: ${loser}\nTotal Draw: ${draw}`
                );
            }, 1000);
            break;
    }
};

const selection = (user, bot) => {
    if (bot === "✊" && user === "✌️") {
        setTimeout(() => {
            vsbot.innerHTML = bot;
        }, 1000);
        setTimeout(() => {
            statusGame.innerHTML = "anda kalah!";
        }, 1500);
        loser += 1;
    } else if (bot === "✌️" && user === "🖐️") {
        setTimeout(() => {
            vsbot.innerHTML = bot;
        }, 1000);
        setTimeout(() => {
            statusGame.innerHTML = "anda kalah!";
        }, 1500);
        loser += 1;
    } else if (bot === "🖐️" && user === "✊") {
        setTimeout(() => {
            vsbot.innerHTML = bot;
        }, 1000);
        setTimeout(() => {
            statusGame.innerHTML = "anda kalah!";
        }, 1500);
        loser += 1;
    } else if (bot === "✌️" && user === "✊") {
        setTimeout(() => {
            vsbot.innerHTML = bot;
        }, 1000);
        setTimeout(() => {
            statusGame.innerHTML = "anda menang!";
        }, 1500);
        point += 200;
        winner += 1;
    } else if (bot === "🖐️" && user === "✌️") {
        setTimeout(() => {
            vsbot.innerHTML = bot;
        }, 1000);
        setTimeout(() => {
            statusGame.innerHTML = "anda menang!";
        }, 1500);
        point += 200;
        winner += 1;
    } else if (bot === "✊" && user === "🖐️") {
        setTimeout(() => {
            vsbot.innerHTML = bot;
        }, 1000);
        setTimeout(() => {
            statusGame.innerHTML = "anda menang!";
        }, 1500);
        point += 200;
        winner += 1;
    } else {
        setTimeout(() => {
            vsbot.innerHTML = bot;
        }, 1000);
        setTimeout(() => {
            statusGame.innerHTML = "anda draw!";
        }, 1500);
        draw += 1;
    }
    setTimeout(() => {
        player.innerHTML = "";
        vsbot.innerHTML = "";
        statusGame.innerHTML = "";
        garis.classList.remove("garis");
        resultPoint.innerHTML = `Point: ${point}`;
        winn.innerHTML = winner;
        drw.innerHTML = draw;
        lose.innerHTML = loser;
    }, 2000);
};

const botChoice = () => {
    let listItem = ["✊", "✌️", "🖐️"];
    let randomItem = listItem[Math.floor(Math.random() * listItem.length)];
    return randomItem;
};
