import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  
  const NavBarLinks = links.map((link, number) => {
    return <a href={"#" + link} key={number}>{link}</a>
  })

  return (
  <nav>
    {NavBarLinks}
    </nav>
  );
}

export default NavBar;
