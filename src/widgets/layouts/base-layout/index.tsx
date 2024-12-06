import { Header } from "@widgets/header";
import { Outlet } from "react-router-dom";
export const BaseLayout = () => {
  return (
    <>
      <Header />
      <main className="p-6 bg-gray-10">
        <Outlet />
      </main>
    </>
  );
};
