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
      <div className="flex items-center pb-2 ml-3 mt-5 mb-5">
        <div
          className="w-9 h-9 rounded-full mr-3 cursor-pointer"
          style={{
            backgroundImage: `url(${image})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="block">
          <div className="text-[11px] font-bold cursor-pointer">{account}</div>
          <div className="text-gray-400 mt-1 text-[10px] ">{name}</div>
        </div>
        <div className="flex  absolute right-0">
          {showFollow && (
            <p
              className={`${
                flag ? "text-gray-700" : "text-blue-400"
              } text-[12px] cursor-pointer mr-2`}
              onClick={followClickHandler}
            >
              {flag ? "追蹤中" : "追蹤"}
            </p>
          )}
        </div>
      </div>
    );
  }
);

export default User;
