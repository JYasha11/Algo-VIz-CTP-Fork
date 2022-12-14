import React from "react";
import "./AboutUsPage.css";
import elian from "../assets/elian.jpg"
import jon from "../assets/jon.jpg"


export const AboutUsPage = () => {
  return (
    <>
    <section class ="team">
      <div>
        <div id = "team-div">
          <h1 id = "team">We Are The <span>AlgoViz</span> Team</h1>
        </div>

        <div id="elian">
          <h2>Elian Tiudic</h2>
          <img src={elian} alt = "Elian's picture"/>
          <p class="description">
          Computer Science student at Booklyn College. Interested in Web Development, Data Science, and Web3.
          </p>
        </div>

        <div id="jon">
          <h2>Jonathan Yashayev</h2>
          <img
            src={jon}
            alt="Jon's picture"
          />
          <p class="description">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      </section>
    </>
  )
}