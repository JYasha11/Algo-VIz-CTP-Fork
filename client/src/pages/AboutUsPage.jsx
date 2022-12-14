import React from "react";
import "./AboutUsPage.css";
import elian from "../assets/elian.jpg";
import jon from "../assets/jon.jpg";

export const AboutUsPage = () => {
  return (
    <>
      <section class="team">
        <div>
          <div id="team-div">
            <h1 id="team">
              We Are The <span>AlgoViz</span> Team
            </h1>
          </div>

          <div id="elian">
            <h2>Elian Tiudic</h2>
            <img src={elian} alt="Elian's picture" />
            <p class="description">
              Elian is a senior studying computer science at Booklyn College. Due to his interest in web development, he enrolled in CUNY Tech Prep as a web development fellow.
              Elian is also highly interested in data science and the world of Web3.
            </p>
          </div>

          <div id="jon">
            <h2>Jonathan Yashayev</h2>
            <img src={jon} alt="Jon's picture" />
            <p class="description">
              Jonathan is a senior at Brooklyn College studying computer science. He is highly interested in web development and learning in-demand technologies such as React and
              other JS frameworks. Due to his interest in this & desire to foster a career in this field, he applied to CUNY Tech Prep as a development fellow. Jonathan's outside
              interests include bicycle touring and photography.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
