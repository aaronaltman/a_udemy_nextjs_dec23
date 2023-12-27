import HomeNav from "@/components/home-nav";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section>
        <HomeNav />
      </section>
      <section>
        <h1>Page</h1>
      </section>
      <Image alt="hello" src="/images/nextjs.png" width={200} height={200} />
    </div>
  );
}
