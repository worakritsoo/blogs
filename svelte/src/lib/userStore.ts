import { browser } from "$app/env";
import { writable } from "svelte/store";

export const user = writable();

if (browser) {
  user.set(JSON.parse(localStorage.getItem("user")) || "");
  user.subscribe((v) => {
    localStorage.setItem("user", JSON.stringify(v));
  });
}
