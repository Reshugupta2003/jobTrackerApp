import React from "react";
import { useNavigate } from "react-router-dom";
import { HugeiconsIcon } from '@hugeicons/react';
import {
  Home09Icon,
  File02Icon,
  JobSearchIcon,
  Settings01Icon,
  Logout01Icon,
  ChromeIcon,
  SidebarLeft01Icon 
} from "@hugeicons/core-free-icons";
import '../../style/Header.css';

function Header() {
  const navigate = useNavigate();

  const navItem = [
    {
      name: "Home",
      slug: "/",
      icon: Home09Icon,
    },
    {
      name: "Job Tracker",
      slug: "/jobs",
      icon: JobSearchIcon,
    },
    {
      name: "Resume Analyzer",
      slug: "/dashboard",
      icon: File02Icon,
    },
    {
      name: "Extension",
      slug: "/jobs",
      icon: ChromeIcon,
    }
  ];

  const bottomNavItem = [
    {
      name: "Setting",
      slug: "/setting",
      icon: Settings01Icon,
    },
    {
      name: "Logout",
      slug: "/logout",
      icon: Logout01Icon,
    }
  ];

  return (
    // aside use to show aside content h-screen == 100vh
    <aside className="h-screen w-64 bg-gray-900 rounded-r-lg 
    shadow-[5px_0px_5px_rgba(0,0,0,0.4)] text-white p-4"> 

      {/* Sidebar Layout 
      1. flex flex-col	-> Arranges children vertically
      2. w-64 -> Calculation: 64 × 0.25rem = 16rem (or 64 × 4px = 256px).
      3. shadow-[X_axis_Y_axis_blur_rgba(R,G,Y,opacity)] 
      4. duration-500 -> hover effect shown after 500ms
      5. observe one thing h-screen, h-full, w-full in button normally make child with full size
      */}
      <nav className="flex flex-col h-full">

      <li><HugeiconsIcon
          icon={SidebarLeft01Icon}
          size={20}
          color="currentColor"
          strokeWidth={1.5}
        /></li>
        {/* Top Navigation */}
      <ul>
      {navItem.map((item) => (
      <li key={item.name}>
       <button
        onClick={() => navigate(item.slug)}
        className="w-full flex items-center justify-start gap-3 px-6 py-3 rounded-lg hover:bg-gray-700 duration-500"
        >
        <HugeiconsIcon
          icon={item.icon}
          size={20}
          color="currentColor"
          strokeWidth={1.5}
        />

        <span>{item.name}</span>
      </button>
    </li>
  ))}
</ul>

        {/* Bottom Navigation 
         1. border-t , add border line of its top
         2. mt-auto + flex flex-col is the key combination for pushing an element to the bottom, flex-col in parent tag
        */}
        
        <ul className="mt-auto border-t border-gray-700 hover:border-gray-500 pt-4 duration-1000">
          {bottomNavItem.map((item) => (
            <li key={item.name}>
              <button
                onClick={() => navigate(item.slug)}
                className="w-full flex text-center justify-start gap-3 px-6 py-3 rounded-lg hover:bg-gray-700 duration-500"
              >
                <HugeiconsIcon
          icon={item.icon}
          size={20}
          color="currentColor"
          strokeWidth={1.5}
        />
                <span>{item.name}</span>
              </button>
            </li>
          ))}
        </ul>

      </nav>
    </aside>
  );
}

export default Header;