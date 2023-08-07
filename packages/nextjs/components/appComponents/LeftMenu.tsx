"use client";

import React, { useState } from "react";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import { usePathname, useRouter } from "next/navigation";
import Button from "./MenuButton";

const LeftMenu = () => {
  const handleNavigation = (path: string, router: AppRouterInstance) => {
    router.push(path);
  };

  const router = useRouter();
  const pathName = usePathname;

  return (
    <div className="rounded-2xl w-64 bg-white p-2 flex flex-col gap-1">
      <Button
        icon="🖊️"
        text="Subscriptions"
        onClick={() => handleNavigation("/application", router)}
        isFocused={pathName() === "/application" ? true : false}
      />
      <Button
        icon="📃"
        text="Billings"
        onClick={() => handleNavigation("/application/billings", router)}
        isFocused={pathName() === "/application/billings" ? true : false}
      />
      <Button
        icon="👔"
        text="Services"
        onClick={() => handleNavigation("/application/services", router)}
        isFocused={pathName() === "/application/services" ? true : false}
      />
    </div>
  );
};

export default LeftMenu;
