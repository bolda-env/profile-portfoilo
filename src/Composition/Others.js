import React from "react";

import Skills from "./Sub-Compo/Skills";
import Academic from "./Sub-Compo/Academic";
import { icons } from "./Sub-Compo/icons";

const Others = () => {
  return (
    <article id="other_ctn">
      <section className="others">
        <Skills icons={icons} />
        <Academic icons={icons} />
        <Footer />
      </section>
    </article>
  );
};

const Footer = () => <footer>Copyright &copy; 2022.</footer>;
export default Others;
