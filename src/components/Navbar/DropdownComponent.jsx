import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

const DropdownComponent = ({ title, items }) => {
  return (
    <Dropdown>
      <Dropdown.Toggle
        variant=""
        id="dropdown-basic"
        className="text-2xl bg-green-200 text-black border-none !shadow-none focus:ring-0 focus:outline-none hover:bg-green-300 focus:bg-green-300"
      >
        {title}
      </Dropdown.Toggle>

      <Dropdown.Menu className="bg-green-200">
        {items.map((item, index) => (
          <Dropdown.Item
            key={index}
            href={item.href}
            className="text-[18px] mt-1 hover:bg-green-300 focus:bg-green-300 !px-4 !py-2 w-[260px]"
          >
            {item.label}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropdownComponent;
