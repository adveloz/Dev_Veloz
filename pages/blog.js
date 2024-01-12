import Layout from "../component/layout";
import { posts } from "../profile";
import Link from "next/link";

console.log(posts);
// const PostCard = ({ post }) => {
//   <div className="col-md-4">
//     <div className="card">
//       <div className="overflow">
//         <img src={post.imageURL} className="card-img-top" alt="" />
//       </div>
//       <div className="card-body">
//         <h1>{post.title}</h1>
//         <p>{post.content}</p>
//       </div>
//     </div>
//   </div>;
// };

const Blog = ({ post }) => (
  <Layout footer={false} title="My Blog" dark>
    <div className="row">
      {/* {posts.map((post, i) => (
        <PostCard post={post} key={i} />
      ))} */}
      {posts.map((post, i) => (
        <div className="col-md-4" post={post} key={i}>
          <div className="card h-100">
            <div className="overflow">
              <img src={post.imageURL} className="card-img-top" alt="" />
            </div>
            <div className="card-body">
              <h1>{post.title}</h1>
              <p>{post.content}</p>
              <Link
                legacyBehavior
                href={`/post?title=${post.title}`}
                as={`/post/${post.title}`}
              >
                <button className="btn btn-light">Read</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  </Layout>
);

export default Blog;
