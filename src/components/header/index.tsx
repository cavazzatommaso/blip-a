import React from "react";

import { Logo, NavbarItems } from "@components";

export const Header: React.FC = () => {
  return (
    <div className="flex justify-center items-center md:px-5">
      <Logo />
      {/* <NavbarItems /> */}
    </div>
  );
};
