// render navigation bar

/* <div class="navigation">
// render logo
// render navlinks
</div> */

import { Logo } from "./logo.js";
import { NavLinks } from "./navLinks.js";
import { Hamburger } from "./hamburger.js";
export const NavigationBar = () => {
  const markUp = document.createElement("div");
  markUp.classList.add("navigation");
  markUp.appendChild(Logo());
  markUp.appendChild(Hamburger());
  markUp.appendChild(NavLinks());

  return markUp;
};
