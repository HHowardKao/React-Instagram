import User from "./user";
import { useGetIGChatsQuery } from "../../../../redux/Homeservices";
const Chatuser: React.FC = () => {
  const { data: chats } = useGetIGChatsQuery("all");

  return (
    <div className="flex flex-col h-[84%] flex-1 overflow-y-auto ">
      {chats?.map((chats) => (
        <div key={chats.id}>
          <User
            name={chats.name}
            flag={chats.flag}
            message={chats.message}
            image={chats.avatar}
            time={chats.time}
          />
        </div>
      ))}
    </div>
  );
};

export default Chatuser;
