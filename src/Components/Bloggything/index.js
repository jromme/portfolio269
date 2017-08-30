import React, { Component } from 'react';

export default class Bloggything extends Component {
  render() {
    const { articles, title } = this.props

    return (
      <div className="bloggything">
        <div className="bloggythingWrapper blocklayout">
        <h1 className="h1">{title}</h1>
          {articles.map((a, i) =>
            <div key={`project_key_${i}`} className="article">
              <h1>{a.title}</h1>
              <h3>{a.date}</h3>
              {a.hasOwnProperty('gif') && <div className="projectGif"><img src={a.gif.sizes.medium_large} alt="" /> </div>}
              <p>{a.paragraph}</p>
            </div>
          )}
        </div>
      </div>
    )
  }
}
