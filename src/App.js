import React from 'react';
import './App.css';

let marked = require("marked");
const newText = `
this is a paragraph
**this is bolded text** 

# heading 1
## heading 2

- list item 1
- list item 2
- list item 3

[visit website](https://www.freecodecamp.org)
> Block Quotes!

this is a inline \`<div></div>\`

this is a block of code

\`\`\`
  let a = 10;
  let b = 5;
  let c = a + b;
\`\`\`

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)

`

class App extends React.Component {
  state ={
    text: newText
  }
  handleChange (text){
    this.setState({
      text
    })
  }
 render(){
  let {text} = this.state;
  const markdown = marked(text, { breaks: true });
  return (
    <div className="container-fluid App">
      <div className="row" style={{backgroundColor:'green', height:"100vh"}}>
        <div className="col-sm-6">
          <div>
            <p>markdown</p>
            <textarea id="editor" value={text} onChange={(event)=>this.handleChange(event.target.value)} className="markdown" />
          </div>
        </div>
        <div className="col-sm-6">
        <div style={{backgroundColor:'green', height:"50vh"}}>
            <p>result: </p>
            <div id="preview" dangerouslySetInnerHTML={{__html: markdown }} className="markdown">

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
}

export default App;
