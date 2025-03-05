import { useGetIGChatsQuery } from "../../../../redux/Homeservices";
const Friend: React.FC = () => {
  const { data: chats } = useGetIGChatsQuery("all");

  return (
    <>
      <div className="flex items-center justify-center h-[8%] border-box sticky-fixed  z-50 cursor-pointer">
        <img
          src="https://img.icons8.com/?size=100&id=3zw3oY83Ri9c&format=png&color=000000"
          alt=""
          className="w-6 h-6 "
        />
      </div>
      <div className="flex flex-col h-[87%] flex-1 overflow-y-auto border-box ">
        {chats?.map((chats) => (
          <div
            key={chats.id}
            className="flex justify-center pt-5 pb-2 cursor-pointer"
          >
            <img src={chats.avatar} alt="" className="w-10 h-10 rounded-full" />
          </div>
        ))}
      </div>
    </>
  );
};

export default Friend;
