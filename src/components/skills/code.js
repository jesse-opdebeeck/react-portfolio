import React, { Component } from "react";

class Code extends Component {
  state = {
    htmlSkill: 100,
    cssSkill: 100,
    phpSkill: 95,
    sqlSkill: 90,
    jsSkill: 60,
    csharpSkill: 30,
    pythonSkill: 15
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
        </section>
      </React.Fragment>
    );
  }
}

export default Code;
