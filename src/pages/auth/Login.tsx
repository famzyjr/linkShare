import DeafultLogo from "../../components/DeafultLogo"
import Text from "../../components/Text"
const Login = () => {
  return (
    <>
      <div className="flex justify-center items-center m-12.5">
        <div className="flex flex-col gap-6">
          <div className="flex justify-center items-center gap-1.25">
            <DeafultLogo />
            <Text text="devlinks" />
          </div>

          <div className="login_con bg-[#FFFFFF] w-full h-full rounded-xl p-5   flex flex-col gap-8 ">
           <div className="flex flex-col m-5 gap-10">
             <div>
              <h2 className="font-bold text-[32px] text-[#333333]">Login</h2>
              <p className="font-normal text-[16px] text-[#737373]">Add your details below to get back into the app</p>
              </div>

            <div className="flex flex-col gap-6">
              <div className="flex flex-col">
                <label  htmlFor="email">Email</label>
                <input type="text" placeholder="e.g. alex@email.com" id="email"/>
              </div>

              <div className="flex flex-col">
                <label htmlFor="password">Password</label>
                <input type="text" />
              </div>
              <button className="bg-[#633CFF] rounded-lg w-99 h-11.5 text-[#FFFFFF]">Login</button>
              <div className="text-center">
           <span className="text-[16px] font-normal">Don’t have an account? <button className=" text-[#633CFF]">Create account</button></span>
              </div>

            </div>
           </div>
          </div>


        </div>
      </div>
    </>
  )
}

export default Login