// <div>
// </div> 
const parent = React.createElement("div",{id: "parent"}, [
     React.createElement("div", {id:"child"}, React.createElement("h1", null, "from child div")),
     React.createElement("div", {id: "child2"},React.createElement("h1",null, "from child2 div"))
])
const heading = React.createElement("h1", { id: "heading"}, "hello world from react cdn");
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);