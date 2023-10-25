import "./style.css";
import { hideSplashscreen, showContent } from "./util.js";
import typer from "typer-js";

const splashscreenTimeout = 1000;
const typingTimeout = 1000;

function run() {
  setTimeout(() => {
    hideSplashscreen();
    showContent();

    const commandTyping = document.querySelector("#whoamiCommandTyping");
    const commandText = document.querySelector("#whoamiCommandText");
    const commandResult = document.querySelector("#whoamiResult");
    typer(commandTyping, { min: 30, max: 100 })
      .cursor()
      .pause(typingTimeout)
      .line("Hi!")
      .pause(typingTimeout)
      .back("all")
      .pause(typingTimeout)
      .continue({ container: commandText })
      .pause(typingTimeout)
      .end(() => {
        commandResult.classList.remove("invisible");
      });
  }, splashscreenTimeout);
}

if (document.readyState === "loading") {
  // Loading hasn't finished yet
  document.addEventListener("DOMContentLoaded", run);
} else {
  // `DOMContentLoaded` has already fired
  run();
}
