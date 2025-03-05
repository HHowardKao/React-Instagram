import React from "react";
import { useGetIGPostsQuery } from "../../../../redux/Homeservices";
import Comment from "./comment";
import User from "./user";
import Image from "./image";

const Post: React.FC = () => {
  const { data: posts } = useGetIGPostsQuery("all");

  return (
    <div>
      {posts?.map((post) => (
        <div key={post.id} className="shadow-md pb-4">
          <User account={post.account} avatar={post.avatar} />
          <Image image={post.image} />
          <Comment
            like={post.like}
            comment={post.comment}
            description={post.description}
            account={post.account}
            createtime={post.createtime}
          />
        </div>
      ))}
    </div>
  );
};

export default Post;
