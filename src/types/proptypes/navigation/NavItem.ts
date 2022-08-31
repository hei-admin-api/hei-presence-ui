import React from "react";
import { FlexProps } from "@chakra-ui/react";
import { IconType } from "react-icons";

export type NavItemProps = FlexProps & {
  icon: IconType;
  children: React.ReactNode;
}
