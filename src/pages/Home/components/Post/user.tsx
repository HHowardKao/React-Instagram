type UserProps = {
  account: string;
  avatar: string;
};

const User: React.FC<UserProps> = ({ account, avatar }) => {
  return (
    <div className="flex items-center pb-2 pl-2 mt-5">
      <div
        className="w-8 h-8 rounded-full mr-3 cursor-pointer"
        style={{
          backgroundImage: `url(${avatar})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="text-sm font-bold cursor-pointer">{account}</div>
    </div>
  );
};

export default User;
