import MainLayout from "../../layout/MainLayout";

function TopCompanies() {
  return (
    <MainLayout>
      <section className="pt-8">
        <h1 className="text-2xl font-bold">Top Companies</h1>
        <p className="text-text-secondary mt-2">Discover the best companies hiring right now.</p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {["Google", "Microsoft", "Apple", "Amazon", "Meta", "Netflix"].map((company) => (
            <div key={company} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg">{company}</h3>
              <p className="text-text-secondary text-sm mt-1">Technology</p>
              <p className="text-primary text-sm mt-2 font-medium">12 open positions</p>
            </div>
          ))}
        </div>
      </section>
    </MainLayout>
  );
}

export default TopCompanies;
