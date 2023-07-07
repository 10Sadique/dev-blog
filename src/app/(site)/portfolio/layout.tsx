export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="py-24">
      <div className="container">
        <h1 className="font-black lg:text-8xl text-4xl text-transparent bg-clip-text bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 lg:mb-14 mb-8 lg:leading-tight">
          Our Works
        </h1>
        {children}
      </div>
    </main>
  );
}
