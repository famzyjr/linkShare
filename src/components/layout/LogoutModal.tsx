const LogoutModal = ({
  onCancel,
  onConfirm,
}: {
  onCancel: () => void;
  onConfirm: () => void;
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
      <div className="w-full max-w-[400px] rounded-2xl bg-white p-6 shadow-xl">

        <h2 className="text-[24px] font-bold text-[#333333]">
          Log out?
        </h2>

        <p className="mt-3 text-[16px] text-[#737373]">
          Are you sure you want to log out of your account?
        </p>

        <div className="mt-6 flex justify-end gap-3">
          <button
            type="button"
            onClick={onCancel}
            className="rounded-lg border border-[#D9D9D9]  cursor-pointer px-5 py-3 font-semibold text-[#333333] hover:bg-[#F5F5F5]"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={onConfirm}
            className="rounded-lg bg-[#633CFF] cursor-pointer px-5 py-3 font-semibold text-white hover:bg-[#5125E7]"
          >
            Log out
          </button>
        </div>

      </div>
    </div>
  );
};

export default LogoutModal;