import { useNavigate } from "react-router-dom";
import CustomButton from "../../components/CustomButton";

function NotFound() {
  const navigate = useNavigate();

  return (
    <main className="w-full h-screen flex flex-col items-center justify-center bg-[#F4F4F4] px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center">
        <div className="mb-6">
          <h1 className="text-8xl font-bold text-primary mb-4">404</h1>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
        </div>

        <h2 className="text-2xl font-semibold text-text-black mb-3">Page Not Found</h2>

        <p className="text-text-secondary text-base mb-8 leading-relaxed">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <CustomButton title="Go Back" onClick={() => navigate(-1)} customStyles="w-full sm:w-auto" />
          <CustomButton title="Go to Home" onClick={() => navigate("/")} customStyles="w-full sm:w-auto" />
        </div>
      </div>

      <footer className="mt-8 text-text-secondary text-sm">
        <p>Need help? Browse available jobs on the homepage.</p>
      </footer>
    </main>
  );
}

export default NotFound;