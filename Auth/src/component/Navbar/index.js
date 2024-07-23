import { Link } from "react-router-dom";
export function HeaderNavbar({ isLogin = false }) {
  return (
    <>
      <div className="lg:hidden">
        {!isLogin ? (
          <div className="flex flex-col items-center w-full">
            <img
              src="/images/login-user.svg"
              className="mt-12 md:mt-6"
              width={85}
              height={85}
              alt="login icon"
            />
            <h1 className="poppins-semibold mt-2 mb-4 text-base">Log In</h1>
            <div className="flex gap-2">
              <span className="text-right poppins-regular">
                New in Paymorz?
              </span>{" "}
              <span className="text-right">
                <Link
                  to="/accounts/signup"
                  className="color-linear underline"
                  style={{
                    textDecoration: "underline",
                  }}
                >
                  Sign Up
                </Link>
              </span>
            </div>
          </div>
        ) : (
          <>
            <div className="flex flex-col items-center w-full">
              <img
                src="/images/login-user.svg"
                className="mt-12 md:mt-6"
                width={85}
                height={85}
                alt="login icon"
              />
              <h1 className="poppins-semibold mt-2 mb-4 text-base">Sign Up</h1>
              <div className="flex gap-2">
                <span className="text-right poppins-regular">
                  Already Have An Account?
                </span>{" "}
                <span className="text-right">
                  <Link
                    to="/accounts/login"
                    className="color-linear underline"
                    style={{
                      textDecoration: "underline",
                    }}
                  >
                    Log In
                  </Link>
                </span>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="hide md:flex justify-between sm:pt-8 sm:px-12">
        <div className="flex">
          <img src="/images/paymorz-logo.png" alt="paymorz-logo" />
          <div className="italic pl-1 font-extrabold from-neutral-900 text-xl">
            Paymorz
            <span className="pl-1 text-2xl font-extrabold size-14 color-linear">
              .
            </span>
          </div>
        </div>
        {!isLogin ? (
          <div className="flex flex-col">
            <span className="text-right poppins-regular">New in Paymorz?</span>{" "}
            <span className="text-right">
              <Link
                to="/accounts/signup"
                className="color-linear underline"
                style={{
                  textDecoration: "underline",
                }}
              >
                Sign Up
              </Link>
            </span>
          </div>
        ) : (
          <div className="flex flex-col">
            <span className="text-right poppins-regular">
              Already Have An Account?
            </span>{" "}
            <span className="text-right">
              <Link to="/accounts/login" className="color-linear underline">
                Log In
              </Link>
            </span>
          </div>
        )}
      </div>
    </>
  );
}
