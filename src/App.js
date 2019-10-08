import React from "react";
import { render } from "react-dom";
import FacebookLogin from "react-facebook-login";

const getData = accessToken => {
  // create a new XMLHttpRequest
  var xhr = new XMLHttpRequest();

  // get a callback when the server responds
  xhr.addEventListener("load", () => {
    // update the state of the component with the result here
    console.log(xhr.responseText);
  });
  // open the request with the verb and the url
  xhr.open(
    "GET",
    `https://graph.facebook.com/2316537715123791/feed?limit=5&access_token=${accessToken}`
  );
  // send the request
  xhr.send();
};

const responseFacebook = response => {
  getData(response.accessToken);
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
