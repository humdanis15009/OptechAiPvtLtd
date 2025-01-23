import { useState, useEffect, useRef } from "react";

const Header = ({ navigation, companyInfo }) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef(null);

  // Close the dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = (name) => {
    setOpenDropdown((prev) => (prev === name ? null : name));
  };

  return (
    <header className="flex items-center justify-between px-8 py-4 bg-blue-900">
      <a
        href="/"
        className="text-white text-2xl md:text-4xl font-bold flex items-center gap-2"
      >
        <img src={companyInfo.logo1} alt="logo" className="h-10 md:h-16" />
        {companyInfo.name}
      </a>
      <nav className="hidden md:flex items-center space-x-8">
        {navigation.map((item) => (
          <div
            key={item.name}
            className="relative"
            ref={openDropdown === item.name ? dropdownRef : null}
          >
            {item.options ? (
              <>
                {/* Dropdown Trigger */}
                <button
                  onClick={() => toggleDropdown(item.name)}
                  className="text-white hover:text-gray-300 flex items-center space-x-1"
                >
                  {item.name}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {/* Dropdown Menu */}
                {openDropdown === item.name && (
                  <div className="absolute left-0 top-full bg-white shadow-md rounded-md mt-2 py-2 z-10">
                    {item.options.map((option) => (
                      <a
                        key={option.name}
                        href={option.href}
                        className="px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors block"
                      >
                        {option.name}
                      </a>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <a href={item.to} className="text-white hover:text-gray-300">
                {item.name}
              </a>
            )}
          </div>
        ))}
      </nav>

      <button className="bg-blue-600 text-white px-8 py-4 rounded hover:bg-blue-700 transition-colors">
        Contact Us
      </button>
    </header>
  );
};

export default Header;
