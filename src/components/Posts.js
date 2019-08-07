import React from "react";
import { Link } from "react-router-dom";
import DOMPurify from "dompurify";

class Posts extends React.Component {
  excerpt = this.props.post.node.excerpt;

  render() {
    return (
      <div>
        <Link to={`/post/${this.props.post.node.id}`}>
          <h2
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(this.props.post.node.title)
            }}
          />
        </Link>
        <article>
          <p
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(
                this.excerpt.slice(0, this.excerpt.indexOf("Continue reading"))
              )
            }}
          />
        </article>
      </div>
    );
  }
}
export default Posts;
