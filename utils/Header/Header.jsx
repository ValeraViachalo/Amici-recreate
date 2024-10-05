import Link from "next/link";
import { Logo } from "../Logo/Logo";
import s from "./Header.module.scss";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className={s.header}>
      <Link href={pathname === "/" ? "/about" : "/"}>
        <Logo className={s.header__logo} />
      </Link>
    </header>
  );
};

export default Header;
