import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import ToDo from "../components/ToDo";

function Home({toDos, addTodo}) {
  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  }
  
  const onSubmit = (e) => {
    e.preventDefault();
    addTodo(text);
    setText("");
  }
  

  return(
    <>
      <h2>To Do</h2>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="Write your to do's?" value={text} onChange={onChange} />
        <button>submit</button>
      </form>
      <ul>
        {toDos.map((todo) => (
          <ToDo {...todo} key={todo.id} />
        ))}
      </ul>
    </>
  );
}

function mapStateToProps(state) {
    return {toDos: state};
}

function mapDispatchToProps(dispatch) {
  return {
    addTodo: (text) => dispatch(actionCreators.addTodo(text))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

// use mapStateToProps, mapDispatchToProps Version
// https://react-redux.js.org/api/connect#mapstatetoprops-state-ownprops--object
// https://react-redux.js.org/api/connect#mapstatetoprops-state-ownprops--object

