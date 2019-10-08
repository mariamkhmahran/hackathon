import React from "react";
import { render } from "react-dom";
import FacebookLogin from "react-facebook-login";

const responseFacebook = response => {
  console.log(response);
};

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <FacebookLogin
        appId="2398185460424314"
        autoLoad={true}
        fields="name,email,picture"
        callback={responseFacebook}
      />
      // document.getElementById("demo")
    );
  }
}
export default App;
