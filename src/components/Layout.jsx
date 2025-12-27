import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header – always top */}
      <Header />

      {/* Main content – takes remaining space */}
      <main className="flex-1  mx-auto ">
       
        <Outlet />
      </main>

      {/* Footer – always bottom */}
      <Footer />
    </div>
  );
}

export default Layout;
