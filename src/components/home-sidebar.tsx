import React from "react";

export default function HomeSidebar({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex">
      <section className="w-1/4 min-h-screen bg-black text-white">
        home-sidebar
      </section>
      <nav className="w-3/4 max-h-screen bg-slate-500">{children}</nav>
    </main>
  );
}
