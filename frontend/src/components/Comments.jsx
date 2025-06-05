import React, { useState, useEffect } from "react";
import { Share2 } from "lucide-react";
import { addComment, getComments } from "../API/Comments";

const Comments = ({ postId }) => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await getComments(postId);
        const commentsData = Array.isArray(response)
          ? response
          : response?.data || [];
        setComments(commentsData);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchComments();
  }, [postId]);

  const handleCommentSubmit = async () => {
    try {
      await addComment({ blogId: postId, comment: comment, userId: 83 });
      const updatedComments = await getComments(postId);
      setComments(
        Array.isArray(updatedComments)
          ? updatedComments
          : updatedComments?.data || []
      );
      setComment("");
    } catch (error) {
      console.error("Error submitting comment:", error);
    }
  };

  return (
    <div className="mt-12 border-t border-slate-200 pt-8">
      <h3 className="text-xl font-semibold text-slate-900 mb-6">Comments</h3>

      <div className="space-y-4">
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write your comment..."
          className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none h-32 text-slate-700"
        />

        <div className="flex justify-end gap-2">
          <button
            onClick={handleCommentSubmit}
            className="bg-blue-900 text-white px-6 py-2.5 rounded-full flex items-center space-x-2 hover:bg-slate-800 transition-colors text-sm"
          >
            Post Comment
          </button>
          <button className="bg-slate-900 text-white px-6 py-2.5 rounded-full flex items-center space-x-2 hover:bg-slate-800 transition-colors text-sm">
            <Share2 size={20} />
            <span>Share Article</span>
          </button>
        </div>
      </div>

      <div className="mt-8 space-y-6">
        {comments.length > 0 ? (
          comments.map((comment, index) => (
            <div key={index} className="bg-slate-50 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <div className="">
                  <img
                    className="h-8 w-8 bg-slate-300 rounded-full"
                    src="https://picsum.photos/200/300"
                    alt=""
                  />
                </div>
                <div>
                  <div className="font-medium text-slate-900 flex items-center gap-2">
                    {comment.username}
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded">
                      {comment.role}
                    </span>
                  </div>
                  <div className="text-xs text-slate-500">
                    {new Date(comment.date).toLocaleString()}
                  </div>
                </div>
              </div>
              <p className="text-slate-700 text-sm">{comment.comment}</p>
            </div>
          ))
        ) : (
          <div className="text-center text-slate-500">
            No comments yet. Be the first to comment!
          </div>
        )}
      </div>
    </div>
  );
};

export default Comments;
