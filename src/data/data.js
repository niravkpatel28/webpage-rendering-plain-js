export const baseLink =
  "https://niravkpatel28.github.io/github-image-repository";

const dataEndPoint =
  "https://niravkpatel28.github.io/json-data-server-v2/webpage/webpage.json";

export const bannerData = {
  companyName: "Render Webpage using JavaScript Object",
  tagline: "using modular code for page rendering",
  cta: "Contact Us",
  href: "#",
  bannerImage: `${baseLink}/webpage/banner2.png`,
};

export const navData = {
  logo: {
    imgSrc: `${baseLink}/webpage/surfboard-logo.png`,
    alt: "Surfboard India Company Logo",
  },
  navLinks: [
    {
      linkId: "li1", // unique id
      title: "Home",
      // href: "/home",
      href: "#",
    },
    {
      linkId: "li2", // unique id
      title: "Our Work",
      // href: "/work",
      href: "#",
    },
    {
      linkId: "li3", // unique id
      title: "About Us",
      // href: "/aboutus",
      href: "#",
    },
    {
      linkId: "li4", // unique id
      title: "Register",
      // href: "/register",
      href: "#",
      isCta: true,
    },
  ],
};

export const webpageData = {
  navData,
  bannerData,
};

export const getData = async () => {
  let data = await await fetch(dataEndPoint);
  data = await data.json();
  return data;
};
