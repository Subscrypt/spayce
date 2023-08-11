"use client";
import React from "react";
import Button from "./MenuButton";
import { usePathname, useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";

const LeftMenu = () => {
  const handleNavigation = (path: string, router: AppRouterInstance) => {
    router.push(path);
  };

  const router = useRouter();
  const pathName = usePathname;

  return (
    <div className="rounded-2xl justify-between md:w-64 w-fit bg-white flex flex-col gap-1">
      <div className="flex flex-col gap-1 p-2">
        <Button
          icon="🖊️"
          text="Subscriptions"
          onClick={() => handleNavigation("/", router)}
          isFocused={pathName() === "/" ? true : false}
        />

        <Button
          icon="👔"
          text="Marketplace"
          onClick={() => handleNavigation("/marketplace", router)}
          isFocused={pathName() === "/marketplace" ? true : false}
        />
        <Button
          icon="📃"
          text="Billings"
          onClick={() => handleNavigation("/billings", router)}
          isFocused={pathName() === "/billings" ? true : false}
        />
      </div>
      <div className="flex flex-col gap-1 p-2">
        <Button
          icon="⚙️"
          text="Dev"
          onClick={() => handleNavigation("/docs/nav", router)}
          isFocused={pathName() === "/docs/nav" ? true : false}
        />
        <Button
          icon="📃"
          text="Swagger"
          onClick={() => handleNavigation("/docs", router)}
          isFocused={pathName() === "/docs" ? true : false}
        />
      </div>
    </div>
  );
};

export default LeftMenu;
