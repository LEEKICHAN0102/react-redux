import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actionCreators } from "../store";


function ToDo({text, id}) {
  const dispatch = useDispatch();
  const onBtnClick = () => {
    dispatch(actionCreators.deleteTodo(id));
  };

  return (
    <Link to={`/${id}`}>
      <li>
        {text} <button onClick={onBtnClick}>삭제</button>
      </li>
    </Link>
  );
}

export default ToDo;

//useDispatch Version 
//https://react-redux.js.org/api/hooks#usedispatch
