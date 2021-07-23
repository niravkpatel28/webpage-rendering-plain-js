// // create a banner
// <div class="banner">
//   <h1 class="banner-heading">Company Name</h1>
//   <p class="banner-tagline">Some Tag line</p>
//   <a href="#" class="btn">
//     Contact Us
//   </a>
// </div>;

import { bannerData } from "../data/data.js";

export const Banner = () => {
  const markUp = document.createElement("div");
  markUp.classList.add("banner");
  // make this via style.css
  markUp.style.backgroundImage = bannerData.bannerImage;

  let heading = document.createElement("h1");
  heading.classList.add("banner-heading");
  heading.textContent = bannerData.companyName;

  let tagLine = document.createElement("p");
  tagLine.classList.add("banner-tagline");
  tagLine.textContent = bannerData.tagline;

  let cta = document.createElement("a");
  cta.href = bannerData.href;
  cta.textContent = bannerData.cta;
  cta.classList.add("btn");

  markUp.appendChild(heading);
  markUp.appendChild(tagLine);
  markUp.appendChild(cta);

  //return banner
  return markUp;
};
