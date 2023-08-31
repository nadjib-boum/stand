import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <div>
      <Link href="/">
        <Image src={"/logo.png"} height={42} width={42} alt="logo" />
      </Link>
    </div>
  );
};

export default Logo;
