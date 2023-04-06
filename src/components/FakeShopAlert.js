import React from "react";

const FakeShopAlert = (props) => {
  const handleClick = () => {
    props.closeAlert();
    props.clearCart();
  }

  return (
    <div className="fakeShopBackground">
      <div className="fakeShopAlert">
        <p>This is not a real shop. This website was made for educational purposes.</p>
        <button onClick={handleClick}>X</button>
      </div>
    </div>
  )
}

export default FakeShopAlert;