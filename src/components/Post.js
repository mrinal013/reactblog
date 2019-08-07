import React from "react";
import DOMPurify from "dompurify";
import LoadingState from "./styled";

class Post extends React.Component {
  render() {
    if (this.props.state.length) {
      let postInfo = {};
      const state = this.props.state;
      const postID = this.props.match.params.postID;
      state.forEach(function(post, index) {
        if (post.node.id === postID) {
          postInfo = post;
        }
      });
      if (postInfo.node) {
        return (
          <div className="column">
            <h2
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(postInfo.node.title)
              }}
            />
            <p
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(postInfo.node.content)
              }}
            />
          </div>
        );
      } else {
        return <div>Post Not Found</div>;
      }
    }
    return <LoadingState>Searching...</LoadingState>;
  }
}
export default Post;
