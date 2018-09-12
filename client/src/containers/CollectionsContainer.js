import React, { Component } from 'react'
import Collections from '../components/collections/Collections.js'

class CollectionsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: []
    }
  }

  componentDidMount() {
    fetch('/api/v1/collections.json')
      .then(response => response.json())
      .then(collectionData => this.setState({
        collections: collectionData
      }))
  }

  render() {
    return (
      <div className="collections-container">
        <Collections collections={this.state.collections}/>
      </div>
    )
  }
}

export default CollectionsContainer
