import "./style.css";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";
// import './bases/conts-let'
// import './bases/objects'
import "./bases/arrays";
// import './bases/functions'
// import "./bases/destructure-obj";
// import "./bases/destructure-arrays";
// import "./bases/import-export";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
  </div>
`;
