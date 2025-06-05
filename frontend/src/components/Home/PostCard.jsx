import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const PostCard = React.memo(({ post, onClick }) => (
  <motion.div
    onClick={onClick}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}
    className="bg-white border border-gray-200 rounded-2xl overflow-hidden group hover:shadow-lg transition-shadow"
  >
    <div className="p-6 flex flex-col h-full cursor-pointer ">
      <div className="flex justify-between items-center mb-3">
        <span
          className="text-xs font-medium text-white  px-3 py-1 rounded-full"
          style={{ backgroundColor: post.color }}
        >
          {post.category}
        </span>
        <span className="text-xs text-slate-500">
          {new Date(post.created_at).toLocaleDateString()}
        </span>
      </div>
      <div className="my-2">
        <img
          className="border rounded-md w-full h-48 object-cover"
          src={`https://picsum.photos/seed/${post.id}/600/200`}
          alt={post.title}
          loading="lazy"
        />
      </div>
      <h3 className="font-bold text-xl mb-3 text-slate-900 group-hover:text-slate-700 transition-colors line-clamp-2">
        {post.title}
      </h3>
      <div
        className="text-slate-600 mb-4 line-clamp-3 prose prose-sm flex-grow"
        dangerouslySetInnerHTML={{
          __html:
            post.content.replace(/<[^>]*>/g, "").substring(0, 150) + "...",
        }}
      />
      <div className="flex justify-between  items-center text-sm text-slate-500 pt-4 border-t mt-2">
        <div className="space-y-1">
          <p className="text-slate-600">{post.username}</p>
          <p className="text-slate-400">Read {post.time_read}</p>
        </div>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
      </div>
    </div>
  </motion.div>
));

PostCard.displayName = "PostCard";

export default PostCard;
