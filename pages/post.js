import Layout from "../component/layout";
import { useRouter } from "next/router";
import { posts } from "../profile";

const Post = () => {
  const router = useRouter();

  console.log(router.query.title);

  const currentPost = posts.filter(
    (post) => post.title === router.query.title
  )[0];
  console.log(currentPost);
  return (
    <Layout footer={false}>
      <div className="text-center" title={currentPost.title}>
        <img
          src={currentPost.imageURL}
          alt=""
          className="img-fluid"
          style={{ width: "50%" }}
        />
        <p>{currentPost.content}</p>
      </div>
    </Layout>
  );
};

export default Post;
