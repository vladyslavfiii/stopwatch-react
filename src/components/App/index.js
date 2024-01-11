import React from "react";

import Preloader from "../Preloader"
import Content from "../Content"

function App(props){
    return(
      <div className="app">
        <Preloader display="none"/>
        <Content />
      </div>
    );
}

export default App;