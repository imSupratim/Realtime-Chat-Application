import { X } from "lucide-react";
import { userAuthStore } from "../store/useAuthStore";
import { useChatStore } from "../store/useChatStore";

const ChatHeader = () => {
  const { selectedUser, setSelectedUser } = useChatStore();
  const { onlineUsers } = userAuthStore();

  return (
    // <div className="p-2.5 border-b border-base-300">
    //   <div className="flex items-center justify-between">
    //     <div className="flex items-center gap-3">
    //       {/* Avatar */}
    //       <div className="avatar">
    //         <div className="size-10 rounded-full relative">
    //           <img src={selectedUser.profilepic || "/avatar.png"} alt={selectedUser.fullname} />
    //         </div>
    //       </div>

    //       {/* User info */}
    //       <div>
    //         <h3 className="font-medium">{selectedUser.fullname}</h3>
    //         <p className="text-sm text-base-content/70">
    //           {onlineUsers.includes(selectedUser._id) ? "Online" : "Offline"}
    //         </p>
    //       </div>
    //     </div>

    //     {/* Close button */}
    //     <button className="cursor-pointer" onClick={() => setSelectedUser(null)}>
    //       <X />
    //     </button>
    //   </div>
    // </div>

    <div className="p-4 border-b border-base-300 bg-gradient-to-r from-base-100 via-base-200 to-base-100 backdrop-blur-md shadow-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-5">
          {/* Avatar */}
          <div className="avatar">
            <div className="size-12 rounded-full ring-2 ring-primary ring-offset-2 ring-offset-base-100 shadow-lg hover:scale-105 transition-transform duration-200">
              <img
                src={selectedUser.profilepic || "/avatar.png"}
                alt={selectedUser.fullname}
              />
            </div>
          </div>

          {/* User info */}
          <div>
            <h3 className="font-semibold text-lg text-base-content">
              {selectedUser.fullname}
            </h3>
            <p
              className={`text-sm ${
                onlineUsers.includes(selectedUser._id)
                  ? "text-green-500 font-medium animate-pulse"
                  : "text-gray-400 italic"
              }`}
            >
              {onlineUsers.includes(selectedUser._id) ? "● Online" : "Offline"}
            </p>
          </div>
        </div>

        {/* Close button */}
        <button
          className="p-2 rounded-full hover:bg-red-100 transition-colors duration-200 shadow-sm"
          onClick={() => setSelectedUser(null)}
        >
          <X className="w-5 h-5 text-red-500 hover:text-red-600 transition-colors duration-200" />
        </button>
      </div>
    </div>
  );
};
export default ChatHeader;
