import { useAppSelector } from "../../../redux/hooks";
import User from "../../Home/components/Recommend/user";
const People: React.FC = () => {
  const friendReducer = useAppSelector((state) => state.friendReducer);
  const friends = friendReducer.friends;
  return (
    <div>
      <p className="font-bold text-[15px]">建議</p>
      <div className="flex flex-col h-[84%] flex-1 overflow-y-auto ">
        {friends.map((item) => {
          const { id, account, image, name, flag } = item;
          return (
            <User
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
