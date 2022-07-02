import "../../styles/dashboard/posts.css";
import AllPosts from "./allposts";
import CreatePost from "./createpost";

export default function MiddlePostComponent() {
  return (
    <section className="middle__posts">
      <CreatePost />
      <div className="all_posts">
        <AllPosts />
        <AllPosts />
        <AllPosts />
      </div>
    </section>
  );
}
