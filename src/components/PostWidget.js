import React from "react";
import { Link } from "react-router-dom";
import DOMPurify from "dompurify";

class PostWidget extends React.Component {
  render() {
    return (
      <div>
        <Link to={`/post/${this.props.post.node.id}`}>
          <p
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(this.props.post.node.title)
            }}
          />
        </Link>
      </div>
    );
  }
}
export default PostWidget;
