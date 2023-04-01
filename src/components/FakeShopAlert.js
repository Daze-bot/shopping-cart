import React from "react";

const FakeShopAlert = (props) => {
  const handleClick = () => {
    props.closeAlert();
    props.clearCart();
  }

  return (
    <div className="fakeShopAlert">
      <p>This is not a real shop! This website was made as a part of The Odin Project curriculum.</p>
      <button onClick={handleClick}>X</button>
    </div>
  )
}

export default FakeShopAlert;