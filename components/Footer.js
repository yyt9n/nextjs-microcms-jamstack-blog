import Image from "next/image";

export default function Footer () {
  return (
    <div>
      <footer className="">
          <a
              className=""
              href=""
              target=""
              rel=""
          >
              ©2022 久松畜産「手づくり工房ぴあらハム」All Rights Reserved.
              <Image src="/hamsauya-icon.png" alt="Vercel Logo" width={50} height={50} />
          </a>
      </footer>
    </div>
  );
}