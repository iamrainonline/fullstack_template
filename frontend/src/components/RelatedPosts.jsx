import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const RelatedPosts = ({ posts, categoryId }) => {
  const navigate = useNavigate();

  const handleMoreClick = () => {
    navigate(`/category/${categoryId}`);
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md mb-6">
      <h3 className="text-2xl font-bold mb-6 text-slate-900">
        Postări similare
      </h3>

      <div className="space-y-6">
        {posts.map((post) => (
          <div
            key={post.id}
            onClick={() => navigate(`/blogpost/${post.id}`)}
            className="group flex items-start space-x-4  p-4 rounded-xl transition cursor-pointer shadow-sm"
          >
            {post.image && (
              <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-gray-200">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div className="flex-1">
              <h4 className="text-lg font-semibold text-slate-900  transition-colors">
                {post.title}
              </h4>
              <p className="text-sm text-slate-600 mt-1 line-clamp-2">
                {post.content.replace(/<[^>]*>/g, "").substring(0, 100)}...
              </p>
              <div className="flex justify-between items-center mt-3">
                <span className="text-xs text-slate-500">
                  {new Date(post.created_at).toLocaleDateString("ro-RO", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
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

      {/* Butonul de final */}
      <div className="mt-8 text-center">
        <button
          onClick={handleMoreClick}
          className="bg-black text-white text-sm font-medium py-2 px-6 rounded-full hover:bg-slate-800 transition"
        >
          Alte postari din aceeași categorie
        </button>
      </div>
    </div>
  );
};

export default RelatedPosts;
