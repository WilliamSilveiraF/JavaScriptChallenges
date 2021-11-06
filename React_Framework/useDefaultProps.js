const ShoppingCart = (props) => {
    props.items = 0;
    return (
      <div>
        <h1>Shopping Cart Component</h1>
      </div>
    )
  };
  // Change code below this line

const ShoppingCart = (props) => {

    ShoppingCart.defaultProps = { items : 0};
    return (
      <div>
        <h1>Shopping Cart Component</h1>
      </div>
    )
};
// Change code below this line