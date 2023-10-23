import "./style.css";
import "feather-icons";
import Typed from "typed.js";
import { hideSplashscreen } from "./util.js";

setTimeout(() => {
  hideSplashscreen();
}, 0);

if (document.getElementById("typed")) {
  const outputResultElement = document.getElementById("output-result");

  const typed = new Typed("#typed", {
    strings: ["whoami | tree ^1000\n"],
    typeSpeed: 100,
    startDelay: 1000,
    onComplete: () => {
      console.log("completed!");
      typed.stop();
      outputResultElement.classList.remove("hidden");
    },
  });
  console.log(typed);
}
