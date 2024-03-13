import { PiSunDimFill } from "react-icons/pi";
import { BiSolidMoon } from "react-icons/bi";
import { useTheme } from "next-themes";

const ThemeSwitch: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const isActive = theme === "light";

  return (
    <div
      className="flex items-center justify-center cursor-pointer"
      onClick={toggleTheme}
    >
      <button className="focus:outline-none">
        {isActive ? (
          <PiSunDimFill size={24} className="text-yellow-500" />
        ) : (
          <BiSolidMoon size={24} className="text-gray-200" />
        )}
      </button>
    </div>
  );
};

export default ThemeSwitch;
