import { follow, unFollow } from "../../../../redux/Friendslice";
import { useAppDispatch } from "../../../../redux/hooks";
import { memo } from "react";

type UserProps = {
  id?: number;
  showFollow?: boolean;
  account: string;
  image: string;
  name: string;
  flag?: boolean;
};

const User: React.FC<UserProps> = memo(
  ({ id, account, image, name, flag = false, showFollow = false }) => {
    const dispatch = useAppDispatch();

    function followClickHandler() {
      if (id === undefined) return;
      if (flag) {
        dispatch(unFollow(id));
      } else {
        dispatch(follow(id));
      }
    }

    return (
      <div className="flex items-center px-4 py-2 hover:bg-gray-50">
        {/* 頭像 */}
        <div
          className="w-9 h-9 rounded-full mr-3 cursor-pointer bg-cover bg-center"
          style={{
            backgroundImage: `url(${image})`,
          }}
        ></div>

        {/* 帳號與名稱 */}
        <div className="flex flex-col cursor-pointer">
          <span className="text-[11px] font-bold">{account}</span>
          <span className="text-gray-400 text-[10px] mt-[2px]">{name}</span>
        </div>

        {/* 追蹤按鈕，靠右 */}
        {showFollow && (
          <div className="ml-auto">
            <p
              className={`${
                flag ? "text-gray-700" : "text-blue-400"
              } text-[12px] cursor-pointer`}
              onClick={followClickHandler}
            >
              {flag ? "追蹤中" : "追蹤"}
            </p>
          </div>
        )}
      </div>
    );
  }
);

export default User;
