"use client";

import { MenuIcon, ShoppingCartIcon } from "lucide-react";
import { Card } from "./card";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

import NavBarDesktop from "./navBarDesktop";
import { Button } from "./button";
import Logo from "./logo";

const Header = () => {
  return (
    <Card className="header flex items-center justify-between p-[1.875rem]">
      <Sheet>
        <SheetTrigger asChild className="sm-custom:hidden">
          <Button size="icon" variant="outline" className="text-white">
            <MenuIcon />
          </Button>
        </SheetTrigger>

        <SheetContent
          side="left"
          className=" xl-[30%] lg:w-[400px] md:w-[350px] max-md:w-[350px] max-sm:w-[350px]"
        >
          <SheetHeader className="text-left text-lg font-semibold">
            Menu
          </SheetHeader>

          <div className="flex flex-col">
            <p>Menu</p>
          </div>

          <SheetClose asChild>
            <div>Edson</div>
          </SheetClose>
        </SheetContent>
      </Sheet>
      <Logo />
      <NavBarDesktop />
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline">
            <ShoppingCartIcon />
          </Button>
        </SheetTrigger>
        <SheetContent className="w-[350px]">
          <div>Cart</div>
        </SheetContent>
      </Sheet>
    </Card>
  );
};

export default Header;
