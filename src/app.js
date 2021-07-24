// import statements

import { NavigationBar } from "./components/navigation.js";
import { Banner } from "./components/banner.js";
import { getData } from "./data/data.js";

// getData().then((data) => console.log("data,", data));

let rootDiv = document.getElementById("root");
rootDiv.appendChild(NavigationBar());
rootDiv.appendChild(Banner());
