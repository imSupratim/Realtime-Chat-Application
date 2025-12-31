import React from "react";

const MessageSkeleton = () => {
  const skeletonMessages = Array(6).fill(null);
  return (
    <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-base-200/40 backdrop-blur-sm">
      {skeletonMessages.map((_, idx) => (
        <div
          key={idx}
          className={`chat ${
            idx % 2 === 0 ? "chat-start" : "chat-end"
          } animate-fade-in`}
        >
          {/* Avatar skeleton */}
          <div className="chat-image avatar">
            <div className="size-12 rounded-full shadow-md">
              <div className="skeleton w-full h-full rounded-full" />
            </div>
          </div>

          {/* Header skeleton */}
          <div className="chat-header mb-2">
            <div className="skeleton h-4 w-20 rounded-md" />
          </div>

          {/* Bubble skeleton */}
          <div className="chat-bubble bg-transparent p-0">
            <div className="skeleton h-20 w-[220px] rounded-xl shadow-sm" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MessageSkeleton;
