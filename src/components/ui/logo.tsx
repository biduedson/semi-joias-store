import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <div className="logo">
        <Image
          src="/images/elite-diamond-logo-2-x.png"
          height={0}
          width={0}
          className=" w-[109px] h-[55px]"
          sizes="100vw"
          alt="logo"
        />
      </div>
    </Link>
  );
};

export default Logo;
