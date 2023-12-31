import React from "react";
import { LogoLink, LogoIcon } from "./Logo.styled";
import logoImg from "src/images/logo.svg";

export const Logo = () => {
  return (
    <LogoLink href="./">
      <LogoIcon src={logoImg} alt="logo" />
      Organick
    </LogoLink>
  );
};
