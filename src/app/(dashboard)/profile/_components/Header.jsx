"use client";
import Link from "next/link";
import ButtonIcon from "@/components/ui/ButtonIcon";
import Avatar from "@/components/ui/Avatar";
import { useAuth } from "@/context/AuthContext";
import SideBar from "./SideBar";
import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Drawer from "@/components/ui/Drawer";

function Header() {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const { user, isLoading } = useAuth();

  return (
    <header
      className={`bg-secondary-0 ${isLoading ? "bg-opacity-30 blur-md" : ""}`}
    >
      <div className="flex items-center justify-between py-5 px-4 lg:px-8">
        <ButtonIcon
          variant="outline"
          className="block lg:hidden border-none"
          onClick={() => setIsOpenDrawer(!isOpenDrawer)}
        >
          {isOpenDrawer ? <XMarkIcon /> : <Bars3Icon />}
        </ButtonIcon>

        <span className="text-sm lg:text-lg font-bold text-secondary-700">
          سلام؛ {user?.name}
        </span>

        <Link href="/profile">
          <Avatar src={user?.avatarUrl} />
        </Link>

        <Drawer open={isOpenDrawer} onClose={() => setIsOpenDrawer(false)}>
          <SideBar onClose={() => setIsOpenDrawer(false)} />
        </Drawer>
      </div>
    </header>
  );
}
export default Header;
