import Sidebar from "../components/Sidebar";

const AppLayout = ({ children }) => {
  return (
    <div className="flex h-screen w-screen overflow-hidden">
      {/* Permanent Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <main className="flex-1 relative bg-black">
        {children}
      </main>
    </div>
  );
};

export default AppLayout;
