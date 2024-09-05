import { Link } from "react-router-dom";
export function HeaderNavbar({ isLogin = false }) {
  return (
    <>
      <div className="md:hidden">
        {!isLogin ? (
          <div className="flex flex-col items-center w-full">
            <img
              src="/images/billbash.png"
              className="mt-12 md:mt-6"
              width={65}
              height={65}
              alt="login icon"
            />
            <h1 className="poppins-semibold mt-2 mb-4 text-base">Log In</h1>
            <div className="flex gap-2">
              <span className="text-right poppins-regular">
                New in BillBash?
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
              src="/images/billbash.png"
              className="mt-12 md:mt-6"
              width={65}
              height={65}
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
          <img src="/images/billbash.png" alt="paymorz-logo" className="h-[30px]"/>
          <div className="italic pl-1 font-extrabold from-neutral-900 text-xl">
            BillBash
          </div>
        </div>
        {!isLogin ? (
          <div className="flex items-center gap-1">
            <span className="text-right poppins-regular">New in Paymorz?</span>{" "}
            <span className="text-right">
              <Link
                to="/accounts/signup"
                className="color-linear"
                
              >
                Sign Up
              </Link>
            </span>
          </div>
        ) : (
          <div className="flex items-center gap-1">
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
