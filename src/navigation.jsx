import { useState, useEffect } from "react";
import { SearchIcon, MenuIcon } from "@heroicons/react/outline";
import { XIcon } from "@heroicons/react/solid";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/outline";

function SmallScreenNav({ isOpen, toggleNav,  }) {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-[60%] bg-white shadow-lg transform ${
        isOpen ? "translate-x-0" : "translate-x-[100vw]"
      } md:hidden ease-in-out duration-500 pl-[3%] pr-[3%]`}
    >
      <nav className="flex justify-end h-[10vh]">
        <button className=" mr-[3rem]">
          <SearchIcon className="text-black h-6 w-6 " />
        </button>
        <button onClick={toggleNav} className=" mr-[3rem]">
          <XIcon
            className={`${
              isOpen ? '' : "rotate-180 duration-100 ease-in"
            }h-6 w-6 text-black`}
          />
        </button>
      </nav>
      <ul className="flex flex-col space-y-4 ml-[2rem] mt-[2rem]">
        <li className="whitespace-nowrap flex justify-between hover:bg-slate-400 bg-slate-300 ease-in duration-150 w-[85%] p-3 rounded-lg">
          <a href="#" className="">
            ቀዳሚ ገጽ
          </a>
        </li>
        <li className="whitespace-nowrap flex justify-between hover:bg-slate-400 bg-slate-300 ease-in duration-150 w-[85%] p-3 rounded-lg">
          <a href="#">ስለ ማኅበሩ</a>
          <ChevronRightIcon className="text-gray-600 h-[1rem]" />
        </li>
        <li className="whitespace-nowrap flex justify-between hover:bg-slate-400 bg-slate-300 ease-in duration-150 w-[85%] p-3 rounded-lg">
          <a href="#">ትምህርቶች</a>
          <ChevronRightIcon className="text-gray-600 h-[1rem]" />
        </li>
        <li className="whitespace-nowrap flex justify-between hover:bg-slate-400 bg-slate-300 ease-in duration-150 w-[85%] p-3 rounded-lg">
          <a href="#">ጊቢ ጉባኤ</a>
        </li>
        <li className="whitespace-nowrap flex justify-between hover:bg-slate-400 bg-slate-300 ease-in duration-150 w-[85%] p-3 rounded-lg">
          <a href="#">ሌሎች ድረ ገጾች</a>
          <ChevronRightIcon className="text-gray-600 h-[1rem]" />
        </li>
        <li className="whitespace-nowrap flex justify-between hover:bg-slate-400 bg-slate-300 ease-in duration-150 w-[85%] p-3 rounded-lg">
          <a href="#">ቋንቋ</a>
          <ChevronRightIcon className="text-gray-600 h-[1rem]" />
        </li>
        <li className="whitespace-nowrap flex justify-between hover:bg-slate-400 bg-slate-300 ease-in duration-150 w-[85%] p-3 rounded-lg">
          <a href="#">ያግኙን</a>
          <ChevronRightIcon className="text-gray-600 h-[1rem]" />
        </li>
      </ul>
    </div>
  );
}
function Logo({small}) {
  return (
    <div className="flex items-center space-x-4">
      {/* Logo Image */}
      <img
        src="logo.png"
        alt="MK-Logo"
        className={`${
          small ? "h-[6vh]" : "w-12 h-auto ml-4 md:w-20 lg:w-16 xl:w-20"
        }`}
      />

      {/* Text Content */}
      <div className="text-left">
        <h2
          className={` ${
            small
              ? "text-[0.8rem] md:text-[0.8rem] md:hidden lg:block text-gray-900 font-semibold leading-snug"
              : "text-[1rem] md:text-[01rem] text-gray-900 font-semibold leading-snug md:hidden lg:block "
          }`}
        >
          በኢትዮጵያ ኦርቶዶድስ ተዋህዶ ቤተክርስቲያን <br />
          በሰንበት ትምህርት ቤቶች ማደራጃ መምሪያ
        </h2>
        <h2
          className={`${
            small
              ? "hidden"
              : "text-red-600 text-[0.8rem] font-bold md:hidden lg:text-[0.8rem] lg:block  "
          }`}
        >
          ማኅበራዊ ጉዳዮች
        </h2>
      </div>
    </div>
  );
}

function Body() {
  const [isOpen, setIsOpen] = useState(false);
  const [rotated, setRotated] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [about, setAbout] = useState(false);
  const [learn, setLearn] = useState(false);
  const [others, setOthers] = useState(false);
  const [language, setLanguage] = useState(false);
  const [small, setSmall] = useState(false);

  useEffect(() => {
    const handleScroll = () => setSmall(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };
  const toggleAboutEnter = () => {
    setAbout(true);
  };
  const toggleAboutLeave = (e) => {
    if (e.relatedTarget && e.relatedTarget.closest(".excludeAbout")) {
      return; // Skip if mouse enters the excluded area
    }
    setAbout(false); // Hide if the mouse leaves completely
  };

  const toggleLearnEnter = () => {
    setLearn(true);
  };
  const toggleLearnLeave = (e) => {
    if (e.relatedTarget && e.relatedTarget.closest(".excludeLearn")) {
      return; // Skip if mouse enters the excluded area
    }
    setLearn(false); // Hide if the mouse leaves completely
  };
  const toggleOthersEnter = () => {
    setOthers(true);
  };
  const toggleOthersLeave = (e) => {
    if (e.relatedTarget && e.relatedTarget.closest(".excludeOthers")) {
      return; // Skip if mouse enters the excluded area
    }
    setOthers(false); // Hide if the mouse leaves completely
  };
  const toggleLanguageEnter = () => {
    setLanguage(true);
  };
  const toggleLanguageLeave = (e) => {
    if (e.relatedTarget && e.relatedTarget.closest(".excludeLanguage")) {
      return; // Skip if mouse enters the excluded area
    }
    setLanguage(false);
  };

  return (
    <div>
      <div onClick={isOpen ? toggleNav : undefined} className="bg-[#295CA4]">
        <header className="w-[100%]">
          <div
            className={`fixed top-0 left-0 w-full flex justify-between bg-[url('cloud.png')] bg-cover bg-center backdrop-blur-sm transition-all duration-300 pl-[5%] pr-[5%] ${
              small ? "h-[8vh] pl-[7%] pr-[7%]" : "h-[10vh] md:h-[15vh]"
            }`}
          >
            <Logo small={small} />
            <nav className="h-[100%]">
              <ul className="hidden md:flex  text-gray h-[100%] justify-center">
                <li className="h-[100%] flex flex-col justify-end hover:bg-slate-300 hover:bg-opacity-20 hover:text-gray-900 duration-100 ">
                  <a
                    href="#"
                    className="whitespace-nowrap block mt-auto pr-[1vw] pl-[1vw]"
                  >
                    ቀዳሚ ገጽ
                  </a>
                  <span className="block w-[fill] h-[2px] bg-red-900 rounded-full mt-auto duration-100"></span>
                </li>
                <li
                  className={`h-[100%] flex flex-col justify-end hover:bg-slate-300 hover:bg-opacity-20 hover:text-gray-900 duration-300 ease-in group`}
                  onMouseEnter={toggleAboutEnter}
                  onMouseLeave={toggleAboutLeave}
                >
                  <a
                    href="#"
                    className="whitespace-nowrap block mt-auto pr-[1vw] pl-[1vw]"
                  >
                    ስለማኅበሩ
                  </a>
                  <span className="block w-[fill] h-[2px] group-hover:bg-red-900 rounded-full mt-auto duration-300 ease-in"></span>
                  <div
                    className={`${
                      about
                        ? "grid grid-cols-2 max-w-[400px] absolute top-full bg-white rounded divide-x divide-gray-400 rounded-tl-none"
                        : "hidden"
                    } excludeAbout`}
                    onMouseLeave={toggleAboutLeave}
                  >
                    <section className="ml-[0.5rem] mt-[0.5rem] mb-[0.5rem] mr-0 pr-0">
                      <h2 className="font-bold p-1 pl-2">ማዕከላት</h2>
                      <ul className="text-gray-700">
                        <li className="hover:bg-slate-300 duration-300 ease-out w-40 p-1 rounded">
                          ሰሜን አሜሪካ
                        </li>
                        <li className="hover:bg-slate-300 w-40 p-1 rounded duration-300 ease-out">
                          አውሮፓ
                        </li>
                        <li className="hover:bg-slate-300 w-40 p-1 rounded duration-300 ease-out">
                          ሩቅ ምሥራቅ
                        </li>
                        <li className="hover:bg-slate-300 w-40 p-1 rounded duration-300 ease-out">
                          ደቡባዊ አፍሪካ
                        </li>
                        <li className="hover:bg-slate-300 w-40 p-1 rounded duration-300 ease-out">
                          የካናዳ ማዕከል
                        </li>
                        <li className="hover:bg-slate-300 w-40 p-1 rounded duration-300 ease-out">
                          የአዲስ አበባ ማዕከል
                        </li>
                        <li className="hover:bg-slate-300 w-36 ml-4 p-1 rounded duration-300 ease-out">
                          የወርሃዊ አስተዋጽኦ መሰብሰቢያ
                        </li>
                      </ul>
                    </section>
                    <section className="p-[0.5rem] mt-[rem] mb-[0.5rem] pr-[1rem]">
                      <h2 className="font-bold p-1">ኅትመትና ሚዲያ</h2>
                      <ul className="text-gray-700">
                        <li
                          li
                          className="hover:bg-slate-300 w-40 p-1 rounded duration-300 ease-out"
                        >
                          ሃመር እና ስምዐ ጽድቅ
                        </li>
                        <li
                          li
                          className="hover:bg-slate-300 w-40 p-1 rounded duration-300 ease-out"
                        >
                          ማኅበረ ቅዱሳን ቲቪ
                        </li>
                        <li
                          li
                          className="hover:bg-slate-300 w-40 p-1 rounded duration-300 ease-out"
                        >
                          የማኅበረ ቅዱሳን ዩቲዩብ
                        </li>
                        <li
                          li
                          className="hover:bg-slate-300 w-40 p-1 rounded duration-300 ease-out"
                        >
                          መጽሔተ ተልዕኮ
                        </li>
                        <li
                          li
                          className="hover:bg-slate-300 w-40 p-1 rounded duration-300 ease-out"
                        >
                          ማዕከለ ሥዕላት
                        </li>
                        <li className="hover:bg-slate-300 w-36 ml-4 p-1 rounded duration-300 ease-out">
                          ካሜራው ምን ይላል
                        </li>
                        <li className="hover:bg-slate-300 w-36 ml-4 p-1 rounded duration-300 ease-out">
                          የቅዱሳት ሥዕላት ማኅደር
                        </li>
                      </ul>
                    </section>
                  </div>
                </li>

                <li
                  className={`h-[100%] flex flex-col justify-end hover:bg-slate-300 hover:bg-opacity-20 hover:text-gray-900 duration-300 ease-in group `}
                  onMouseEnter={toggleLearnEnter}
                  onMouseLeave={toggleLearnLeave}
                >
                  <a
                    href="#"
                    className="whitespace-nowrap block mt-auto pr-[1vw] pl-[1vw]"
                  >
                    ትምህርቶች
                  </a>
                  <span className="block w-[fill] h-[2px] group-hover:bg-red-900 rounded-full mt-auto duration-300 ease-in"></span>
                  <div
                    className={`${
                      learn
                        ? "grid grid-cols-1 max-w-[300px] absolute top-full bg-white rounded divide-x divide-gray-400 rounded-tl-none"
                        : "hidden"
                    } excludeLearn`}
                    onMouseLeave={toggleLearnLeave}
                  >
                    <ul className="text-gray-700">
                      <li className="hover:bg-slate-300 rounded duration-300 ease-out p-1">
                        የርቀት ትምህርት
                      </li>
                      <li className="hover:bg-slate-300 rounded duration-300 ease-out p-1">
                        ስብከት
                      </li>
                      <li className="hover:bg-slate-300 rounded duration-300 ease-out p-1">
                        መሰረታዊ የቤተ ክርስቲያን ትምህርቶች
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="h-[100%] flex flex-col justify-end hover:bg-slate-300 hover:bg-opacity-20 hover:text-gray-900 duration-300 ease-in group ">
                  <a
                    href="#"
                    className="whitespace-nowrap block mt-auto pr-[1vw] pl-[1vw]"
                  >
                    ጊቢ ጉባኤ
                  </a>
                  <span className="block w-[fill] h-[2px] group-hover:bg-red-900 rounded-full mt-auto duration-300 ease-in"></span>
                </li>
                <li
                  className={`h-[100%] flex flex-col justify-end hover:bg-slate-300 hover:bg-opacity-20 hover:text-gray-900 duration-300 ease-in group `}
                  onMouseEnter={toggleOthersEnter}
                  onMouseLeave={toggleOthersLeave}
                >
                  <a
                    href="#"
                    className="whitespace-nowrap block mt-auto pr-[1vw] pl-[1vw]"
                  >
                    ሌሎች ድረ ገጾች
                  </a>
                  <span className="block w-[fill] h-[2px] group-hover:bg-red-900 rounded-full mt-auto duration-300 ease-in"></span>
                  <div
                    className={`${
                      others
                        ? "grid grid-cols-1 max-w-[300px] absolute top-full bg-white rounded divide-x divide-gray-400 rounded-tl-none"
                        : "hidden"
                    } excludeOthers`}
                    onMouseLeave={toggleOthersLeave}
                  >
                    <ul className="text-gray-700">
                      <li className="hover:bg-slate-300 rounded duration-300 ease-out p-1">
                        በኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተክርስቲያን መንበረ ፓትርያርክ የብፁዕ ወቅዱስ ልዩ
                        ጽ/ቤት ድረ ገጽ
                      </li>
                      <li className="hover:bg-slate-300 rounded duration-300 ease-out p-1">
                        በኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተክርስቲያን የአዲስ አበባ ሃገረ ስብከት ድረ ገጽ
                      </li>
                      <li className="hover:bg-slate-300 rounded duration-300 ease-out p-1">
                        በኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተክርስቲያን ሰንበት ትምህርት ቤቶች ማደራጃ መምሪያ ድረ
                        ገጽ
                      </li>
                    </ul>
                  </div>
                </li>
                <li
                  className={`h-[100%] flex flex-col justify-end hover:bg-slate-300 hover:bg-opacity-20 hover:text-gray-900 duration-300 ease-in group `}
                  onMouseEnter={toggleLanguageEnter}
                  onMouseLeave={toggleLanguageLeave}
                >
                  <a
                    href="#"
                    className="whitespace-nowrap block mt-auto pr-[1vw] pl-[1vw]"
                  >
                    ቋንቋ
                  </a>
                  <span className="block w-[fill] h-[2px] group-hover:bg-red-900 rounded-full mt-auto duration-300 ease-in"></span>
                  <div
                    className={`${
                      language
                        ? "grid grid-cols-1 max-w-[300px] absolute top-full xl:left-[70vw] bg-white rounded divide-x divide-gray-400 rounded-tl-none"
                        : "hidden"
                    } excludeLanguage`}
                    onMouseLeave={toggleLanguageLeave}
                  >
                    <ul className="text-gray-700">
                      <li className="hover:bg-slate-300 rounded duration-300 ease-out p-1">
                        አማርኛ
                      </li>
                      <li className="hover:bg-slate-300 rounded duration-300 ease-out p-1">
                        ትግርኛ
                      </li>
                      <li className="hover:bg-slate-300 rounded duration-300 ease-out p-1">
                        ወላይትኛ
                      </li>
                      <li className="hover:bg-slate-300 rounded duration-300 ease-out p-1">
                        ሲዳምኛ
                      </li>
                      <li className="hover:bg-slate-300 rounded duration-300 ease-out p-1">
                        Affan Oromo
                      </li>
                      <li className="hover:bg-slate-300 rounded duration-300 ease-out p-1">
                        English
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="h-[100%] flex flex-col justify-end hover:bg-slate-300 hover:bg-opacity-20 hover:text-gray-900 duration-300 ease-in group">
                  <a
                    href="#"
                    className="whitespace-nowrap block mt-auto pr-[1vw] pl-[1vw]"
                  >
                    ያግኙን
                  </a>
                  <span className="block w-[fill] h-[2px] group-hover:bg-red-900 rounded-full mt-auto duration-300 ease-in"></span>
                </li>
              </ul>
            </nav>
            <button
              className="ml-[1rem]"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <SearchIcon className="text-blue-500 h-6 w-6 md:mr-[1rem]" />
            </button>

            {isSearchOpen && (
              <div className="absolute top-10 right-[1rem] left-[60%] bg-white p-2 shadow-md rounded-lg flex">
                <div className="flex w-full border rounded-md focus-within:ring-1 focus-within:ring-blue-400">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full focus:outline-none"
                  />
                  <button type="submit">
                    <SearchIcon className="h-6 w-6  text-gray-500" />
                  </button>
                  <XIcon
                    className="h-8 w-8 ml-2 mr-2 cursor-pointer mt-1 text-gray-500"
                    onClick={() => setIsSearchOpen(false)}
                  />
                </div>
              </div>
            )}

            <button className="mr-[1rem] md:hidden">
              <MenuIcon
                className={`h-6 w-6 text-gray-900 ease-in-out duration-500 ${
                  rotated ? "rotate-180" : "rotate-0"
                }`}
                onClick={() => {
                  toggleNav();
                  setRotated(!rotated);
                }}
              />
            </button>
          </div>
        </header>
        <section className="bg-[#015896] block h-[40vh] mt-[10vh] md:mt-[15vh]">
          <h2 className=" bg-[black] bg-opacity-[0.5] bg w-max m-auto text-center text-3xl text-white whitespace-nowrap pl-[0.5rem] pr-[0.5rem]">
            እንኳን ደህና መጡ!
          </h2>
          <img src="logo.png" className="justify-center m-auto  h-[35vh]" />
        </section>
      </div>
      <SmallScreenNav isOpen={isOpen} toggleNav={toggleNav} />
    </div>
  );
}

export default Body;
