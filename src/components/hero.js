import React, { Component } from "react";

class Hero extends Component {
  state = {
    backgroundVideo: "https://app.coverr.co/s3/mp4/Hello-World.mp4",
    backgroundVideoType: "video/mp4"
  };

  render() {
    return (
      <header>
        <div class="overlay" />
        <video
          playsinline="playsinline"
          autoplay="autoplay"
          muted="muted"
          loop="loop"
        >
          <source
            src={this.state.backgroundVideo}
            type={this.state.backgroundVideoType}
          />
        </video>
        <div class="container h-100">
          <div class="d-flex h-100 text-center align-items-center">
            <div class="w-100 text-white">
              <h1 class="display-3">Jesse Op de Beeck</h1>
              <p class="lead mb-0">
                Goed met websites en computers en zo van die dingen.
              </p>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Hero;
