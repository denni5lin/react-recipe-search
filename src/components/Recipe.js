import React from "react";

const API_KEY = "834355ec87c5822fad1900f9523ba34a";

class Recipe extends React.Component {
  state = {
    activeRecipe: []
  };

  componentDidMount = async () => {
    const title = this.props.location.state.recipe;
    const req = await fetch(
      `https://www.food2fork.com/api/search?key=${API_KEY}&q=${title}`
    );

    const res = await req.json();
    console.log(res.recipes[0]);
  };
  render() {
    console.log(this.props);
    return <div>Recipe Component!</div>;
  }
}

export default Recipe;
