import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    let timer = setTimeout(() => {
      navigate("/");
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex text-center w-full justify-center items-center">
      <div className="flex flex-col gap-8">
        <h1 className="text-2xl">Error Code: 404</h1>
        <h1 className="text-5xl font-vanilla text-vanilla-pink">
          Sorry, we couldn't find the page
        </h1>
        <p className="font-bold">You will be redirected to the home page shortly</p>
      </div>
    </div>
  );
}

export default NotFound;
