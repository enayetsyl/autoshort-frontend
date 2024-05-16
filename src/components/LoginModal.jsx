import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";


const LoginModal = ({ onClose, onSuccess }) => {
  const { googleSignIn, setPostLoginCallback } = useContext(AuthContext);

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
      if (onSuccess) {
        onSuccess();
      }
      onClose();
    } catch (error) {
      console.error('Error during Google sign-in:', error);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <p className="mb-4">You need to login to create a series.</p>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-lg"
          onClick={handleGoogleSignIn}
        >
          Sign in with Google
        </button>
        <button
          className="ml-4 bg-gray-500 text-white py-2 px-4 rounded-lg"
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default LoginModal;
