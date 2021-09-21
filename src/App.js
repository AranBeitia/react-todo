import React from "react";

import TodoForm from "./components/TodoForm"
import TodoFooter from "./components/TodoFooter"


class App extends Component {
  constructor(props) {
    super(props)
  }
  render (){
    return (
      <div className="position-relative">
        <section className="padding-15 mb-4 bg-image-hero"></section>
        <main className="card position-absolute absolute-center">
          <header className="card-header">
            <h1>TODO</h1>
          </header>
          <TodoForm />
          <TodoFooter />
        </main>
        <footer className="text-center">
          <p>Drag and drop to reorder list</p>
        </footer>
      </div>
    );
  }
}

export default App;
