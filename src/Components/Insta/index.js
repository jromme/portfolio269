import React, { Component } from 'react';
import jsonp from 'jsonp';

export default class Insta extends Component {
  constructor(props) {
    super(props);

    this.state = {
      instagramPosts: [],
      loading: false
    }
  }

  componentDidMount() {
    const user = '240628817';
    const access_token = '240628817.07455da.df0ae2fa48d34e299d33a5e6b62e47a2';
    const api = 'https://api.instagram.com/v1';
    const fetch_url = `${api}/users/${user}/media/recent?access_token=${access_token}&count=4`;

    jsonp(fetch_url, {}, (err, data) => {
      this.setState({
        instagramPosts: data.data
      }, () => {
        this.setState({ loading: true })
      })
    })
  }

  render() {
    const { title } = this.props
    const { instagramPosts, loading } = this.state
    if (loading !== true) return false
    return (
      <div className="insta blocklayout">
        <div className="instaWrapper">
          <h1>{title}</h1>
          {instagramPosts.map((post, i) => (
            <a href={post.link} target='_blank' key={i} className="instaLink">
              <img className="instaPost" key={i}
                  src={post.images.standard_resolution.url}
                  width={post.images.standard_resolution.width}
                  height={post.images.standard_resolution.height}
                  alt={(post.caption === 'null') ? post.caption.text : 'nothing here'}
              />
            </a>
          ))}
        </div>
      </div>
    )
  }
}



