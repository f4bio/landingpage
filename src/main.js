import "./style.css";
import { hideSplashscreen, showContent } from "./util.js";
import typer from "typer-js";

const splashscreenTimeout = 1000;
const typingTimeout = 1000;

const terminalCommands = document.querySelector(".terminal #commands");
const commandTyper = typer(".terminal #commands", {
  min: 30,
  max: 150,
}).cursor({ block: true, blink: "smooth", color: "white" });

const addPre = () => {
  const pre = document.createElement("div");
  const loc = document.createElement("span");
  const date = document.createElement("span");
  const branch = document.createElement("span");

  loc.style.color = "hsl(250, 80%, 70%)";
  loc.innerHTML = "C://Users/Admin ";

  date.style.color = "hsl(50, 80%, 70%)";
  date.innerText = `[${new Date().toLocaleString()}]`;

  branch.style.color = "hsl(170, 80%, 65%)";
  branch.innerHTML = "✔ main";

  pre.className = "pre";
  pre.appendChild(loc);
  pre.appendChild(date);
  pre.appendChild(branch);

  return commandTyper
    .run(() => {
      terminalCommands.appendChild(pre);
    })
    .line(`<span style="color: hsl(150, 80%, 70%)">&#x276F;&#x276F;</span> `, {
      speed: 0,
    });
};

const runCommandOnTerminal = ({ input, output = " ", wait = 0, cb }) => {
  return addPre()
    .continue(input)
    .pause(wait)
    .line(output, { speed: 0 })
    .run(() => {
      cb && cb();
    });
};

const clearTerminal = () => {
  terminalCommands.innerHTML = "";
  runCommandOnTerminal({});
};

const getCommandRunner = (commandOptions) => () => {
  runCommandOnTerminal(commandOptions);
};

const runCommandSequence = async (commands, wait = 0) => {
  let currentCommandTyper = runCommandOnTerminal(commands[0]);
  for (let i = 1; i < commands.length; i++) {
    currentCommandTyper = await currentCommandTyper.pause(wait).run(getCommandRunner(commands[i]));
  }
  return currentCommandTyper;
};

async function main() {
  setTimeout(() => {
    hideSplashscreen();
    showContent();

    const control = runCommandSequence([
      {
        input: "print date",
        output: new Date().toLocaleDateString(),
        wait: 20,
      },
      {
        input: "clear",
        wait: 600,
        cb: clearTerminl,
      },
    ]);
    console.log(control);
  }, splashscreenTimeout);
}

if (document.readyState === "loading") {
  // Loading hasn't finished yet
  document.addEventListener("DOMContentLoaded", main);
} else {
  // `DOMContentLoaded` has already fired
  main()
    .then((r) => console.log(r))
    .catch((e) => console.error(e));
}
