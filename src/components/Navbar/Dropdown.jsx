// components/CustomDropdown.js
import React from "react";
import { Dropdown } from "rsuite";
import "rsuite/dist/rsuite.min.css";

const CustomDropdown = ({ title, items }) => {
  return (
    <Dropdown title={title} className="custom-dropdown">
      {items.map((item, index) => (
        <Dropdown.Item
          key={index}
          className="custom-dropdown-button text-lg"
          style={{ width: "200px" }}
        >
          <a href={item.href} className="text-black">
            {item.label}
          </a>
        </Dropdown.Item>
      ))}
    </Dropdown>
  );
};

export default CustomDropdown;
