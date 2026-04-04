import { useEffect, useState } from "react";

const Toast = ({ message, type = "info", duration = 3000 }) => {

  const [visible, setVisible] = useState(true);

  const styles = {
    success: "bg-green-600 text-white",
    error: "bg-red-600 text-white",
    info: "bg-indigo-600 text-white"
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  if (!visible) return null;

  return (
    <div
      className={
        "fixed bottom-6 right-6 px-5 py-3 rounded-lg shadow-lg text-sm font-medium animate-slideUp z-50 "
        + styles[type]
      }
    >
      {message}
    </div>
  );
};

export default Toast;