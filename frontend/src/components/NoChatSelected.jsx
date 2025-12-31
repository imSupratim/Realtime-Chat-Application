import { MessageSquare } from "lucide-react";
import { userAuthStore } from "../store/useAuthStore";

const NoChatSelected = () => {
  const getGreeting = () => {
    const hour = new Date().getHours();

    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
  };

  const { authUser } = userAuthStore();

  return (
    <div className="w-full flex flex-1 flex-col items-center justify-center p-16 bg-[#2c3e50]">
      <div className="max-w-md text-center space-y-6">
        {/* Icon Display */}
        <div className="flex justify-center mb-8">
          <div className="relative group">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-indigo-500/20 rounded-3xl blur-xl group-hover:bg-indigo-500/30 transition-all duration-500"></div>

            {/* Icon container */}
            <div className="relative w-20 h-20 rounded-3xl bg-gradient-to-br from-indigo-500/20 to-indigo-600/5 flex items-center justify-center border border-indigo-500/20 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
              <MessageSquare className="w-10 h-10 text-indigo-400 group-hover:scale-110 transition-transform duration-300" />
            </div>

            {/* Decorative circles */}
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-indigo-500/40 rounded-full animate-ping"></div>
            <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-indigo-500/30 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Welcome Text */}
        <div className="space-y-3">
          <h2 className="text-3xl font-bold text-white">Welcome to PingMe!</h2>

          <p className="text-2xl font-bold">
            <span className="text-indigo-300">{getGreeting()},</span>{" "}
            <span className="text-indigo-500">{authUser.fullname}</span>
          </p>

          <p className="text-gray-300 text-lg leading-relaxed">
            The floor is yours. Select a chat and PingMe
          </p>
        </div>

        {/* Decorative element */}
        <div className="pt-8 flex justify-center gap-2 opacity-30">
          <div
            className="w-2 h-2 rounded-full bg-indigo-400 animate-bounce"
            style={{ animationDelay: "0ms" }}
          ></div>
          <div
            className="w-2 h-2 rounded-full bg-indigo-400 animate-bounce"
            style={{ animationDelay: "150ms" }}
          ></div>
          <div
            className="w-2 h-2 rounded-full bg-indigo-400 animate-bounce"
            style={{ animationDelay: "300ms" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default NoChatSelected;
