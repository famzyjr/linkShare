
import getStarted from "../../assets/icons/Group 273.png";

const CustomizeLink = () => {
  return (
    <div className="bg-white w-full max-w-[700px] min-h-[739px] rounded-t-[12px] flex flex-col">

      {/* Main content */}
      <div className="flex flex-col p-5 flex-1">

        {/* Heading */}
        <div className="flex flex-col gap-[10px] mb-5">
          <h2 className="font-bold text-[24px] text-[#333333]">
            Customize your links
          </h2>

          <p className="font-normal text-[16px] text-[#737373]">
            Add/edit/remove links below and then share all your profiles with
            the world!
          </p>
        </div>

        {/* Add new link button */}
        <button
          type="button"
          className="border border-[#633CFF] py-[11px] px-[27px] text-center rounded-[8px] w-full mb-5 hover:bg-[#EFEBFF] transition-colors"
        >
          <span className="text-[#633CFF] font-semibold text-[16px]">
            + Add new link
          </span>
        </button>

        {/* Empty state */}
        <div className="bg-[#FAFAFA] rounded-[12px] flex-1 min-h-[400px] flex flex-col justify-center items-center px-5 py-10">

          <img
            src={getStarted}
            alt="Get started illustration"
            className="w-[160px] h-auto object-contain mb-6"
          />

          <div className="flex flex-col justify-center items-center gap-6">
            <h3 className="font-bold text-[24px] text-[#333333] text-center">
              Let’s get you started
            </h3>

            <p className="font-normal text-[#737373] text-[16px] text-center max-w-[480px]">
              Use the “Add new link” button to get started. Once you have more
              than one link, you can reorder and edit them. We’re here to help
              you share your profiles with everyone!
            </p>
          </div>

        </div>
      </div>

      {/* Bottom footer with divider and Save button */}
      <div className="border-t border-[#EEEEEE] p-5 flex justify-end">
        <button
          type="button"
          disabled
          className="bg-[#BEADFF] text-white rounded-[8px] px-6 py-[11px] text-[14px] cursor-not-allowed"
        >
          Save
        </button>
      </div>

    </div>
  );
};

export default CustomizeLink;