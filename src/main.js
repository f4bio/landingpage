import "./style.css";
import "feather-icons";
import Typed from "typed.js";
import { hideSplashscreen } from "./util.js";

function startTyping() {
  if (document.getElementById("typed")) {
    const outputResultElement = document.getElementById("output-result");

    const typed = new Typed("#typed", {
      strings: ["whoami | tree ^1000\n"],
      typeSpeed: 100,
      startDelay: 1000,
      onComplete: () => {
        // typed.stop();
        console.log("completed!", typed);
        outputResultElement.classList.remove("hidden");
      },
    });
  }
}

setTimeout(() => {
  hideSplashscreen();

  startTyping();
}, 2000);
