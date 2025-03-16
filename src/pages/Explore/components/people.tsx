import { useAppSelector } from "../../../redux/hooks";
import User from "../../Home/components/Recommend/user";
const People: React.FC = () => {
  const friendReducer = useAppSelector((state) => state.friendReducer);
  const friends = friendReducer.friends;
  return (
    <div>
      <div className="border-box h-[60px] bg-white flex items-center justify-between lg:mt-10  ml-5 lg:mb-5 ">
        <p className="font-bold text-[15px] ">建議</p>
      </div>

      <div className="flex flex-col flex-1 overflow-y-auto">
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
