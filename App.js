// const heading = React.createElement("h1", {id: "heading", xyz:"abc"}, "Hello World from ReactJS");
const heading = React.createElement("div", {id: "parent"},
        [React.createElement("div", {id: "child"},
        [React.createElement("h1", {id: "h1-heading"}, "h1 tag is here"),
            React.createElement("h2", {id: "h2-heading"}, "h2 tag is here")]),
        ]);

            const root = ReactDOM.createRoot(document.getElementById("root"));

            root.render(heading);

            console.log(heading); 