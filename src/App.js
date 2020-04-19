import React from "react";
import "./styles.css";

import Form from "./Form";
import CardList from "./CardList";

class App extends React.Component {
  state = {
    gitHubProfiles: []
  };

  addNewProfile = profileData => {
    this.setState(prevState => ({
      gitHubProfiles: [...prevState.gitHubProfiles, profileData]
    }));
  };
  render() {
    return (
      <div>
        <div className="header"> The GitHub Cards App </div>
        <Form onSubmit={this.addNewProfile} />
        <CardList profiles={this.state.gitHubProfiles} />
      </div>
    );
  }
}

export default App;
