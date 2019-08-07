import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ApolloClient, { gql } from "apollo-boost";
import "milligram";
import Header from "./components/Header";
import App from "./components/App";
import Post from "./components/Post";
import NotFound from "./components/NotFound";

class AppRouter extends React.Component {
  state = {
    title: "",
    posts: []
  };

  componentDidMount() {
    const client = new ApolloClient({
      uri: "http://mrinalbd.com/?graphql"
    });
    client
      .query({
        query: gql`
          {
            generalSettings {
              title
            }
            posts {
              edges {
                node {
                  id
                  title
                  date
                  link
                  content
                  excerpt
                }
              }
            }
          }
        `
      })
      .then(result => {
        this.setState({
          posts: result.data.posts.edges,
          title: result.data.generalSettings.title
        });
      });
  }
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <Header title={this.state.title} />
          <Switch>
            <Route
              exact
              path="/"
              render={props => <App {...props} state={this.state.posts} />}
            />
            <Route
              path="/post/:postID"
              render={props => <Post {...props} state={this.state.posts} />}
            />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default AppRouter;
