type ItemProps = {
  account: string;
  avatar: string;
};

const Item: React.FC<ItemProps> = ({ account, avatar }) => {
  return (
    <div className="text-center">
      <div
        className="w-[56px] h-[56px] p-[3px] ring-2 border-2 border-white ring-red-500 rounded-full mx-[13px] overflow-hidden cursor-pointer"
        style={{
          backgroundImage: `url(${avatar})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>
      <p className="text-[10px] mt-1">{account}</p>
    </div>
  );
};

export default Item;
