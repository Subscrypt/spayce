"use client";
import React from "react";
import Button from "./MenuButton";
import { usePathname, useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import CreateSpayceButtom from "./CreateSpayceButton";


const LeftMenu = () => {
  const handleNavigation = (path: string, router: AppRouterInstance) => {
    router.push(path);
  };

  const router = useRouter();
  const pathName = usePathname;

  return (
    <div className="rounded-2xl justify-between md:w-64 sm:static absolute sm:w-fit bottom-2 border-gray-50 sm:border-0 border-2 w-[98%] sm:left-0 left-[1%] z-10 bg-white flex sm:flex-col flex-row gap-1">
      <div className="flex flex-row sm:flex-col gap-1 p-2">
        <CreateSpayceButtom onClick={() => router.push('/createSpayce')} />
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
      <div className="flex flex-row sm:flex-col gap-1 p-2">
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
