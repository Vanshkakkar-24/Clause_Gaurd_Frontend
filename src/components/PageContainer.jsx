import Navbar from "./Navbar";

const PageContainer = ({ children }) => {

  return (

    <div className="bg-slate-950 min-h-screen text-white">

      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-12">

        {children}

      </div>

    </div>

  );
};

export default PageContainer;