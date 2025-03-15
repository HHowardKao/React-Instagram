import User from "./user";
import { useAppSelector } from "../../../../redux/hooks";
const Recommend: React.FC = () => {
  const friendReducer = useAppSelector((state) => state.friendReducer);
  const friends = friendReducer.friends.slice(0, 5);
  return (
    <div className="ml-7 mt-10  pb-4 shadow-md ">
      <User
        account="_grape.1015"
        image="./images/avatar/me.jpg"
        name="高國豪"
      />

      <div className="flex justify-between">
        <p className="text-gray-700 text-[11px] pl-2">為你推薦</p>
        <p className="font-bold text-[11px] cursor-pointer mr-2">查看全部</p>
      </div>
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

      <div className="text-gray-400 text-[10px] pl-2 ">
        <p>關於•使用說明•新聞稿•API•工作機會•隱私</p>
        <p>使用條款•地點•語言•Meta 驗證</p>
        <br />
        <p>© 2025Instagram from Meta</p>
      </div>
    </div>
  );
};

export default Recommend;
