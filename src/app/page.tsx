import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Page</h1>
      <Image alt="hello" src="/images/nextjs.png" width={200} height={200} />
    </div>
  );
}
