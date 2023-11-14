export default function ServiceCard({ color, title, icon, subtitle }) {
  return (
    <div className="flex bg-[#fff] flex-row justify-start items-start p-3 m-2 cursor-pointer shadow-xl">
      <div
        className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}
      >
        {icon}
      </div>
      <div className="ml-5 flex flex-col flex-1">
        <h3 className="mt-2 text-black text-lg">{title}</h3>
        <p className="mt-1 text-black text-sm md:w-9/12">{subtitle}</p>
      </div>
    </div>
  );
}
