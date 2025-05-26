import React from "react";
import { cn } from "../utils/cn";

type Props = {};

const Container = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn("max-w-screen-xl container m-auto lg:px-0 px-4", className)}
    >
      {children}
    </div>
  );
};

export default Container;
