import PageWrapper from "@/components/PageWrapper";

export default function Dashboard() {
  return (
    <PageWrapper>
      <h2 className="text-3xl font-semibold mb-6 text-dark">Dashboard</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="p-6 bg-white border-l-4 border-gold shadow rounded-lg">
          <h3 className="text-lg font-medium text-dark">Total Cabs</h3>
          <p className="text-4xl font-bold text-gold mt-3">12</p>
        </div>

        <div className="p-6 bg-white border-l-4 border-gold shadow rounded-lg">
          <h3 className="text-lg font-medium text-dark">Active Rides</h3>
          <p className="text-4xl font-bold text-gold mt-3">3</p>
        </div>

        <div className="p-6 bg-white border-l-4 border-gold shadow rounded-lg">
          <h3 className="text-lg font-medium text-dark">Drivers</h3>
          <p className="text-4xl font-bold text-gold mt-3">8</p>
        </div>

      </div>
    </PageWrapper>
  );
}
