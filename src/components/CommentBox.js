import React, { Component } from 'react'
import { connect } from 'react-redux'

import { saveComment } from '../actions'

class CommentBox extends Component {
  state = { comment: '' }

  handleChange = ({ target: {value} }) =>
    this.setState({ comment: value })
  
  handleSubmit = (e) => {
    e.preventDefault()

    this.props.saveComment(this.state.comment)
    this.setState({ comment: '' })
  }

  render () {
    return (
      <form
        onSubmit={this.handleSubmit}
        className="comment-box"
      >
        <h4>Add a comment</h4>
        <textarea
          onChange={this.handleChange}
          value={this.state.comment} 
        />

        <div>
          <button>Submit Comment</button>
        </div>
      </form>
    )
  }
}

export default connect(null, { saveComment })(CommentBox)
