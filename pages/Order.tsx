import React, { useMemo, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { WHATSAPP_NUMBER } from '../constants';

type OrderItem = {
  name: string;
  quantity: string;
  price: string;
};

type OrderFormState = {
  fullName: string;
  phone: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  pincode: string;
  items: OrderItem[];
  notes: string;
};

const Order: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const prefilledItem = searchParams.get('item') ?? '';
  const prefilledPrice = searchParams.get('price') ?? '';

  const getInitialItems = (): OrderItem[] => {
    if (typeof window !== 'undefined') {
      const stored = window.localStorage.getItem('mokai-cart');
      if (stored) {
        try {
          const parsed = JSON.parse(stored);
          if (Array.isArray(parsed) && parsed.length > 0) {
            return parsed;
          }
        } catch {
          return [];
        }
      }
    }

    if (prefilledItem || prefilledPrice) {
      return [{ name: prefilledItem, quantity: '1', price: prefilledPrice }];
    }

    return [{ name: '', quantity: '1', price: '' }];
  };

  const [form, setForm] = useState<OrderFormState>(() => ({
    fullName: '',
    phone: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    pincode: '',
    items: getInitialItems(),
    notes: '',
  }));

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const hasItems = form.items.some((item) => item.name || item.price);
    if (hasItems) {
      window.localStorage.setItem('mokai-cart', JSON.stringify(form.items));
    } else {
      window.localStorage.removeItem('mokai-cart');
    }
  }, [form.items]);

  const total = useMemo(() => {
    const sum = form.items.reduce((acc, item) => {
      const qty = Number(item.quantity);
      const price = Number(item.price);
      if (Number.isNaN(qty) || Number.isNaN(price) || !item.price) {
        return acc;
      }
      return acc + qty * price;
    }, 0);

    return sum > 0 ? String(sum) : '';
  }, [form.items]);

  const handleChange = (field: keyof OrderFormState) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleItemChange = (index: number, field: keyof OrderItem) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => {
      const nextItems = [...prev.items];
      nextItems[index] = { ...nextItems[index], [field]: event.target.value };
      return { ...prev, items: nextItems };
    });
  };

  const handleAddItem = () => {
    setForm((prev) => ({
      ...prev,
      items: [...prev.items, { name: '', quantity: '1', price: '' }],
    }));
  };

  const handleRemoveItem = (index: number) => {
    setForm((prev) => {
      const nextItems = prev.items.filter((_, idx) => idx !== index);
      return { ...prev, items: nextItems.length ? nextItems : [{ name: '', quantity: '1', price: '' }] };
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const address = [form.addressLine1, form.addressLine2, form.city, form.pincode]
      .filter(Boolean)
      .join(', ');

    const itemLines = form.items
      .filter((item) => item.name || item.price)
      .map((item) => {
        const priceText = item.price ? ` (₹${item.price})` : '';
        const nameText = item.name || 'Item';
        return `- ${nameText} x${item.quantity}${priceText}`;
      });

    const messageLines = [
      'New Mokai Order',
      `Name: ${form.fullName}`,
      `Phone: ${form.phone}`,
      `Address: ${address}`,
      itemLines.length ? 'Items:' : '',
      ...itemLines,
      total ? `Estimated total: ₹${total}` : '',
      form.notes ? `Notes: ${form.notes}` : '',
    ].filter(Boolean);

    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(messageLines.join('\n'))}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
    if (typeof window !== 'undefined') {
      window.localStorage.removeItem('mokai-cart');
    }
    navigate('/order/thanks');
  };

  return (
    <div className="bg-[#F6F3EF] min-h-screen pt-32 pb-24">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-[#7BAA8D] font-bold">Order Online</p>
          <h1 className="text-4xl md:text-6xl font-serif text-[#2D2A28] mt-4">Place your order</h1>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto mt-4">
            Fill in the details below. We will receive your order on WhatsApp and confirm the final price and delivery time.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-3xl shadow-xl p-8 md:p-12 space-y-10"
        >
          <div>
            <h2 className="text-xl font-serif text-[#2D2A28] mb-6">Your Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                required
                type="text"
                placeholder="Full Name"
                value={form.fullName}
                onChange={handleChange('fullName')}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#7BAA8D]"
              />
              <input
                required
                type="tel"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange('phone')}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#7BAA8D]"
              />
            </div>
          </div>

          <div>
            <h2 className="text-xl font-serif text-[#2D2A28] mb-6">Delivery Address</h2>
            <div className="grid grid-cols-1 gap-6">
              <input
                required
                type="text"
                placeholder="Address Line 1"
                value={form.addressLine1}
                onChange={handleChange('addressLine1')}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#7BAA8D]"
              />
              <input
                type="text"
                placeholder="Address Line 2 (optional)"
                value={form.addressLine2}
                onChange={handleChange('addressLine2')}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#7BAA8D]"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  required
                  type="text"
                  placeholder="City"
                  value={form.city}
                  onChange={handleChange('city')}
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#7BAA8D]"
                />
                <input
                  required
                  type="text"
                  placeholder="Pincode"
                  value={form.pincode}
                  onChange={handleChange('pincode')}
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#7BAA8D]"
                />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-serif text-[#2D2A28] mb-6">Order Details</h2>
            <div className="space-y-6">
              {form.items.map((item, index) => (
                <div key={`${item.name}-${index}`} className="grid grid-cols-1 md:grid-cols-7 gap-4 items-center">
                  <input
                    required={index === 0}
                    type="text"
                    placeholder="Item Name"
                    value={item.name}
                    onChange={handleItemChange(index, 'name')}
                    className="md:col-span-3 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#7BAA8D]"
                  />
                  <input
                    required={index === 0}
                    type="number"
                    min="1"
                    placeholder="Qty"
                    value={item.quantity}
                    onChange={handleItemChange(index, 'quantity')}
                    className="md:col-span-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#7BAA8D]"
                  />
                  <input
                    type="number"
                    min="0"
                    placeholder="Price (₹)"
                    value={item.price}
                    onChange={handleItemChange(index, 'price')}
                    className="md:col-span-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#7BAA8D]"
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveItem(index)}
                    className="text-[10px] uppercase tracking-widest font-bold text-[#2D2A28] md:col-span-7 justify-self-end"
                  >
                    Remove
                  </button>
                </div>
              ))}

              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <button
                  type="button"
                  onClick={handleAddItem}
                  className="text-xs uppercase tracking-widest font-bold text-[#7BAA8D]"
                >
                  + Add another item
                </button>
                <Link
                  to="/menu"
                  className="text-xs uppercase tracking-widest font-bold text-[#2D2A28]"
                >
                  Add from menu
                </Link>
              </div>

              <textarea
                placeholder="Delivery instructions / preferred time (optional)"
                value={form.notes}
                onChange={handleChange('notes')}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#7BAA8D]"
                rows={3}
              />
            </div>
            {total && (
              <p className="text-sm text-gray-600 mt-4">
                Estimated total: <span className="font-semibold text-[#2D2A28]">₹{total}</span>
              </p>
            )}
          </div>

          <div className="pt-4 flex flex-col md:flex-row gap-4 items-center justify-between">
            <p className="text-xs uppercase tracking-[0.3em] text-gray-500">We respond on WhatsApp</p>
            <button
              type="submit"
              className="w-full md:w-auto px-12 py-4 bg-[#2D2A28] text-white uppercase tracking-widest text-xs font-bold hover:bg-[#7BAA8D] transition-all"
            >
              Send on WhatsApp
            </button>
          </div>
        </motion.form>
      </div>
    </div>
  );
};

export default Order;
