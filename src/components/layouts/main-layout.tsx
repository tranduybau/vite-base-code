import { Link, Outlet } from "react-router-dom";

import { Button } from "@/components/ui/button";

import { ROUTE_NAME } from "@/constants/route-name";

function MainLayout() {
  return (
    <main>
      <header className="space-x-4 p-4">
        <Button variant="secondary" asChild>
          <Link to={ROUTE_NAME.HOME}>Home</Link>
        </Button>

        <Button variant="secondary" asChild>
          <Link to={ROUTE_NAME.AUTHENTICATE.SIGN_IN}>Sign in</Link>
        </Button>
      </header>

      <Outlet />

      <footer>footer</footer>
    </main>
  );
}

export default MainLayout;
