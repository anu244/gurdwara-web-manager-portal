
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center px-4">
        <h1 className="text-7xl md:text-9xl font-bold text-gurdwara-blue mb-4">404</h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8">We couldn't find the page you're looking for</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/">
            <Button className="bg-gurdwara-orange hover:bg-amber-600 flex items-center">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Return Home
            </Button>
          </Link>
          <Link to="/services">
            <Button variant="outline">View Our Services</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
