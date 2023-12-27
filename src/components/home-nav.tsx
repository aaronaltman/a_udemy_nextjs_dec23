import React from "react";

const menuItems = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
  {
    name: "Blog",
    path: "/blog",
  },
];

export default function HomeNav() {
  return (
    <nav>
      <ul className="flex bg-slate-50 justify-center p-4 gap-10 shadow-sm border-black/10">
        {menuItems.map((item) => (
          <li key={item.name}>
            <a href={item.path}>{item.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
