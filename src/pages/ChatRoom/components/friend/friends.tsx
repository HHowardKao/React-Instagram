const Friends: React.FC = () => {
  return (
    <div className="  w-[358px] sticky-fixed   z-50 h-[16%]">
      <div className="border-box h-[80px] bg-white flex items-center text-center justify-between border-b  border-gray-400  ">
        <p className="font-bold text-[20px] pl-2">_grape.1015</p>
        <img
          src="https://img.icons8.com/?size=100&id=3zw3oY83Ri9c&format=png&color=000000"
          alt=""
          className="w-5 h-5 mr-10"
        />
      </div>

      <div className="border-box flex justify-between p-3 bg-white h-[40px] ">
        <p className="font-bold">訊息</p>
        <p className="text-gray-400 text-sm cursor-pointer">陌生訊息</p>
      </div>
    </div>
  );
};

export default Friends;
