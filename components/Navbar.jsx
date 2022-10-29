import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

const Navbar = () => {
  const router = useRouter();
  return (
    <nav className="py-10 px-10  z-0 flex justify-between font-Source">
      <Link href={"/"}>
        {/* <h1
          className={`cursor-pointer ${
            router.pathname == "/" ? "underline" : ""
          } text-lime-600 font-semibold`}
        >
          {" "}
          Anand Mohanan
        </h1> */}
        <Image
          src="/blob.svg"
          className="animate-bounce"
          width={30}
          height={30}
        />
      </Link>

      <ul className="flex items-center">
        <Link href={"/about"}>
          <li
            className={`cursor-pointer ${
              router.pathname == "/about" ? "underline" : ""
            } text-prim font-semibold`}
          >
            About
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
