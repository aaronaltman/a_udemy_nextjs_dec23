import React from "react";
import { firstNavigation } from "@/constants/main_nav";
import Link from "next/link";

export default function MainNav1() {
  return (
    <main>
      <nav className="bg-zinc-100">
        <ul className="flex gap-5 px-4 py-10">
          {firstNavigation.map((item) => {
            return (
              <Link href={item.path}>
                <li key={item.path}>{item.name}</li>
              </Link>
            );
          })}
        </ul>
      </nav>
    </main>
  );
}
