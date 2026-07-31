"use client";

import { db, auth } from "@/app/lib/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  query,
  orderBy,
  doc,
  updateDoc,
} from "firebase/firestore";

export default function AdminPage() {
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push("/login");
      }
    });

    return () => unsubscribe();
  }, [router]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const q = query(
          collection(db, "orders"),
          orderBy("createdAt", "desc")
        );

        const snapshot = await getDocs(q);

        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setOrders(data);
      } catch (error) {
        console.error(error);
      }

      setLoading(false);
    };

    fetchOrders();
  }, []);

  const updateStatus = async (id: string, status: string) => {
    try {
      await updateDoc(doc(db, "orders", id), {
        status,
      });

      setOrders((prev) =>
        prev.map((order) =>
          order.id === id ? { ...order, status } : order
        )
      );
    } catch (error) {
      console.error(error);
    }
  };

  const logout = async () => {
    await signOut(auth);
    router.push("/login");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center text-2xl">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-yellow-400">
          Orders Dashboard
        </h1>

        <button
          onClick={logout}
          className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg"
        >
          Logout
        </button>
      </div>

      {orders.length === 0 ? (
        <p>No orders yet.</p>
      ) : (
        <div className="space-y-6">
          {orders.map((order: any) => (
            <div
              key={order.id}
              className="bg-zinc-900 rounded-xl p-6 border border-zinc-700"
            >
              <h2 className="text-2xl font-bold text-yellow-400">
                {order.customer.name}
              </h2>

              <p>📞 {order.customer.phone}</p>
              <p>📍 {order.customer.governorate}</p>
              <p>{order.customer.address}</p>

              {order.customer.notes && (
                <p className="mt-2">
                  <strong>Notes:</strong> {order.customer.notes}
                </p>
              )}

              <div className="mt-4">
                <h3 className="font-bold text-lg mb-2">Products</h3>

                {order.cart.map((item: any) => (
                  <div
                    key={item.id}
                    className="flex justify-between border-b border-zinc-700 py-2"
                  >
                    <span>{item.name}</span>
                    <span>x {item.quantity}</span>
                    <span>{item.price} EGP</span>
                  </div>
                ))}
              </div>

              <div className="mt-5">
                <p className="mb-3">
                  <strong>Status:</strong> {order.status || "Pending"}
                </p>

                <div className="flex gap-2 flex-wrap">
                  <button
                    onClick={() => updateStatus(order.id, "Pending")}
                    className="bg-yellow-500 text-black px-3 py-2 rounded"
                  >
                    Pending
                  </button>

                  <button
                    onClick={() => updateStatus(order.id, "Confirmed")}
                    className="bg-blue-500 text-white px-3 py-2 rounded"
                  >
                    Confirmed
                  </button>

                  <button
                    onClick={() => updateStatus(order.id, "Shipped")}
                    className="bg-orange-500 text-white px-3 py-2 rounded"
                  >
                    Shipped
                  </button>

                  <button
                    onClick={() => updateStatus(order.id, "Delivered")}
                    className="bg-green-600 text-white px-3 py-2 rounded"
                  >
                    Delivered
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}