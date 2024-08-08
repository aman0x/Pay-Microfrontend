import "./style.css"
export default function PaymorzBanner() {
  return (
    <div className="w-full h-screen max-h-screen banner bg-cover bg-center">
      <div className="flex flex-col font-semibold  pt-16 pl-20 gap-2">
        <div className="text-lg italic leading-tight welcome-color" 
        >
          <span className="font-light">Welcome To</span>{" "}
          <span className="italic font-bold">Paymorz</span>
        </div>
        <div className="mt-5 text-3xl leading-9 opacity-90 text-white">
          Payments Have Newer Been 
        </div>
        <div className=" text-3xl leading-9 welcome-color">
        Easier !
        </div>
        <div className="mt-5 text-xs leading-6 text-white opacity-70 max-w-[500px]"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
          libero et velit interdum, ac aliquet odio mattis.
        </div>
      </div>
    </div>
  );
}
