import React, { Component } from 'react';
import axios from 'axios';
import jsonp from 'jsonp';


export default class Insta extends Component {

  constructor(props) {
    super(props);

    this.state = {
      instagramPosts: [],
      loading: true
    }
  }

  componentDidMount() {
    const user = '240628817';
    const access_token = '240628817.07455da.df0ae2fa48d34e299d33a5e6b62e47a2';
    const api = 'https://api.instagram.com/v1';
    // axios.get(`${api}/users/${user}/media/recent?access_token=${access_token}&count=4`)
    //   .then(x => {
    //     this.setState({
    //     instagramPosts: x.data.data
    //     })
    //     this.setState({
    //       loading: false
    //     })
    //     console.log(x.data.data)
    //   })

    jsonp(`${api}/users/${user}/media/recent?access_token=${access_token}&count=4`, {}, function (err, x) {
      if (err) {
        console.error(err.message);
      } else {
        console.log(x.data);
      }
    });
  }

  render() {
    const { title } = this.props

    if (this.state.loading === true) return false
    return (
      <div className="insta blocklayout">
        <div className="instaWrapper">
          <h1>{title}</h1>
          {this.state.instagramPosts.map((post, i) => 
            <a href={post.link} target='_blank' key={i} className="instaLink">
              <img className="instaPost" key={i} 
                  src={post.images.standard_resolution.url} 
                  width={post.images.standard_resolution.width}
                  height={post.images.standard_resolution.height}
                  alt={(post.caption === 'null') ? post.caption.text : 'nothing here'}
              />
            </a>
          )}
        </div> 
      </div>
    )
  }
}



