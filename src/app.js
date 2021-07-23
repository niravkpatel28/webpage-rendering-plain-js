// import statements
// import { Logo } from "./components/logo.js";
import { NavigationBar } from "./components/navigation.js";
import { Banner } from "./components/banner.js";
let rootDiv = document.getElementById("root");
rootDiv.appendChild(NavigationBar());
rootDiv.appendChild(Banner());
