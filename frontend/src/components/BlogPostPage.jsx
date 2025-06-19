import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Clock, User, Calendar } from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import { getPosts } from "../API/Posts";
import Comments from "./Comments";
import RelatedPosts from "./RelatedPosts";
import AboutMe from "./AboutMe";

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postsResponse = await getPosts();
        const posts = Array.isArray(postsResponse)
          ? postsResponse
          : postsResponse?.data || [];

        const currentPost = posts.find((p) => p.id === Number(id));
        if (!currentPost) {
          throw new Error("Post not found");
        }
        setPost(currentPost);

        const related = posts
          .filter(
            (p) =>
              p.category === currentPost.category && p.id !== currentPost.id
          )
          .slice(0, 3);
        setRelatedPosts(related);
      } catch (err) {
        setError(err.message || "Failed to fetch data");
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, [id]);

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center ">
        <div className="bg-white p-8 rounded-lg shadow text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Error</h2>
          <p className="text-slate-600">{error}</p>
          <button
            onClick={() => navigate("/")}
            className="mt-6 px-6 py-2 bg-slate-900 text-white rounded-full hover:bg-slate-800"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-2xl text-slate-600">Loading...</div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 text-slate-900 min-h-screen mt-[120px]">
      <header className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-black opacity-70"></div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-4xl mx-auto px-4 py-16 text-center"
        >
          <div className="bg-white/10 rounded-full inline-block px-4 py-1 mb-4 text-sm">
            {post.category}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            {post.title}
          </h1>

          <div className="flex justify-center items-center space-x-4 text-gray-300 text-sm">
            <div className="flex items-center space-x-2">
              <User size={16} />
              <span>{post.username}</span>
            </div>
            <div className="h-4 w-px bg-gray-600"></div>
            <div className="flex items-center space-x-2">
              <Clock size={16} />
              <span>Read {post.time_read}</span>
            </div>
            <div className="h-4 w-px bg-gray-600"></div>
            <div className="flex items-center space-x-2">
              <Calendar size={16} />
              <span>{new Date(post.created_at).toLocaleDateString()}</span>
            </div>
          </div>
        </motion.div>
      </header>

      <div className="wrapper mx-auto px-4 py-12 grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 bg-white p-8 rounded-2xl">
          <div
            className="mb-10"
            style={{
              height: "320px",
            }}
          >
            <img
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
              }}
              className="border rounded-md "
              src="https://images.pexels.com/photos/8422207/pexels-photo-8422207.jpeg"
              alt=""
            />
          </div>
          <div className="prose prose-slate max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>

          <Comments postId={post.id} />
        </div>

        <div className="md:col-span-1">
          <div className="sticky top-8 space-y-6">
            <RelatedPosts posts={relatedPosts} />
            <AboutMe />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
