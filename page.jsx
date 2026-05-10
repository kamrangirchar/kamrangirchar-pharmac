export default function KamrangircharPharmacyWebsite() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 text-gray-800">
      {/* Header */}
      <header className="bg-blue-600 text-white shadow-lg">
        <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-bold">
            💊 Kamrangirchar Pharmacy
          </h1>
          <button className="bg-white text-blue-600 px-4 py-2 rounded-2xl font-semibold shadow hover:scale-105 transition">
            Order Now
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
            Trusted Online Pharmacy in Kamrangirchar
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Genuine medicines, healthcare products and fast home delivery service in Kamrangirchar.
          </p>

          <div className="flex gap-4 flex-wrap">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-2xl font-semibold shadow-lg hover:scale-105 transition">
              WhatsApp Order
            </button>

            <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-2xl font-semibold hover:bg-blue-50 transition">
              Contact Us
            </button>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 text-center">
          <div className="text-7xl mb-4">💊</div>
          <h3 className="text-2xl font-bold mb-3">Fast & Trusted Service</h3>
          <p className="text-gray-600">
            Home delivery available for medicines and healthcare essentials.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-3xl shadow-lg p-6 text-center">
            <div className="text-5xl mb-4">🛵</div>
            <h3 className="text-xl font-semibold mb-2">Home Delivery</h3>
            <p className="text-gray-600">Fast delivery across Kamrangirchar area.</p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-6 text-center">
            <div className="text-5xl mb-4">✅</div>
            <h3 className="text-xl font-semibold mb-2">Genuine Medicine</h3>
            <p className="text-gray-600">Trusted and authentic healthcare products.</p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-6 text-center">
            <div className="text-5xl mb-4">📩</div>
            <h3 className="text-xl font-semibold mb-2">Easy Ordering</h3>
            <p className="text-gray-600">Order via Facebook Inbox or WhatsApp.</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-blue-600 text-white py-14 mt-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg mb-2">📍 Kamrangirchar, Dhaka</p>
          <p className="text-lg mb-2">📞 +8801XXXXXXXXX</p>
          <p className="text-lg mb-6">💬 Facebook Inbox & WhatsApp Available</p>

          <button className="bg-white text-blue-600 px-6 py-3 rounded-2xl font-bold shadow-lg hover:scale-105 transition">
            Message Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-5 text-center text-sm">
        © 2026 Kamrangirchar Pharmacy • All Rights Reserved
      </footer>
    </div>
  );
}
