import { Navbar } from "./_components/navbar";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full bg-slate-100">
      <Navbar />
      <main
        className="pt-40 pb-20 bg-slate-100"
        style={{
          paddingTop: "4rem",
          paddingBottom: "0rem",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        {children}
      </main>
    </div>
  );
};

export default MarketingLayout;
