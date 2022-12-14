import React from "react";

export const VisualizationsPage2 = () => {
  return (
    <>
      <div id="settings">
        <div className="menu-header">
          <div id="close-menu">
            <i className="fas fa-times"></i>
          </div>
          <div>
            <h2>Settings</h2>
          </div>
        </div>

        <div className="settings-container">
          <div>
            <p>Node Animation Speed: </p>
            <input type="number" placeholder="Miliseconds" />
          </div>

          <div>
            <p>Pointer Animation Speed: </p>
            <input type="number" placeholder="Miliseconds" />
          </div>

          <div>
            <p>Delete Animation Speed: </p>
            <input type="number" placeholder="Miliseconds" />
          </div>

          <div className="error-message">
            <p id="settings-error"></p>
          </div>

          <div className="success">
            <p id="succes"></p>
          </div>

          <button id="save-settings">Save</button>
        </div>
      </div>

      <header>
        <div className="header-container">
          <div id="settings-menu">
            <i className="fas fa-bars"></i>
          </div>

          <div>
            <h1>
              Linked <span>List</span> Visualization
            </h1>
          </div>

          <div id="theme-switcher">
            <i className="fas fa-adjust"></i>
          </div>
        </div>
        <div className="gradient-border"></div>
      </header>

      <main>
        <section className="list" id="list"></section>

        <section className="errors">
          <div className="error-message">
            <p id="error"></p>
          </div>
        </section>

        <section className="operations">
          <div className="wrapper">
            <div>
              <button className="button" id="set-btn">
                Set
              </button>
              <input type="number" placeholder="Index" />
              <input type="number" placeholder="Data" />
            </div>

            <div>
              <button className="button" id="insert-btn">
                Insert
              </button>
              <input type="number" placeholder="Index" />
              <input type="number" placeholder="Data" />
            </div>

            <div>
              <button className="button" id="add-btn">
                Add
              </button>
              <input type="number" placeholder="Data" />
            </div>

            <div>
              <div className="remove">
                <button className="button" id="remove-btn">
                  Remove
                </button>
                <button className="button" id="remove-settings">
                  <i className="fas fa-cog"></i>
                </button>
              </div>

              <button className="remove-option" id="remove-index-btn">
                Index
              </button>
              <button className="remove-option" id="remove-data-btn">
                Data
              </button>

              <input type="number" placeholder="Index" />
              <input type="number" placeholder="Data" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
