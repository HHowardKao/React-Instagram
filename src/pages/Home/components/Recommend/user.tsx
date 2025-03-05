type UserProps = {
  account: string;
  image: string;
  name: string;
  flag: boolean;
};

const User: React.FC<UserProps> = ({ account, image, name, flag }) => {
  return (
    <div className="flex items-center pb-2 ml-3 mt-5 mb-5">
      <div
        className="w-9 h-9 rounded-full mr-3 cursor-pointer"
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="block">
        <div className="text-[11px] font-bold cursor-pointer">{account}</div>
        <div className="text-gray-400 mt-1 text-[10px] ">{name}</div>
      </div>
      <div className="flex  absolute right-0">
        <p className="text-[12px] text-blue-400  cursor-pointer mr-2 ">
          {flag ? "切換" : "追蹤"}
        </p>
      </div>
    </div>
  );
};

export default User;
