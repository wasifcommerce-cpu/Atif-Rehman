import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Calendar, Sparkles } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const { showToast } = useShop();

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'interior-styling',
    room: 'living-room',
    timeline: '1-3-months',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    showToast('Consultation Request Received', 'An interior designer will reach out within 24 hours.');
  };

  return (
    <div id="contact-page" className="py-8 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#9B9995] block mb-2">
          STUDIO CONCIERGE & SHOWROOM
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#292827] tracking-tight mb-4">
          Connect With Our Design Team
        </h1>
        <p className="text-base text-[#68645F] max-w-xl mx-auto">
          Whether you require bespoke spatial planning, complimentary fabric swatches, or showroom styling appointments, we are here to assist.
        </p>
      </div>

      {/* Grid: Form & Showroom Details */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        
        {/* Left: Consultation Request Form */}
        <div className="lg:col-span-7 bg-[#FFFFFF] p-6 sm:p-10 rounded-2xl sm:rounded-3xl border border-[#DED9D1] shadow-xs">
          {formSubmitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-[#386641]/10 text-[#386641] flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#292827] mb-2">
                Thank You, {formData.name}
              </h3>
              <p className="text-sm text-[#68645F] max-w-md mx-auto mb-6">
                Your consultation request has been routed to our Lead Spatial Stylist. We will contact you at <strong>{formData.email}</strong> with available appointment times and material samples.
              </p>
              <button
                onClick={() => {
                  setFormSubmitted(false);
                  setFormData({
                    name: '',
                    email: '',
                    service: 'interior-styling',
                    room: 'living-room',
                    timeline: '1-3-months',
                    message: ''
                  });
                }}
                className="bg-[#292827] text-white text-xs font-semibold px-6 py-2.5 rounded-xl hover:bg-[#1A1918]"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-[#D9894D]" />
                <h3 className="font-serif text-xl font-bold text-[#292827]">
                  Book a Design Consultation
                </h3>
              </div>
              <p className="text-xs text-[#68645F] mb-4">
                Complimentary 45-minute virtual or in-person session with 3D space planning & material swatches.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-[#292827] block mb-1.5">Your Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Eleanor Vance"
                    className="w-full bg-[#F7F4EF] border border-[#DED9D1] rounded-xl px-4 py-2.5 text-xs text-[#292827] focus:outline-hidden focus:border-[#D9894D]"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-[#292827] block mb-1.5">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@domain.com"
                    className="w-full bg-[#F7F4EF] border border-[#DED9D1] rounded-xl px-4 py-2.5 text-xs text-[#292827] focus:outline-hidden focus:border-[#D9894D]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-[#292827] block mb-1.5">Consultation Type</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-[#F7F4EF] border border-[#DED9D1] rounded-xl px-3 py-2.5 text-xs text-[#292827] focus:outline-hidden"
                  >
                    <option value="interior-styling">Full Interior Spatial Planning</option>
                    <option value="room-makeover">Single Room Refresh</option>
                    <option value="trade-inquiry">Trade & Architectural Project</option>
                    <option value="swatches">Fabric & Wood Swatch Request</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold text-[#292827] block mb-1.5">Target Room / Space</label>
                  <select
                    value={formData.room}
                    onChange={(e) => setFormData({ ...formData, room: e.target.value })}
                    className="w-full bg-[#F7F4EF] border border-[#DED9D1] rounded-xl px-3 py-2.5 text-xs text-[#292827] focus:outline-hidden"
                  >
                    <option value="living-room">Living Sanctuary</option>
                    <option value="dining-room">Dining & Gathering</option>
                    <option value="bedroom">Master Bedroom Suite</option>
                    <option value="home-office">Architectural Home Office</option>
                    <option value="whole-home">Complete Residence</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-[#292827] block mb-1.5">Project Scope & Notes</label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share dimensions, preferred color palettes, or furniture pieces you have your eye on..."
                  className="w-full bg-[#F7F4EF] border border-[#DED9D1] rounded-xl px-4 py-2.5 text-xs text-[#292827] focus:outline-hidden focus:border-[#D9894D]"
                />
              </div>

              <button
                type="submit"
                id="contact-submit-btn"
                className="w-full bg-[#D9894D] hover:bg-[#C27339] text-white font-semibold text-sm py-3.5 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer mt-2"
              >
                <Send className="w-4 h-4" />
                <span>Request Design Consultation</span>
              </button>
            </form>
          )}
        </div>

        {/* Right: Studio Location & Hours */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Flagship Showroom Card */}
          <div className="bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-[#DED9D1] shadow-2xs">
            <h3 className="font-serif text-xl font-bold text-[#292827] mb-4">
              SoHo Flagship Showroom
            </h3>
            
            <div className="space-y-4 text-xs text-[#68645F]">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#D9894D] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#292827] block">Maison & Form Studio</strong>
                  <span>452 Broome Street, 3rd Floor</span>
                  <br />
                  <span>SoHo, New York, NY 10013</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#D9894D] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#292827] block">Hours of Operation</strong>
                  <span>Monday – Saturday: 10:00 AM – 7:00 PM EST</span>
                  <br />
                  <span>Sunday: 11:00 AM – 6:00 PM EST (By Appointment)</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#D9894D] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#292827] block">Client Care Concierge</strong>
                  <span>+1 (800) 842-1920</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#D9894D] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#292827] block">Direct Inquiries</strong>
                  <span>concierge@maisonandform.com</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-[#DED9D1]">
              <span className="text-[11px] font-semibold text-[#292827] block mb-2">
                Showroom Amenities
              </span>
              <div className="flex flex-wrap gap-1.5 text-[11px] text-[#68645F]">
                <span className="bg-[#F7F4EF] px-2.5 py-1 rounded-md border border-[#DED9D1]">Private Fitting Room</span>
                <span className="bg-[#F7F4EF] px-2.5 py-1 rounded-md border border-[#DED9D1]">Material Swatch Wall</span>
                <span className="bg-[#F7F4EF] px-2.5 py-1 rounded-md border border-[#DED9D1]">Espresso Bar</span>
                <span className="bg-[#F7F4EF] px-2.5 py-1 rounded-md border border-[#DED9D1]">Trade Desk</span>
              </div>
            </div>
          </div>

          {/* Quick FAQ summary */}
          <div className="bg-[#F7F4EF] p-6 rounded-2xl border border-[#DED9D1] text-xs">
            <h4 className="font-serif font-bold text-sm text-[#292827] mb-2">
              White-Glove Delivery Questions?
            </h4>
            <p className="text-[#68645F] leading-relaxed mb-3">
              All furniture orders over $500 include complimentary in-room placement, unboxing, assembly, and debris removal.
            </p>
            <span className="text-[#D9894D] font-bold">Standard delivery window: 5–9 business days.</span>
          </div>

        </div>

      </div>

    </div>
  );
};
