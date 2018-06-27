import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

//ReactDOM.render(<App />, document.getElementById('root'));

var user = {
    name: "Mario",
    age: 43,
    location: "Coccaglio"
};

var app = {
    title: "My title",
    //subtitle: "My subtitle",
    options: ["One", "Two"]
};

let template = (
    <div>
        <h1>{user.name}</h1>
        <p>{user.age}</p>
        <p>
            Location: {user.location == undefined ? "Unkwown" : user.location}
        </p>
    </div>
);

let template2 = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <h2>app.subtitle</h2>}
        {app.options.length > 0 && <p>app.options</p>}
    </div>
);

ReactDOM.render(template2, document.getElementById("root"));

registerServiceWorker();
