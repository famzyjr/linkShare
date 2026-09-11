import DeafultLogo from "../../components/DeafultLogo";
import Text from "../../components/Text";
import profileIcon from "../../assets/icons/Vector (3).png";
import LinkIcon from "../../assets/icons/Vector (2).png";

const Navbar = () => {
  return (
    <div className="m-2 sm:m-3 md:m-4">
      <div className="w-full bg-[#FFFFFF] py-3 px-3 sm:py-4 sm:px-4 md:px-6 rounded-xl flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center gap-2 sm:gap-3.5 cursor-pointer shrink-0">
          <DeafultLogo />

          {/* Hide text on small screens */}
          <div className="hidden sm:block">
            <Text text="devlinks" />
          </div>
        </div>


        {/* Navigation */}
        <div className="flex items-center gap-1 sm:gap-2 md:gap-4 lg:gap-7.5">

          {/* Links */}
          <div className="cursor-pointer bg-[#EFEBFF] py-2 px-3 sm:px-4 md:px-5 lg:px-6.75 rounded-lg">
            <div className="flex gap-2 items-center">

              <img
                src={LinkIcon}
                alt="Links"
                className="w-4 h-4 shrink-0"
              />

              <button className="hidden sm:block text-[#633CFF] font-semibold text-sm md:text-base">
                Links
              </button>

            </div>
          </div>


          {/* Profile Details */}
          <div className="cursor-pointer py-2 px-3 sm:px-4 md:px-5 lg:px-6.75 rounded-lg">
            <div className="flex gap-2 items-center">

              <img
                src={profileIcon}
                alt="Profile Details"
                className="w-4 h-4 shrink-0"
              />

              <button className="hidden sm:block cursor-pointer text-[#888888] font-semibold text-sm md:text-base">
                Profile Details
              </button>

            </div>
          </div>

        </div>


        {/* Preview */}
        <div className="cursor-pointer border border-[#633CFF] py-2 px-3 sm:px-4 md:px-5 lg:px-6.75 rounded-lg shrink-0">

          <button className="cursor-pointer text-[#633CFF] font-semibold text-sm md:text-base">
            Preview
          </button>

        </div>

      </div>
    </div>
  );
};

export default Navbar;