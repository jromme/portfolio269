import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    const { title, image, paragraph } = this.props
    return (
      <div className="header blocklayout">
        <div className="headerWrapper">
          { image && <img src={image.sizes.medium_large} className="geziech" alt="logo" /> }
          <h1 className="h1">{title}</h1>
          <p>{paragraph}</p>
        </div>
      </div>
    )
  }
}