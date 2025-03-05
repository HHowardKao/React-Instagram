import Item from "./Item";
import { useGetIGStoiesQuery } from "../../../../redux/Homeservices";
const Story: React.FC = () => {
  const { data: story } = useGetIGStoiesQuery("all");
  return (
    <div className="w-full h-[110px] box-border flex items-center overflow-x-auto overflow-y-hidden shadow-md no-scrollbar lg:my-8">
      {story?.map((story) => (
        <div key={story.id}>
          <Item account={story.account} avatar={story.avatar} />
        </div>
      ))}
    </div>
  );
};

export default Story;
