import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const isHome = pathname === "/";

  return (
    <main className="relative w-full overflow-hidden bg-black text-white">
      <Header />
      {isHome ? (
        <Outlet />
      ) : (
        <div id="main-content" className="pt-[52px] md:pt-0">
          <Outlet />
        </div>
      )}
      <Footer />
    </main>
  );
};
