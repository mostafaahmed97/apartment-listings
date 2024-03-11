import Image from 'next/image';
import Link from 'next/link';

function TopBar() {
  return (
    <div className="flex flex-row items-center p-4 shadow-lg">
      <div className="mr-4">
        <Image src="./house.svg" width={30} height={30} alt="House" />
      </div>

      <Link href={`/listings`}>
        <div className="font-bold">Listings Hero</div>
      </Link>
    </div>
  );
}

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="">
      <TopBar />

      <div className="p-4">{children}</div>
    </div>
  );
}
