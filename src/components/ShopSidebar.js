import React, { useState } from "react";

const ShopSidebar = (props) => {
  const list = [
    {id: 1, text: 'All Products', click: props.allProducts},
    {id: 2, text: 'Consoles', click: props.consoles},
    {id: 3, text: 'Controllers', click: props.controllers},
    {id: 4, text: 'Keyboards', click: props.keyboards},
    {id: 5, text: 'Headsets', click: props.headsets},
    {id: 6, text: 'Mice', click: props.mice},
  ];

  const [active, setActive] = useState(1);

  return (
    <div className="shopSidebar">
      <ul className="shopCategories">
        <p>Category</p>
        {list.map((item) => {
          return (
            <li
              key={item.id}
              onClick={() => {
                setActive(item.id);
                item.click();
              }}
              className={`list-item ${active === item.id ? "active" : "inactive"}`}
            >
              {item.text}
            </li>
          )
        })}
      </ul>
    </div>
  );
};

export default ShopSidebar;
