import { Plus } from "lucide-react";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";

import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { MobileSidebar } from "./mobile-sidebar";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full h-16 px-6 bg-white text-black flex items-center justify-between shadow-md">
      
      {/* Left section: Mobile sidebar and Organization Switcher */}
      <div className="flex items-center gap-x-4">
        <MobileSidebar />
        <OrganizationSwitcher
          hidePersonal
          afterCreateOrganizationUrl="/organization/:id"
          afterLeaveOrganizationUrl="/select-org"
          afterSelectOrganizationUrl="/organization/:id"
          appearance={{
            elements: {
              rootBox: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
              },
            },
          }}
        />
      </div>

      {/* Center section: Logo */}
      <div className="flex justify-center">
        <Logo />
      </div>

      {/* Right section: Create button and User Button */}
      <div className="flex items-center gap-x-4">
        {/* Create button - Mobile */}
        <Button variant="secondary" size="sm" className="rounded-full md:hidden">
          <Plus className="h-4 w-4 text-white" />
        </Button>

        {/* Create button - Desktop */}
        {/* <Button variant="secondary" size="sm" className="rounded-full hidden md:block">
          Create
        </Button> */}

        {/* User button */}
        <UserButton
          afterSignOutUrl="/"
          appearance={{
            elements: {
              avatarBox: {
                height: 35,
                width: 35,
                borderRadius: "50%",
              },
            },
          }}
        />
      </div>
    </nav>
  );
};