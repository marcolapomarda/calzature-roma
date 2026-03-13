import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/supabaseClient";

export function useProductsBySubcategory(categoryId, subcategoryId) {
  return useQuery({
    enabled: !!categoryId && !!subcategoryId,
    queryKey: ["products", categoryId, subcategoryId],
    queryFn: async () => {
      let query = supabase
        .from("products")
        .select("*")
        .eq("category", categoryId);

      // Sottocategoria "speciale" per mostrare tutti i prodotti della categoria
      if (subcategoryId !== "tutti-prodotti") {
        query = query.eq("subcategory", subcategoryId);
      }

      const { data, error } = await query.order("created_at", {
        ascending: false,
      });

      if (error) {
        console.error(error);
        throw error;
      }

      return data ?? [];
    },
  });
}

export function useProductById(id) {
  return useQuery({
    enabled: !!id,
    queryKey: ["product", id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("id", id)
        .maybeSingle();

      if (error) {
        console.error(error);
        throw error;
      }

      return data ?? null;
    },
  });
}

