import Image from "next/image";
import Link from "next/link";
import LogoImage from "@/assets/logo_adaptations/android-chrome-512x512.png";

const Logo = ({ variant = "dark" }: { variant?: "light" | "dark" }) => {
  return (
    <Link href={"/"} className="flex items-center gap-1">
      <Image
        src={LogoImage}
        alt="Clap"
        sizes="(max-width: 768px) 80px, 88px"
        className="w-10"
        priority
      />
      <span className={`font-pacifico text-xl ${variant == "dark" ? "text-gray-800" : "text-gray-200"}`}>Clap</span>
    </Link>
  );
};

export default Logo;
