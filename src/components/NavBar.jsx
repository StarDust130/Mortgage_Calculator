/* eslint-disable react/prop-types */
import DarkMode from "./DarkMode/DarkMode";

const NavBar = ({ color }) => {
  return (
    <>
      <div className="h-16 w-scree bg-neutral-500 flex items-center justify-between">
        <span className="flex-1 text-center">Mortgage Calculator</span>
        <span>
          <DarkMode color={color} />
        </span>
      </div>
    </>
  );
};
export default NavBar;
