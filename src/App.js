import React from "react";

function App() {
    return <WelcomeComponent name="Codetrain is awesome, react works!!!" />;
}

class WelcomeComponent extends React.Component {
    render() {
        return <h1>{this.props.name}</h1>;
    }
}

export default App;
