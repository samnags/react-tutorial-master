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
    
    </div>
  )
}
})

var CommentList = React.createClass({
  render() {
    return (
      <div className="commentList">
        <Comment author="JK Rowling">This is a comment</Comment>
        <Comment author="Michael Jordan">This is second comment</Comment>
      </div>
    )
  }
});


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
