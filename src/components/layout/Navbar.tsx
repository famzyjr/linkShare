import DeafultLogo from "../../components/DeafultLogo";
import Text from "../../components/Text";
import profileIcon from "../../assets/icons/Vector (3).png";
import LinkIcon from "../../assets/icons/Vector (2).png";
import { signOut} from "firebase/auth";
import {auth} from '../../pages/auth/firebase/firebaseConfig';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import LogoutModal from "./LogoutModal";

const Navbar = () => {
const [showLogoutModal,setShowLogoutModal] = useState(false);
  const handleLogout = async()=>{
   try{
    await  signOut(auth);
    setShowLogoutModal(false);
    navigate('/login')
   }catch(error){
   console.error('Log out error',error)
   }
  }
const navigate = useNavigate();

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

        {/* Logout */}
        <div className="">
          <button className="cursor-pointer flex items-center gap-2" onClick={()=> setShowLogoutModal(true)}><svg aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="68"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#888888"
            stroke-width="2.25"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
            <path d="M9 12h12l-3 -3" />
            <path d="M18 15l3 -3" />
          </svg>
                    <span className="text-[#888888] font-semibold text-sm md:text-base">Logout</span>
          </button> 

        </div>
        {showLogoutModal && <button >
          <LogoutModal 
          onCancel={()=> setShowLogoutModal(false)}
           onConfirm={handleLogout}/>
        </button>}

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