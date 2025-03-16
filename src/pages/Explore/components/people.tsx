import { useAppSelector } from "../../../redux/hooks";
import User from "../../Home/components/Recommend/user";

const People: React.FC = () => {
  const friendReducer = useAppSelector((state) => state.friendReducer);
  const friends = friendReducer.friends;

  return (
    <div className="h-full flex flex-col">
      <p className="font-bold text-[13px] p-4 h-[16%]">建議</p>
      <div className="flex-1 overflow-y-auto h-[84%]">
        {friends.map((item) => {
          const { id, account, image, name, flag } = item;
          return (
            <User
              key={id}
              id={id}
              account={account}
              image={image}
              name={name}
              flag={flag}
              showFollow
            />
          );
        })}
      </div>
    </div>
  );
};

export default People;
