import React from "react";

const Product = ({ id, name, descripton, img, price }) => {
  return (
    <article
      className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10"
      id={id}
    >
      <div class="tc">
        <img
          src={img}
          className="br-100 h3 w3 dib"
          title="Photo of a kitty staring at you"
          title={name}
        />
        <h1 className="f4">{name}</h1>
        <hr className="mw3 bb bw1 b--black-10" />
      </div>
      <p className="lh-copy measure center f6 black-70">{descripton}</p>

      <button className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-black ">
        Add
      </button>
    </article>
  );
};
export default Product;
