
import { useForm, type SubmitHandler } from "react-hook-form";
import DeafultLogo from "../../components/DeafultLogo";
import Text from "../../components/Text";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";
import EmailIocn from "../../assets/icons/ph_envelope-simple-fill.png";
import passWordIcon from "../../assets/icons/lock.png";

const schema = z.object({
  email: z.email(),
  password: z.string().min(1, {
    message: "Password is required",
  }),
});

type FormsFields = z.infer<typeof schema>;

const Login = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormsFields>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FormsFields> = async (data) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      // The signed-in user info
      const user = userCredential.user;

      reset();
      navigate("/dashboard");
    } catch (error: any) {
      if (error.code === "auth/invalid-credential") {
        setError("root", {
          message: "Incorrect email or password.",
        });
      } else if (error.code === "auth/too-many-requests") {
        setError("root", {
          message: "Too many failed attempts. Please try again later.",
        });
      } else {
        setError("root", {
          message: "Unable to log in. Please try again.",
        });
      }
    }
  };

  return (
    <>
      <div className="flex justify-center items-center m-12.5">
        <div className="flex flex-col gap-6">

          {/* Logo */}
          <div className="flex justify-center items-center gap-1.25">
            <DeafultLogo />
            <Text text="devlinks" />
          </div>

          {/* Login Container */}
          <div className="login_con bg-[#FFFFFF] w-full h-full rounded-xl p-5 flex flex-col gap-8">

            <div className="flex flex-col m-5 gap-10">

              {/* Heading */}
              <div>
                <h2 className="font-bold text-[32px] text-[#333333]">
                  Login
                </h2>

                <p className="font-normal text-[16px] text-[#737373]">
                  Add your details below to get back into the app
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit(onSubmit)}>

                <div className="flex flex-col gap-6">

                  {/* Email */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email">
                      Email
                    </label>

                    {/* Input Container */}
                    <div className="relative">
                      <img
                        src={EmailIocn}
                        alt=""
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5"
                      />

                      <input
                        {...register("email")}
                        type="text"
                        placeholder="e.g. alex@email.com"
                        id="email"
                        className="w-[396px] h-12 rounded-lg border-2 border-[#D9D9D9] py-3 px-4 pl-12 outline-none"
                      />
                    </div>

                    {errors.email && (
                      <div className="text-red-600">
                        {errors.email.message}
                      </div>
                    )}
                  </div>

                  {/* Password */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="password">
                      Password
                    </label>

                    {/* Input Container */}
                    <div className="relative">
                      <img
                        src={passWordIcon}
                        alt=""
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5"
                      />

                      <input
                        type="text"
                        {...register("password")}
                        id="password"
                        placeholder="Enter Your password"
                        className="w-[396px] h-12 rounded-lg border-2 border-[#D9D9D9] py-3 px-4 pl-12 outline-none"
                      />
                    </div>

                    {errors.password && (
                      <div className="text-red-600">
                        {errors.password.message}
                      </div>
                    )}
                  </div>

                  {/* Root Error */}
                  {errors.root && (
                    <div className="text-red-600">
                      {errors.root.message}
                    </div>
                  )}

                  {/* Login Button */}
                  <button
                    disabled={isSubmitting}
                    className="bg-[#633CFF] cursor-pointer rounded-lg w-99 h-11.5 text-[#FFFFFF]"
                  >
                    {isSubmitting ? "Loading..." : "Login"}
                  </button>

                  {/* Create Account */}
                  <div className="text-center">
                    <span className="text-[16px] font-normal">
                      Don’t have an account?{" "}
                      <button className="text-[#633CFF]">
                        <Link to="/signup">
                          Create account
                        </Link>
                      </button>
                    </span>
                  </div>

                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

