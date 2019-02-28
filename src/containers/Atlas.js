import React, { Component } from 'react';
import { FetchAtlasData } from '../FetchData';
import './style/Atlas.scss';

class Atlas extends Component {
    constructor(props) {
      super(props);

      this.state = {
          grids: null
      }
    }

    componentDidMount() {
      console.log("component did mount");

      FetchAtlasData()
        .then(data => {
          this.setState({ "grids": data })

          // window.addEventListener('scroll', function(e) {
          //   console.log("fired event");
          //   e.preventDefautl();
            // last_known_scroll_position = window.scrollY;
            // document.querySelector(".main-app").style.transform = "scale(0.9)";

          // });
        })
    }

    componentWillMount() {
    }

    handleScaleBtn = () => {
      // document.querySelector('.main-app').style.transform = "scale(0.5)"
      const rows = document.querySelectorAll('.grid-row')
      rows.forEach((row) => {
        row.classList.toggle("small");
        // row.style.transform = "scale(0.8)";
        // row.style.height = "400px";
        // row.style.width = "6000px";
      })
      const grids = document.querySelectorAll('.gridContainer')
      grids.forEach((grid) => {
        grid.classList.toggle("small");
        // grid.style.transform = "scale(0.8)";
        // grid.style.height = "400px";
        // grid.style.width = "400px";

      })
    }

    render() {
      const { grids } = this.state;

        if (!grids) {
          return (
            <React.Fragment>
              Waiting for data . . .
            </React.Fragment>
            )
        }

        console.log("Rendering the grids")
        console.log(grids)
        console.log(typeof grids)


        return (
            <React.Fragment>
            <div className="navbar">
            Atlas
            <button onClick={this.handleScaleBtn}> Resize </button>
            </div>
            <div className="main-app">
                  {

                    grids["data"].map((row) => {
                      console.log("Rendering a single row")
                      console.log(row)
                      console.log(typeof row)
                      return (
                        <div className="grid-row">
                          {
                            row['grids'].map((grid) => {
                              console.log("rendering a single grid")
                              console.log(grid)
                              console.log(grid["ressources"])

                              return (
                                <div key={grid["region"]} className="gridContainer" style={{"backgroundImage": `url(http://localhost:3005/grids/${grid['region']}_lg.jpg)`}}>
                                { /*<div key={grid["region"]} className="gridContainer" style={{"backgroundImage": `url(${grid['image']})`}}> */}
                                  <div className="grid-name">{grid["region"]}
                                    <br/><span>{grid["biome"]}</span>
                                    { grid["typeof"]
                                      &&
                                      <React.Fragment><br/><span>{grid["typeof"]}</span></React.Fragment>
                                    }
                                    { (grid["difficulty"] && grid["difficulty"] !== "unknown")
                                      &&
                                      <React.Fragment><br/><span>Difficulty: {grid["difficulty"]}</span></React.Fragment>
                                    }
                                    { (grid["notes"] && grid["notes"] !== "[]")
                                      &&
                                      <React.Fragment><br/><span>Notes: {grid["notes"]}</span></React.Fragment>
                                    }
                                    </div>
                                  <div className="grid-info-container">

                                    { (grid["ressources"] && grid["ressources"].length > 0)
                                      &&
                                      grid["ressources"].map((ressource) => {
                                        return (
                                          <a key={ressource["name"]} className="ressourceLink" target="_blank" href={`https://atlas.gamepedia.com${ressource["source_href"]}`}>
                                            <div style={{"backgroundImage": `url(${ressource["thumbnail_small"]})`, "height": "20px", "width": "20px"}}></div>
                                            <span>{ressource["name"]}</span>
                                          </a>
                                        )
                                      })
                                    }
                                    { (grid["plants"] && grid["plants"].length > 0)
                                      &&
                                      grid["plants"].map((plant) => {
                                        return (
                                          <a key={plant["name"]} className="ressourceLink" target="_blank" href={`https://atlas.gamepedia.com${plant["source_href"]}`}>
                                            <div style={{"backgroundImage": `url(${plant["thumbnail_small"]})`, "height": "20px", "width": "20px"}}></div>
                                            <span>{plant["name"]}</span>
                                          </a>
                                        )
                                      })
                                    }
                                  </div>
                                  <div className="grid-info-container" style={{"float":"right"}}>
                                    { (grid["animals"] && grid["animals"].length > 0)
                                      &&
                                      grid["animals"].map((animal) => {
                                        return (
                                          <a key={animal["name"]} className="ressourceLink" target="_blank" href={`https://atlas.gamepedia.com${animal["source_href"]}`}>
                                            <span>{animal["name"]}</span>
                                          </a>
                                        )
                                      })
                                    }
                                  </div>
                                </div>
                                )
                            })
                          }
                        </div>
                      )
                    })
                  }
              </div>
            </React.Fragment>
        )
    }
}

export default Atlas;
