import { useState } from "react";

function Header(props) {
  const { onDarkModeClick } = props;
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDarkModeClick = () => {
    setIsDarkMode(!isDarkMode);
    onDarkModeClick(!isDarkMode);
  };

  return (
    <header>
      <nav>
        <button onClick={handleDarkModeClick}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </nav>
    </header>
  );
}

export default Header;