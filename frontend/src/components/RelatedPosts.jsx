import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const RelatedPosts = ({ posts }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white p-6 rounded-2xl mb-6">
      <h3 className="text-2xl font-bold mb-6 text-slate-900">Related Posts</h3>
      <div className="space-y-6">
        {posts.map((post) => (
          <div
            key={post.id}
            onClick={() => navigate(`/blogpost/${post.id}`)}
            className="group flex flex-col space-y-2 hover:bg-gray-100 p-4 -mx-4 rounded-lg transition-colors cursor-pointer"
          >
            <div className="flex-1">
              <h4 className="font-semibold text-slate-900 group-hover:text-slate-700 transition-colors">
                {post.title}
              </h4>
              <div
                className="text-sm text-slate-600 line-clamp-2"
                dangerouslySetInnerHTML={{
                  __html:
                    post.content.replace(/<[^>]*>/g, "").substring(0, 100) +
                    "...",
                }}
              />
              <div className="flex justify-between items-center mt-2">
                <span className="text-xs text-slate-500">
                  {new Date(post.created_at).toLocaleDateString()}
                </span>
                <ArrowRight
                  size={16}
                  className="text-slate-500 group-hover:translate-x-1 transition-transform"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedPosts;
