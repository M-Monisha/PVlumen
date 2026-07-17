import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import BackButton from "./BackButton";

export default function Layout() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <ScrollToTop />
      <Header />
      <main className="flex-1 pt-[88px]">
        {!isHome && (
          <div className="container-wide pt-4 pb-0">
            <BackButton />
          </div>
        )}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
