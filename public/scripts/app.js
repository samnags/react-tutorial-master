var CommentBox = React.createClass({
  render() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList />
        <CommentForm />
      </div>
    )
  }
})

var CommentForm = React.createClass({
render() {
  return (
    <div className="commentForm">
    This is a comment form
    </div>
  )
}
})

var CommentList = React.createClass({
  render() {
    return (
      <div className="commentList">
      This is a comment list
      </div>
    )
  }
})

var Comment = React.createClass({
  render() {
    return (
      <div className="comment">
        <h2 clasName="commentAuthor">
          {this.props.author}
        </h2>
        {this.props.children}
        </div>
    );
  }
})


ReactDOM.render(<CommentBox/>, document.getElementById('content'))
