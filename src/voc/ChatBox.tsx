import React, { useState } from "react";

type Comment = {
  comment_id: string;
  comment_text: string;
  comment_author: string;
  comment_timestamp: string;
  comment_is_flagged?: boolean;
  comment_is_deleted?: boolean;
};

type Props = {
  data: Comment[];
};

const ChatBox: React.FC<Props> = ({ data }) => {
  const [messages, setMessages] = useState<Comment[]>(data);

  const [input, setInput] = useState("");

  const getTimeAgo = (timestamp: string) => {
    const diff = Date.now() - new Date(timestamp).getTime();

    const mins = Math.floor(diff / 60000);

    if (mins < 60) return `${mins}m ago`;

    const hrs = Math.floor(mins / 60);

    if (hrs < 24) return `${hrs}h ago`;

    const days = Math.floor(hrs / 24);

    return `${days}d ago`;
  };

  const handlePost = () => {
    if (!input.trim()) return;

    const newMessage: Comment = {
      comment_id: Date.now().toString(),
      comment_text: input,
      comment_author: "You",
      comment_timestamp: new Date().toISOString(),
      comment_is_flagged: false,
      comment_is_deleted: false,
    };

    setMessages((prev) => [...prev, newMessage]);

    setInput("");
  };

  return (
    <div className="w-full h-full border rounded-b-md p-6 flex flex-col justify-between">
      <div className="space-y-4 max-h-[300px] overflow-y-auto mb-8 scrollbar-hide">
        {messages.map((msg) => (
          <div key={msg.comment_id} className="flex gap-3">
            <div className="w-10 h-10 rounded-full bg-neutral-800 text-white flex items-center justify-center font-semibold">
              {msg.comment_author.charAt(0).toUpperCase()}
            </div>

            <div className="flex-1">
              <div className="flex justify-between text-sm">
                <span className="font-semibold">{msg.comment_author}</span>

                <span className="text-gray-500">
                  {getTimeAgo(msg.comment_timestamp)}
                </span>
              </div>

              <p className="text-sm text-gray-700 mt-1">{msg.comment_text}</p>
            </div>
          </div>
        ))}
      </div>

      <div>
        {/* Input */}
        <div className="mt-6 flex gap-2">
          <input
            type="text"
            placeholder="Post a Comment"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 border rounded-lg px-3 py-2 text-sm"
          />

          <button
            onClick={handlePost}
            className="bg-primary text-white px-4 py-2 rounded-lg text-sm"
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
