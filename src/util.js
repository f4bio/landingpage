export function hideSplashscreen() {
  const splashscreenContainer = document.getElementById("splashscreen");
  const contentContainer = document.getElementById("content");

  splashscreenContainer?.classList.add("hidden");
  splashscreenContainer?.classList.remove("flex");

  contentContainer?.classList.remove("hidden");
  contentContainer?.classList.add("flex");
}
