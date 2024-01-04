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
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import NavBarDesktop from "./navBarDesktop";

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
      <Link href="/">
        <div className="logo">
          <Image
            src="/images/elite-diamond-logo-2-x.png"
            height={0}
            width={0}
            className=" w-[109px] h-[55px]"
            sizes="100vw"
            alt="logo"
          />
        </div>
      </Link>
      <NavBarDesktop />
      <Sheet>
        <SheetTrigger>
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
