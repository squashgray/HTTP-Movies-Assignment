import React, { useState } from "react";
import axios from "axios";

function UpdateForm(props) {
  const initialState = {
    id: props.match.params.id,
    title: "",
    director: "",
    metascore: "",
    stars: ["John Wayne", "Fart Turd"]
  };

  const [state, setState] = useState(initialState);

  const changeHandler = e => {
    e.persist(); // makes the text persistent by putting it into persistent storage //
    setState({ ...state, [e.target.name]: e.target.value });
    console.log(state);
  };

  const onSubmit = e => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/api/movies/${props.match.params.id}`, state)
      .then(res => props.history.push("/"))
      .catch(err => console.log(err));
  };

  return (
    <div className="form-cont">
      <form className="form" onSubmit={onSubmit}>
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={state.title}
          onChange={changeHandler}
        ></input>
        <label>Director</label>
        <input
          type="text"
          name="director"
          value={state.director}
          onChange={changeHandler}
        ></input>
        <label>Metascore</label>
        <input
          type="text"
          name="metascore"
          value={state.metascore}
          onChange={changeHandler}
        ></input>
        <br />
        <button type="submit">Submit Edit</button>
      </form>
    </div>
  );
}

export default UpdateForm;
