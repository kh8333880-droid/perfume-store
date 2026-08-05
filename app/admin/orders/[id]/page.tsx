"use client";

import { useParams } from "next/navigation";

export default function OrderDetailsPage() {
  const { id } = useParams();

  return (
    <div className="space-y-8">

      <h1 className="text-5xl font-bold text-yellow-400">
        Order #{id}
      </h1>

      <div className="bg-zinc-900 rounded-2xl p-8 space-y-4">

        <h2 className="text-2xl font-bold text-yellow-400">
          Customer Information
        </h2>

        <p><strong>Name:</strong> Ahmed Mohamed</p>

        <p><strong>Phone:</strong> 01012345678</p>

        <p><strong>Address:</strong> Alexandria</p>

      </div>

      <div className="bg-zinc-900 rounded-2xl p-8">

        <h2 className="text-2xl font-bold text-yellow-400 mb-6">
          Products
        </h2>

        <table className="w-full">

          <thead>

            <tr className="border-b border-zinc-700">

              <th className="text-left pb-4">
                Product
              </th>

              <th className="text-left pb-4">
                Qty
              </th>

              <th className="text-left pb-4">
                Price
              </th>

            </tr>

          </thead>

          <tbody>

            <tr>

              <td className="py-4">
                Arrogate Girl
              </td>

              <td>1</td>

              <td>2200 EGP</td>

            </tr>

          </tbody>

        </table>

      </div>

      <div className="bg-zinc-900 rounded-2xl p-8 flex justify-between items-center">

        <h2 className="text-3xl font-bold text-yellow-400">
          Total: 2200 EGP
        </h2>

        <select className="bg-zinc-800 rounded-lg px-5 py-3">

          <option>Pending</option>

          <option>Processing</option>

          <option>Delivered</option>

          <option>Cancelled</option>

        </select>

      </div>

    </div>
  );
}
