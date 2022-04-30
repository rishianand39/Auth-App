import { useParams } from "react-router-dom";
import { posts } from "../data";

const Post = () => {
  const {id}=useParams()
  const post=posts[id-1]

  return (
    <div className="post">
      <img src={post.img} alt={post.title} className="postImg" />
      <h1 className="postTitle">{post.title}</h1>
      <p className="postDesc">{post.desc}</p>
      <p className="postLongDesc">{post.longDesc}</p>
    </div>
  );
};

export default Post;