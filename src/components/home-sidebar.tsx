import React from "react";

export default function HomeSidebar({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex">
      <section className="w-1/4 min-h-screen bg-black text-white">
        <h1 className="p-4 text-xl">Sidebar</h1>
      </section>
      <div className="w-3/4 max-h-screen bg-slate-500">{children}</div>
    </main>
  );
}
