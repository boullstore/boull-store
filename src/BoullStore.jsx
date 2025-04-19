import React from 'react';
import { Button } from "@/components/ui/button";

export default function BoullStore() {
  const handleOrder = () => {
    const message = encodeURIComponent("Halo admin Boull Store, saya ingin melakukan top up.");
    window.open(`https://wa.me/628881965214?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      {/* Navbar */}
      <header className="bg-gray-800 shadow-md">
        <div className="container mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold">Boull Store</h1>
          <nav>
            <ul className="flex gap-4">
              <li><a href="#" className="hover:text-green-400">Home</a></li>
              <li><a href="#layanan" className="hover:text-green-400">Layanan</a></li>
              <li><a href="#pembayaran" className="hover:text-green-400">Pembayaran</a></li>
              <li><a href="#kontak" className="hover:text-green-400">Kontak</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="text-center py-16 px-6 bg-gradient-to-br from-green-500 to-teal-500">
        <h2 className="text-4xl font-bold mb-4">Top Up Game Murah & Cepat!</h2>
        <p className="text-lg mb-6">Tersedia berbagai layanan top up dan jasa game lainnya.</p>
        <Button onClick={handleOrder} className="bg-white text-green-600 font-semibold hover:bg-gray-100">
          Mulai Top Up via WhatsApp
        </Button>
      </section>

      {/* Layanan */}
      <section id="layanan" className="container mx-auto py-16 px-4">
        <h3 className="text-3xl font-bold text-center mb-12">Layanan Kami</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
            <h4 className="text-xl font-semibold mb-2">Top Up Game</h4>
            <p>Dari Mobile Legends, Valorant, Genshin hingga banyak lainnya.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
            <h4 className="text-xl font-semibold mb-2">Jasa Rekber</h4>
            <p>Transaksi aman dan terpercaya untuk jual beli akun.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
            <h4 className="text-xl font-semibold mb-2">Desain & Editing</h4>
            <p>Jasa desain logo, banner, thumbnail YouTube dan lainnya.</p>
          </div>
        </div>
      </section>

      {/* Pembayaran */}
      <section id="pembayaran" className="bg-gray-800 py-12 px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold mb-6">Metode Pembayaran</h3>
          <p className="mb-2">Dana / OVO / Gopay:</p>
          <p className="mb-4 font-semibold">0881010542123 / 081219250468</p>
          <img src="/qris.jpg" alt="QRIS Pembayaran" className="mx-auto w-60 rounded shadow-lg" />
        </div>
      </section>

      {/* Kontak */}
      <section id="kontak" className="bg-gray-900 py-12 px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Hubungi Kami</h3>
          <p className="mb-2">WhatsApp: 08881965214</p>
          <p>Email: support@boullstore.com</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-center py-4 border-t border-gray-700">
        <p className="text-sm">&copy; 2025 Boull Store. All rights reserved.</p>
      </footer>
    </div>
  );
              }
