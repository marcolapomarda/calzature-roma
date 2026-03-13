import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  // Avviso in console per configurazione mancante, ma non blocchiamo l'app.
  console.warn(
    "Supabase non è configurato. Imposta VITE_SUPABASE_URL e VITE_SUPABASE_ANON_KEY nel file .env.local."
  );
}

export const supabase = createClient(supabaseUrl ?? "", supabaseAnonKey ?? "");

const PRODUCT_IMAGES_BUCKET = "product-images";

export function getProductImageUrl(path) {
  if (!path) return "";
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  const { data } = supabase.storage
    .from(PRODUCT_IMAGES_BUCKET)
    .getPublicUrl(path);

  return data?.publicUrl ?? path;
}

