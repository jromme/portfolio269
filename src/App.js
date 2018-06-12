import React, { Component } from 'react';
import axios from 'axios';
import Insta from './Components/Insta';
import Projects from './Components/Projects';
import Bloggything from './Components/Bloggything';
import Header from './Components/Header';
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      content: '',
      loaded: false
    }
  }

  componentDidMount() {
    const API = 'http://jerome.api.jeromejero.me/wp-json'
    const HOMEPAGE = `${API}/wp/v2/pages/15`
    axios.get(HOMEPAGE)
      .then(content => {
        this.setState({
          content: content.data.acf
        }, () => {
          this.setState({
            loaded: true
          })
        })
      })
  }

  render() {
    const { content, loaded } = this.state
    if (loaded === false) return false
    return (
      <div className="mywebsait">
        {content.modules.map((modules, i) => {
          switch(modules.acf_fc_layout) {
            case 'header': return <Header key={`module_key_${i}`} {...modules} />
            case 'insta': return <Insta key={`module_key_${i}`} {...modules} />
            case 'projects': return <Projects key={`module_key_${i}`} {...modules} />
            case 'bloggything': return <Bloggything key={`module_key_${i}`} {...modules} />
            default: return '<p>Module not found</p>'
          }
        })}
      </div>
    );
  }
}
