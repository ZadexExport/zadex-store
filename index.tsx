
// نسخة متعددة اللغات مع منتجات فيسبوك + صفحة من نحن
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, Trash2 } from "lucide-react";
import { motion } from "framer-motion";

export default function HomePage() {
  const [lang, setLang] = useState("ar");
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    nameAr: "", nameEn: "", descriptionAr: "", descriptionEn: "",
    price: "", image: "", categoryAr: "", categoryEn: ""
  });

  const isArabic = lang === "ar";

  return (
    <main className="min-h-screen bg-[#0B1D2C] text-white p-4">
      <section className="text-center py-4">
        <div className="flex justify-end">
          <Button
            variant="outline"
            className="text-sm border border-[#4188c6] mr-2"
            onClick={() => setLang(lang === "ar" ? "en" : "ar")}
          >
            {isArabic ? "English" : "العربية"}
          </Button>
        </div>
        <motion.img
          src="/logo.png"
          alt="ZADEX Logo"
          className="mx-auto w-40 h-40 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        />
        <h1 className="text-4xl font-bold text-[#4188c6]">ZADEX EXPORT</h1>
        <p className="text-lg text-gray-300">
          {isArabic ? "منصة عالمية لبيع وتصدير جميع المنتجات" : "Global platform to sell and export all products"}
        </p>
      </section>

      <section className="max-w-4xl mx-auto mt-10 p-6 bg-[#12283A] rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 text-[#5FB4F2]">
          {isArabic ? "من نحن" : "About Us"}
        </h2>
        <p className="text-gray-300 leading-loose">
          {isArabic ? (
            "ZADEX EXPORT هي شركة رائدة في مجال التجارة الإلكترونية وتصدير المنتجات إلى الأسواق العالمية. نسعى دائمًا لتقديم أفضل المنتجات بجودة عالية وأسعار تنافسية. نؤمن بأهمية الابتكار وخدمة العملاء، ونوفر منصة متكاملة تسهل عملية البيع والشراء لجميع الفئات."
          ) : (
            "ZADEX EXPORT is a leading company in e-commerce and global product export. We strive to provide the best products with high quality and competitive prices. We believe in innovation and customer service, offering an integrated platform that simplifies the buying and selling process for everyone."
          )}
        </p>
      </section>
    </main>
  );
}
