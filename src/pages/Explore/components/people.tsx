import { useAppSelector } from "../../../redux/hooks";
import User from "../../Home/components/Recommend/user";
const People: React.FC = () => {
  const friendReducer = useAppSelector((state) => state.friendReducer);
  const friends = friendReducer.friends;
  return (
    <div className="box-border flex items-center overflow-x-auto overflow-y-hidden">
      <p className="font-bold text-[15px]">建議</p>
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
  );
};

export default People;
