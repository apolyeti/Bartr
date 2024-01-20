import Image from "next/image";

export default function Home() {
  return (
    <main>

      <div>
        <Image
          src= "/bartrlogo.svg"
          alt="BartrLogo"
          width={160}
          height={37}
        />
      </div>

    </main>
  );
}
