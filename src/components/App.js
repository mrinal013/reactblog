import React from "react";
import styled from "styled-components";
import Posts from "./Posts";
import PostWidget from "./PostWidget";
import LoadingState from "./styled";

const Widget = styled.div`
  border: 1px solid gray;
  padding: 10px;
  p {
    margin-bottom: 0;
    border-top: 1px solid gray;
    }
  }
`;

class App extends React.Component {
  render() {
    if (this.props.state.length) {
      return (
        <div className="row">
          <div className="column column-80">
            {this.props.state.map(post => (
              <Posts key={post.node.id} post={post} />
            ))}
          </div>
          <div className="column column-20">
            <Widget>
              <h3>Recent posts</h3>
              {this.props.state.slice(0, 2).map(post => (
                <PostWidget key={post.node.id} post={post} />
              ))}
            </Widget>
          </div>
        </div>
      );
    }
    return <LoadingState>Loading...</LoadingState>;
  }
}
export default App;
