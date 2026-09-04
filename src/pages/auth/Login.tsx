import { useForm, type SubmitHandler } from "react-hook-form"
import DeafultLogo from "../../components/DeafultLogo"
import Text from "../../components/Text"



type FormsFields ={
email:string;
password:string;
}
const Login = () => {

const {register,
   handleSubmit,
   setError,
  formState:{errors,isSubmitting}} = useForm<FormsFields>()

const onSubmit:SubmitHandler<FormsFields> = async(data)=>{
try{
 await new Promise((resolve)=> setTimeout(resolve,1000))  
 throw new Error()
}catch(error){
setError('root',{
 message:'This email is already taken'
})
}
console.log(data)
}


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

              <form onSubmit={handleSubmit(onSubmit)} >

                <div className="flex flex-col gap-6">
                  <div className="flex flex-col">
                    <label htmlFor="email">Email</label>
                    <input
                     {...register('email',{
                      required:'Email is required',
                       validate:(value)=>{
                        if(!value.includes('@')){
                         return "Email is requried";
                        }
                        return true
                       }
                     })}
                      type="text"
                      placeholder="e.g. alex@email.com"
                      id="email"
                    
                    />
                    {errors.email && <div className="text-red-600">{errors.email.message}</div>}
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="password">Password</label>
                    <input type="text"
                     {...register('password',{
                      required:'Password is requried',
                      minLength:{
                       value:8,
                       message: 'Password must contain 8 characters'
                      },
                     })}
                      id="password"
                      placeholder="Enter Your password"

                    />
                    {errors.password && <div className="text-red-600">{errors.password.message}</div>}
                  </div>
                     {errors.root && <div className="text-red-600">{errors.root.message}</div>}
                  <button disabled={isSubmitting} className="bg-[#633CFF] rounded-lg w-99 h-11.5 text-[#FFFFFF]">{isSubmitting ? 'Loading...':'Login'}</button>
                  <div className="text-center">
                    <span className="text-[16px] font-normal">Don’t have an account? <button className=" text-[#633CFF]">Create account</button></span>
                  </div>
                </div>
                
              </form>
            </div>
          </div>


        </div>
      </div>
    </>
  )
}

export default Login