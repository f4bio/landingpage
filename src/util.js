export function hideSplashscreen() {
  const splashscreenContainer = document.getElementById("splashscreen");
  splashscreenContainer.classList.add("hidden");
}

export function showContent() {
  const contentContainer = document.getElementById("content");
  contentContainer.classList.remove("hidden");
}
