import Image from "next/image";

export default function Home() {
  return (
    <main>

      <div>
        <Image
          src= "/bartrlogo.svg"
          alt="BartrLogo"
          width={150}
          height={37}
        />
      </div>

    </main>
  );
}
