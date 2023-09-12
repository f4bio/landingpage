import "./style.css";
import "feather-icons";
import Typewriter from "typewriter-effect/dist/core";
import { hideSplashscreen } from "./util";

setTimeout(() => {
  hideSplashscreen();
}, 3000);

const typewriterElement = document.getElementById("typewriter");
const outputResultElement = document.getElementById("output-result");
if(typewriterElement) {
  const typewriter = new Typewriter(typewriterElement, {
    loop: false,
    delay: "natural"
  });
  typewriter
    .pasteString("<span class='text-slate-100'>[</span>")
    .pasteString("<span>iam</span>")
    .pasteString("<span class='text-slate-100'>@</span>")
    .pasteString("<span>f4b.io</span>")
    .pasteString("<span class='text-slate-100'> ~]$</span> ")
    .pauseFor(2500)
    .typeString("whoami | tree")
    .pauseFor(1000)
    .callFunction(() => {
      outputResultElement?.classList.remove("hidden");
      typewriter.stop();
    });
    typewriter.start();
}
