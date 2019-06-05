import React, { Component } from "react";
import ScrollTrigger from "react-scroll-trigger";

class Code extends Component {
  state = {
    htmlSkill: 0,
    cssSkill: 0,
    phpSkill: 0,
    sqlSkill: 0,
    jsSkill: 0,
    csharpSkill: 0,
    pythonSkill: 0
  };

  updateSkills = () => {
    this.setState({ htmlSkill: 100 });
    this.setState({ cssSkill: 100 });
    this.setState({ phpSkill: 95 });
    this.setState({ sqlSkill: 90 });
    this.setState({ jsSkill: 60 });
    this.setState({ csharpSkill: 30 });
    this.setState({ pythonSkill: 10 });
  };

  getSkillWidth = skill => {
    var width;
    switch (skill) {
      case "html":
        width = { width: this.state.htmlSkill + "%" };
        break;

      case "css":
        width = { width: this.state.cssSkill + "%" };
        break;

      case "php":
        width = { width: this.state.phpSkill + "%" };
        break;

      case "sql":
        width = { width: this.state.sqlSkill + "%" };
        break;

      case "js":
        width = { width: this.state.jsSkill + "%" };
        break;

      case "csharp":
        width = { width: this.state.csharpSkill + "%" };
        break;

      case "python":
        width = { width: this.state.pythonSkill + "%" };
        break;

      default:
        width = { width: "0%" };
    }

    return width;
  };

  render() {
    return (
      <React.Fragment>
        <section className="skillsection">
          <h2 className="my-5 display-3 text-center title-bg">
            <span>Code</span>
          </h2>
          <ScrollTrigger onEnter={this.updateSkills}>
            <div className="row">
              <div className="col-2 text-right display-4">HTML</div>
              <div className="col-9 progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={this.getSkillWidth("html")}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-2 text-right display-4">CSS</div>
              <div className="col-9 progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={this.getSkillWidth("css")}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-2 text-right display-4">PHP</div>
              <div className="col-9 progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="95"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={this.getSkillWidth("php")}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-2 text-right display-4">SQL</div>
              <div className="col-9 progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="90"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={this.getSkillWidth("sql")}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-2 text-right display-4">JS</div>
              <div className="col-9 progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="60"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={this.getSkillWidth("js")}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-2 text-right display-4">C#</div>
              <div className="col-9 progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="30"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={this.getSkillWidth("csharp")}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-2 text-right display-4">Python</div>
              <div className="col-9 progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="10"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={this.getSkillWidth("python")}
                />
              </div>
            </div>
          </ScrollTrigger>
        </section>
      </React.Fragment>
    );
  }
}

export default Code;
