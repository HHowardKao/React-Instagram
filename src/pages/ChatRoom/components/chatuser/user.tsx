type UserProps = {
  message: string;
  image: string;
  name: string;
  flag: boolean;
  time: string;
};

const User: React.FC<UserProps> = ({ message, image, name, flag, time }) => {
  return (
    <div className="flex items-center pb-2 ml-3 mt-2 mb-2 ">
      <div
        className="w-12 h-12 rounded-full mr-3 border-[1px] border-gray-300"
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="cursor-pointer">
        <div className="text-sm font-bold ">{name}</div>
        <div className="flex ">
          <div
            className={`mt-1 text-[13px] ${
              flag ? "text-black" : "text-gray-400"
            }`}
          >
            {message}
          </div>

          <p className="text-[13px] mt-1 text-gray-400 ml-1">· {time}</p>
        </div>
      </div>

      <div className=" ml-auto">
        <p className="  pr-5 text-[10px] ">{flag ? "🔵" : ""}</p>
      </div>
    </div>
  );
};

export default User;
