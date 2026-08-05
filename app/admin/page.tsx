export default function AdminDashboard() {
  return (
    <>
      <h1 className="text-5xl font-bold text-yellow-400 mb-10">
        Dashboard
      </h1>

      <div className="grid grid-cols-4 gap-6">

        <div className="bg-zinc-900 rounded-2xl p-6">
          <h2 className="text-yellow-400">Products</h2>
          <p className="text-5xl font-bold mt-4">9</p>
        </div>

        <div className="bg-zinc-900 rounded-2xl p-6">
          <h2 className="text-yellow-400">Orders</h2>
          <p className="text-5xl font-bold mt-4">0</p>
        </div>

        <div className="bg-zinc-900 rounded-2xl p-6">
          <h2 className="text-yellow-400">Messages</h2>
          <p className="text-5xl font-bold mt-4">0</p>
        </div>

        <div className="bg-zinc-900 rounded-2xl p-6">
          <h2 className="text-yellow-400">Revenue</h2>
          <p className="text-4xl font-bold mt-4">0 EGP</p>
        </div>

      </div>
    </>
  );
}