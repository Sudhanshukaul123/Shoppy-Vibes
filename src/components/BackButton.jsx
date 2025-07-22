import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/")}
      className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#4B2E2E] hover:bg-[#3a2323] text-[#F2E8DC] shadow-lg transition"
    >
      <ArrowLeft className="w-5 h-5" />
      <span className="text-sm font-medium tracking-wide">Back to Categories</span>
    </button>
  );
};

export default BackButton;
