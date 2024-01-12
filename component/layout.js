import Navbar from "./navbar";
import { useEffect } from "react";
import { useRouter } from "next/router";
import NProgress from "nprogress";
import Classnames from "classnames";

const Layout = ({ children, title, footer = true, dark = false }) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouterChange = (url) => {
      console.log(url);
      NProgress.start();
    };

    router.events.on("routeChangeStart", handleRouterChange);

    router.events.on("routeChangeComplete", () => NProgress.done());

    return () => {
      router.events.off("routeChange", handleRouterChange);
    };
  }, []);
  return (
    <div className={Classnames({ "bg-dark": dark, "bg-light": !dark })}>
      <Navbar />
      <main className="container py-4">
        {title && (
          <h1 className={Classnames("text-center", { "text-light": dark })}>
            {title}
          </h1>
        )}
        {children}
      </main>
      {footer && (
        <footer className="bg-dark text-light text-center">
          <div className="container p-4">
            <h1>&copy; Adrian Veloz Rodriguez</h1>
            <p>2022 - {new Date().getFullYear()}</p>
            <p>All rights Reserved.</p>
          </div>
        </footer>
      )}
    </div>
  );
};
export default Layout;
