

import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/logo-a.png";

function Logo() {
  return (
    <Link href="/" className="h-[60%] mdx:h-[73%] w-auto items-center flex">
      <Image
        src={logo}
        width={300}
        height={300}
        alt="ASH Logo"
        className="h-[100%] w-auto"
      />
    </Link>
  );
}

export default Logo;
