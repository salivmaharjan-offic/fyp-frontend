import { useMemo, useState } from "react";

const Color = () => {
  const [selectedColor, setSelectedColor] = useState("#3b82f6");
  const [base, setBase] = useState<"distemper" | "emulsion">("emulsion");

  const [quantities, setQuantities] = useState<Record<string, number>>({});

  const capacities = {
    distemper: [
      { id: 1, value: "1kg", label: "1 KG" },
      { id: 2, value: "5kg", label: "5 KG" },
      { id: 3, value: "10kg", label: "10 KG" },
      { id: 4, value: "20kg", label: "20 KG" },
    ],

    emulsion: [
      { id: 1, value: "1l", label: "1 Litre" },
      { id: 2, value: "4l", label: "4 Litres" },
      { id: 3, value: "10l", label: "10 Litres" },
      { id: 4, value: "20l", label: "20 Litres" },
    ],
  };

  const availableSizes = capacities[base];

  const updateQuantity = (size: string, amount: number) => {
    setQuantities((prev) => {
      const current = prev[size] || 0;
      const updated = Math.max(0, current + amount);

      return {
        ...prev,
        [size]: updated,
      };
    });
  };

  const totalItems = useMemo(() => {
    return Object.values(quantities).reduce((total, qty) => total + qty, 0);
  }, [quantities]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-primary text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold">Paint Color Picker</h1>

          <p className="mt-3 text-white/90">
            Choose your preferred paint color, select the paint type, and
            configure your order.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* WALL PREVIEW */}
          <div className="bg-white rounded-3xl shadow-sm border p-8">
            <h2 className="text-2xl font-semibold mb-8">Wall Preview</h2>

            <div className="flex justify-center">
              <svg viewBox="0 0 500 350" className="w-full max-w-lg">
                {/* Roof */}
                <polygon points="250,20 430,120 70,120" fill="#b45309" />

                {/* House */}
                <rect
                  x="70"
                  y="120"
                  width="360"
                  height="180"
                  rx="4"
                  fill={selectedColor}
                  stroke="#d1d5db"
                  strokeWidth="3"
                />

                {/* Door */}
                <rect x="210" y="210" width="80" height="90" fill="#7c3f00" />

                <circle cx="275" cy="255" r="4" fill="#facc15" />

                {/* Windows */}
                <rect
                  x="110"
                  y="160"
                  width="70"
                  height="60"
                  fill="#dbeafe"
                  stroke="#6b7280"
                />

                <line x1="145" y1="160" x2="145" y2="220" stroke="#6b7280" />

                <line x1="110" y1="190" x2="180" y2="190" stroke="#6b7280" />

                <rect
                  x="320"
                  y="160"
                  width="70"
                  height="60"
                  fill="#dbeafe"
                  stroke="#6b7280"
                />

                <line x1="355" y1="160" x2="355" y2="220" stroke="#6b7280" />

                <line x1="320" y1="190" x2="390" y2="190" stroke="#6b7280" />
              </svg>
            </div>
          </div>

          {/* CONFIGURATION */}
          <div className="space-y-8">
            {/* Color */}
            <div className="bg-white rounded-3xl shadow-sm border p-8">
              <h2 className="text-2xl font-semibold mb-6">Select Color</h2>

              <div className="flex flex-wrap items-center gap-4">
                <input
                  type="color"
                  value={selectedColor}
                  onChange={(e) => setSelectedColor(e.target.value)}
                  className="h-16 w-24 cursor-pointer rounded-lg border"
                />

                <div>
                  <p className="text-sm text-gray-500">Selected Color</p>

                  <p className="font-semibold">{selectedColor.toUpperCase()}</p>
                </div>

                <div
                  className="h-14 w-14 rounded-full border"
                  style={{
                    backgroundColor: selectedColor,
                  }}
                />
              </div>
            </div>

            {/* Base */}
            <div className="bg-white rounded-3xl shadow-sm border p-8">
              <h2 className="text-2xl font-semibold mb-6">Select Paint Type</h2>

              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    value: "distemper",
                    label: "Distemper",
                  },
                  {
                    value: "emulsion",
                    label: "Emulsion",
                  },
                ].map((item) => (
                  <button
                    key={item.value}
                    type="button"
                    onClick={() => {
                      setBase(item.value as "distemper" | "emulsion");

                      setQuantities({});
                    }}
                    className={`rounded-2xl border p-6 transition-all ${
                      base === item.value
                        ? "bg-primary border-primary text-white shadow-lg"
                        : "border-gray-300 hover:border-primary"
                    }`}
                  >
                    <p className="font-semibold text-lg">{item.label}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Capacities */}
            <div className="bg-white rounded-3xl shadow-sm border p-8">
              <h2 className="text-2xl font-semibold mb-6">Select Quantities</h2>

              <div className="space-y-4">
                {availableSizes.map((size) => (
                  <div
                    key={size.id}
                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border rounded-2xl p-5"
                  >
                    <div>
                      <p className="font-semibold text-lg">{size.label}</p>

                      <p className="text-sm text-gray-500">Paint Capacity</p>
                    </div>

                    <div className="flex items-center gap-4">
                      <button
                        type="button"
                        onClick={() => updateQuantity(size.value, -1)}
                        className="h-11 w-11 rounded-full border text-xl hover:bg-gray-100"
                      >
                        −
                      </button>

                      <span className="w-10 text-center text-lg font-semibold">
                        {quantities[size.value] || 0}
                      </span>

                      <button
                        type="button"
                        onClick={() => updateQuantity(size.value, 1)}
                        className="h-11 w-11 rounded-full bg-primary text-white text-xl hover:opacity-90"
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Summary */}
            <div className="bg-white rounded-3xl shadow-sm border p-8">
              <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Color</span>

                  <div className="flex items-center gap-2">
                    <div
                      className="h-5 w-5 rounded-full border"
                      style={{
                        backgroundColor: selectedColor,
                      }}
                    />

                    <span className="font-medium">
                      {selectedColor.toUpperCase()}
                    </span>
                  </div>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600">Paint Type</span>

                  <span className="font-medium capitalize">{base}</span>
                </div>

                <div>
                  <p className="text-gray-600 mb-2">Selected Quantities</p>

                  <div className="space-y-2">
                    {Object.entries(quantities)
                      .filter(([_, qty]) => qty > 0)
                      .map(([size, qty]) => (
                        <div key={size} className="flex justify-between">
                          <span>{size}</span>

                          <span>× {qty}</span>
                        </div>
                      ))}

                    {totalItems === 0 && (
                      <p className="text-gray-400">No paint selected yet.</p>
                    )}
                  </div>
                </div>

                <div className="pt-4 border-t flex justify-between text-lg font-semibold">
                  <span>Total Items</span>

                  <span>{totalItems}</span>
                </div>

                <button
                  type="button"
                  className="w-full mt-6 bg-primary text-white py-4 rounded-2xl font-semibold hover:opacity-90 transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Color;
