import DeafultLogo from "../../components/DeafultLogo";
import Text from "../../components/Text";

const Navbar = () => {
    return (
        <div className="m-5" >
            <div className="w-full bg-[#FFFFFF]  py-4 px-6 rounded-xl flex justify-between items-center">
                <div className="flex items-center gap-3.5">
                    <DeafultLogo />
                    <Text text="devlinks" />
                </div>
               <div className="flex gap-7.5">
                <div className=" cursor-pointer bg-[#EFEBFF] py-2.75 px-6.75 rounded-lg ">
                <button className="text-[#633CFF] font-semibold">Links</button>
                </div>
                <div className=" cursor-pointer  py-2.75 px-6.75 rounded-lg ">
                <button className="cursor-pointer text-[#888888] font-semibold">Profile Details</button>
                </div>
               </div>
                <div  className=" cursor-pointer border border-[#633CFF] py-2.75 px-6.75 rounded-lg ">
                 <button className="cursor-pointer text-[#633CFF] font-semibold">preview</button>
                </div>

            </div>
        </div>
    )
}

export default Navbar