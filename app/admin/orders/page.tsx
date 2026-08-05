export default function OrdersPage() {
  return (
    <div>
      <h1 className="text-5xl font-bold text-yellow-400 mb-8">
        Orders
      </h1>

      <div className="bg-zinc-900 rounded-2xl overflow-hidden">
        <table className="w-full">
          <thead className="bg-zinc-800">
            <tr>
              <th className="p-4 text-left">Order</th>
              <th className="p-4 text-left">Customer</th>
              <th className="p-4 text-left">Phone</th>
              <th className="p-4 text-left">Total</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-t border-zinc-800">
              <td className="p-4">#1001</td>
              <td className="p-4">Ahmed Mohamed</td>
              <td className="p-4">01012345678</td>
              <td className="p-4">2200 EGP</td>

              <td className="p-4">
                <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                  Pending
                </span>
              </td>

              <td className="p-4 text-center">
                <button className="bg-zinc-700 hover:bg-zinc-600 px-4 py-2 rounded-lg transition">
                  View
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}