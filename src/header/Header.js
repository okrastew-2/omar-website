import { HeaderButton } from "./HeaderButton.js";

export function Header() {
  return (
    <div className="h-16 flex justify-center duration-500 bg-gray-300">
      <div className="flex">
        <HeaderButton title="HOME" link="/" />
        <HeaderButton title="ONE" link="/page1" />
        <HeaderButton title="TWO" link="/page2" />
        <HeaderButton title="THREE" link="/page3" />
        <HeaderButton title="FOUR" to="/page4" />
      </div>
    </div>
  );
}
