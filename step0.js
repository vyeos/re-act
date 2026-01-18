// Create this using vanilla js
// const element = <h1 title="foo">Hello</h1>;
// const container = document.getElementById("root");
// ReactDOM.render(element, container);

// ----- Step 0 ----- //

// babel
const element1 = React.createElement(
  "h1", //tagname
  { title: "foo" }, //props
  "Hello", //children
);

// JS
const element2 = {
  type: "h1",
  props: {
    title: "foo",
    children: "Hello",
  },
};
// All properties: type, key, ref, self, source, owner, props

const container = document.createElement(element2.type);
node["title"] = element.props.title;

const text = document.createTextNode("");
text["nodeValue"] = element2.props.children;

node.appendChild(text);
container.appendChild(node);
