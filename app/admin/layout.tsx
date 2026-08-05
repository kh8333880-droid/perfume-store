import Link from "next/link";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-black text-white flex">
      {/* Sidebar */}
      <aside className="w-72 bg-zinc-950 border-r border-yellow-400 p-6">
        <h1 className="text-3xl font-extrabold text-yellow-400 mb-10">
          PERFUMER
        </h1>

        <nav className="flex flex-col gap-4">
          <Link
            href="/admin"
            className="rounded-xl px-4 py-3 hover:bg-yellow-400 hover:text-black transition"
          >
            📊 Dashboard
          </Link>

          <Link
            href="/admin/products"
            className="rounded-xl px-4 py-3 hover:bg-yellow-400 hover:text-black transition"
          >
            🧴 Products
          </Link>

          <Link
            href="/admin/orders"
            className="rounded-xl px-4 py-3 hover:bg-yellow-400 hover:text-black transition"
          >
            🛒 Orders
          </Link>

          <Link
            href="/admin/messages"
            className="rounded-xl px-4 py-3 hover:bg-yellow-400 hover:text-black transition"
          >
            ✉️ Messages
          </Link>

          <Link
            href="/admin/settings"
            className="rounded-xl px-4 py-3 hover:bg-yellow-400 hover:text-black transition"
          >
            ⚙️ Settings
          </Link>
        </nav>
      </aside>

      {/* Content */}
      <main className="flex-1 p-10">
        {children}
      </main>
    </div>
  );
}