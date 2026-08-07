import { supabase } from "@/app/lib/supabase";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

async function updateProduct(formData: FormData) {
  "use server";

  const id = formData.get("id") as string;

 const { data, error } = await supabase
  .from("products")
  .update({
    name: formData.get("name"),
    brand: formData.get("brand"),
    price: Number(formData.get("price")),
    image: formData.get("image"),
    top_notes: (formData.get("top_notes") as string)
      .split(",")
      .map((x) => x.trim()),
    heart_notes: (formData.get("heart_notes") as string)
      .split(",")
      .map((x) => x.trim()),
    base_notes: (formData.get("base_notes") as string)
      .split(",")
      .map((x) => x.trim()),
    sillage: formData.get("sillage"),
    longevity: formData.get("longevity"),
    occasion: formData.get("occasion"),
    category: formData.get("category"),
  })
  .eq("id", id)
  .select();

console.log("UPDATE DATA =", data);
console.log("UPDATE ERROR =", error);

  if (error) {
    console.log(error);
    return;
  }

  revalidatePath("/admin/products");
  redirect("/admin/products");
}

export default async function EditProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  console.log("PARAM ID =", id);

  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", id);

  console.log("PRODUCT =", data);
  console.log("ERROR =", error);

  const product = data?.[0];

  if (!product) {
    return (
      <div className="text-white text-3xl p-10">
        Product not found
      </div>
    );
  }

  return (
    <div className="max-w-5xl">
      <h1 className="text-5xl font-bold text-yellow-400 mb-10">
        Edit Product
      </h1>

      <form
        action={updateProduct}
        className="bg-zinc-900 rounded-2xl p-8 space-y-6"
      >
        <input
          type="hidden"
          name="id"
          value={product.id}
        />

        <input
          name="name"
          defaultValue={product.name}
          className="w-full bg-zinc-800 p-4 rounded-xl"
        />

        <input
          name="brand"
          defaultValue={product.brand}
          className="w-full bg-zinc-800 p-4 rounded-xl"
        />

        <input
          name="price"
          type="number"
          defaultValue={product.price}
          className="w-full bg-zinc-800 p-4 rounded-xl"
        />

        <input
          name="image"
          defaultValue={product.image}
          className="w-full bg-zinc-800 p-4 rounded-xl"
        />

        <textarea
          name="top_notes"
          defaultValue={product.top_notes?.join(", ")}
          rows={2}
          className="w-full bg-zinc-800 p-4 rounded-xl"
        />

        <textarea
          name="heart_notes"
          defaultValue={product.heart_notes?.join(", ")}
          rows={2}
          className="w-full bg-zinc-800 p-4 rounded-xl"
        />

        <textarea
          name="base_notes"
          defaultValue={product.base_notes?.join(", ")}
          rows={2}
          className="w-full bg-zinc-800 p-4 rounded-xl"
        />

        <input
          name="sillage"
          defaultValue={product.sillage}
          className="w-full bg-zinc-800 p-4 rounded-xl"
        />

        <input
          name="longevity"
          defaultValue={product.longevity}
          className="w-full bg-zinc-800 p-4 rounded-xl"
        />

        <input
          name="occasion"
          defaultValue={product.occasion}
          className="w-full bg-zinc-800 p-4 rounded-xl"
        />

        <input
          name="category"
          defaultValue={product.category}
          className="w-full bg-zinc-800 p-4 rounded-xl"
        />

        <button
          type="submit"
          className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold hover:bg-yellow-300"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}