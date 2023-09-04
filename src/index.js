import "./style.css";
import * as basicLightbox from "basiclightbox";
import prettyHtml from "json-pretty-html";
import marked from "marked";
import Typewriter from "typewriter-effect";

document.addEventListener("DOMContentLoaded", async () => {
  const versioningFileContent = {
    // eslint-disable-next-line no-undef
    timestamp: TIMESTAMP,
    // eslint-disable-next-line no-undef
    version: VERSION.name,
    // eslint-disable-next-line no-undef
    numCommits: VERSION.numCommits,
    // eslint-disable-next-line no-undef
    hash: VERSION.hash,
    // eslint-disable-next-line no-undef
    dirty: VERSION.dirty
  };

  const versionText = document.getElementById("version-text");
  const lightboxProfilePicture = document.getElementById(
    "lightbox-profile-picture"
  );
  const lightboxVersionJson = document.getElementById("lightbox-version-json");
  const content = document.getElementById("content");

  content.innerHTML = marked.parse(
    "# Marked in the browser\n\nRendered by **marked**."
  );

  versionText.textContent = versioningFileContent.version;

  lightboxProfilePicture.onclick = () => {
    basicLightbox
      .create(`<img src="/profile.png" alt="Profile Picture"/>`)
      .show();
  };

  lightboxVersionJson.onclick = () => {
    const _jsonHtml = prettyHtml(versioningFileContent);
    basicLightbox
      .create(`<div class="modal"><pre>${_jsonHtml}</pre></div>`)
      .show();
  };

  const typewriterElement = document.getElementById("typewriter");
  const typewriter = new Typewriter(typewriterElement, {
    loop: true,
    delay: 75,
  });

  typewriter
    .pauseFor(2500)
    .typeString('A simple yet powerful native javascript')
    .pauseFor(300)
    .deleteChars(10)
    .typeString('<strong>JS</strong> plugin for a cool typewriter effect and ')
    .typeString('<strong>only <span style="color: #27ae60;">5kb</span> Gzipped!</strong>')
    .pauseFor(1000)
    .start();
});
