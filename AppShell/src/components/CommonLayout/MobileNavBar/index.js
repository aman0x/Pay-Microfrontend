import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./style.css";
import { FaPlus } from "react-icons/fa6";

export function MobileNavBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const tabs = [
    {
      name: "home",
      icon: (
        <>
          <img src="/images/home.svg" alt="Home" />
        </>
      ),
      selected_icon: (
        <>
          <img src="/images/selected_home.svg" alt="Home" />
        </>
      ),
      label: "Home",
      path: "/dashboard",
    },
    {
      name: "transactions",
      icon: (
        <>
          <img src="/images/transaction.svg" alt="Home" />
        </>
      ),
      selected_icon: (
        <>
          <img src="/images/selected_transaction.svg" alt="Home" />
        </>
      ),
      label: "Transactions",
      path: "/dashboard/payment",
    },
    {
      name: "invoice",
      icon: (
        <>
          <img src="/images/invoices.svg" alt="Home" />
        </>
      ),
      selected_icon: (
        <>
          <img src="/images/selected_invoice.svg" alt="Home" />
        </>
      ),
      label: "Invoice",
      path: "/invoice",
    },
    {
      name: "statistic",
      icon: (
        <>
          <img src="/images/statistic.svg" alt="Home" />
        </>
      ),
      selected_icon: (
        <>
          <img src="/images/selected_statistics.svg" alt="Home" />
        </>
      ),
      label: "Statistic",
      path: "/dashboard/statistic",
    },
  ];

  const [navIndex, setNavIndex] = useState(() => {
    return parseInt(localStorage.getItem("navIndex")) || 0;
  });

  useEffect(() => {
    localStorage.setItem("navIndex", navIndex);
  }, [navIndex]);

  useEffect(() => {
    const pathToIndex = {
      "/dashboard": 0,
      "/dashboard/payment": 1,
      "/invoice": 2,
      "/dashboard/statistic": 3,
      "/dashboard/notification": 4,
      "/dashboard/support": 5,
    };
    setNavIndex(pathToIndex[location.pathname] ?? 0);
  }, [location.pathname]);

  const handleNavigation = (index, path) => {
    setNavIndex(index);
    navigate(path);
  };

  return (
    <>
      <div className="bg-[#f0f1f2] z-50 shadow-md transition-all duration-500 w-[100vw] px-2 flex h-20">
        {tabs.map((tab, index) => (
          <div
            key={tab.name}
            className={`flex flex-1 w-full h-full justify-center items-center ${
              navIndex === index ? "flex-row" : "flex-col"
            }`}
            onClick={() => handleNavigation(index, tab.path)}
          >
            <div
              className={`${
                navIndex === index ? "text-black" : "text-gray-500"
              }`}
            >
              {navIndex === index ? tab.selected_icon : tab.icon}
            </div>
            {navIndex === index && (
              <p
                className={`uppercase text-xs ml-2 ${
                  navIndex === index ? "text-black" : "text-gray-500"
                }`}
              >
                {tab.label}
              </p>
            )}
          </div>
        ))}
        <div className="flex">
          <div onClick={() => navigate('/dashboard/payment/quick-payment')} className="shadow-sm shadow-[#EC8AD1] w-14 h-14 flex justify-center items-center add-btn rounded-full -mt-4 mx-2">
            <FaPlus className="text-white text-[1.375rem] poppins-bold" />
          </div>
        </div>
      </div>
    </>
  );
}
