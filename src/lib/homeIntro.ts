/**
 * In-memory intro flag — resets on full page reload, persists across client navigations.
 */
let homeIntroCompleted = false;

export function isHomeIntroCompleted() {
  return homeIntroCompleted;
}

export function markHomeIntroCompleted() {
  homeIntroCompleted = true;
}

export type HomeIntroPhase = "loading" | "flying" | "ready";

export function getInitialIntroPhase(): HomeIntroPhase {
  if (homeIntroCompleted) return "ready";
  return "loading";
}
