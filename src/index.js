import "./style.scss";
import * as basicLightbox from "basiclightbox";
import prettyHtml from "json-pretty-html";
import marked from "marked";

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
});
