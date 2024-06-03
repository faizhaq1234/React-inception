const parent = React.createElement(
    "div",
     {id:"Parent"},
      React.createElement(
        "div",
         {id:"child"},
          React.createElement("h1", {}, "I am a H1 Tags"),
          React.createElement("h2", {}, "I am H2 Tags")
)
);
const main = ReactDOM.createRoot(document.getElementById("main"));
main.render(parent)



const heading = React.createElement(
    
"h1",
 {id:"heading"},
 "Hello React");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);