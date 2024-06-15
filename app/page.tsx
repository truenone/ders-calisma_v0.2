import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import Image from "next/image";

import { AiOutlineEnter } from "react-icons/ai";
import { IoLogInOutline } from "react-icons/io5";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 w-full h-full">

      <div className="flex flex-col gap-4 items-center justify-center md:flex-row">
        <Image alt="Ders calisan çocuk" height={750} width={750} className="animate-up-down" src={'/mainpage.png'}></Image>
        <h1 className="md:text-8xl font-extrabold text-5xl md:text-left text-center">En yüksek netlere bizimle ulaşın</h1>
      </div>
      <div className="flex gap-3">
        <Link

          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href={'/kayit'}
        >
          <IoLogInOutline />
          Kayıt Ol
        </Link>
        <Link

          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={'/giris'}
        >
          <AiOutlineEnter />
          Giriş Yap
        </Link>
      </div>
      <div className="bg-dots w-full h-full "></div>
    </section>
  );
}
