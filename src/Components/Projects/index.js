import React, { Component } from 'react';

export default class Projects extends Component {
  render() {
    const { title, project } = this.props

    return (
      <div className="projects">
        <div className="projectsWrapper blocklayout">
        <h1 className="h1">{title}</h1>
          {project.map((p, i) =>
            <div key={`project_key_${i}`} className="project">
              <h1 className="h1">{p.title}</h1>
              {p.hasOwnProperty('gif') && <div className="projectGif"><img src={p.gif.sizes.medium_large} alt="" /> </div>}
              <p>{p.paragraph}</p>
            </div>
          )}
        </div>
      </div>
    )
  }
}
