import React from "react";

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex">
      <section className="">{children}</section>
    </main>
  );
}
