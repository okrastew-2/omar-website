import { HeaderButton } from "./HeaderButton.js";

export function Header() {
  return (
    <div className="h-16 flex justify-center duration-500 bg-gray-300">
      <div className="flex">
        <HeaderButton title="HOME" link="/" />
        <HeaderButton title="ABOUT ME" link="/aboutme" />
        <HeaderButton title="PAGE" link="/page2" />
        <HeaderButton title="PAGE" link="/page3" />
        <HeaderButton title="PAGE" to="/page4" />
      </div>
    </div>
  );
}
