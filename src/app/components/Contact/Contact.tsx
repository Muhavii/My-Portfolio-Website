'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Calendar, X, Check } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  // Available time slots (in 30-minute intervals from 9 AM to 5 PM)
  const timeSlots = Array.from({ length: 17 }, (_, i) => {
    const hour = Math.floor(i / 2) + 9;
    const minutes = i % 2 === 0 ? '00' : '30';
    const period = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour > 12 ? hour - 12 : hour;
    return {
      value: `${hour}:${minutes}`,
      label: `${displayHour}:${minutes} ${period}`
    };
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          type: 'message'
        }),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Failed to send message');
      }

      setSubmitStatus({
        success: true,
        message: data.message || 'Message sent successfully! I\'ll get back to you soon.'
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to send message. Please try again later.';
      setSubmitStatus({
        success: false,
        message: errorMessage
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleScheduleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime) {
      setSubmitStatus({
        success: false,
        message: 'Please select both date and time'
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          type: 'schedule',
          date: selectedDate,
          time: selectedTime,
          message: `Scheduled call on ${new Date(selectedDate).toLocaleDateString()} at ${selectedTime}`
        }),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Failed to schedule call');
      }

      setSubmitStatus({
        success: true,
        message: data.message || `Call scheduled successfully for ${new Date(selectedDate).toLocaleDateString()} at ${selectedTime}!`
      });
      setFormData({ name: '', email: '', message: '' });
      setSelectedDate('');
      setSelectedTime('');
      setShowScheduleModal(false);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to schedule call. Please try again later.';
      setSubmitStatus({
        success: false,
        message: errorMessage
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-6">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-4 rounded-full" />
          <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
            Have a project in mind or want to schedule a call? I&apos;d love to hear from you!
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20, boxShadow: "0 10px 30px rgba(15, 23, 42, 0.08)" }}
          whileInView={{ opacity: 1, y: 0, boxShadow: "0 22px 55px rgba(10, 110, 209, 0.15)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="outlook-card outlook-focus p-6 sm:p-8"
        >
          {submitStatus && (
            <div
              className={`p-4 mb-6 rounded-lg ${
                submitStatus.success
                  ? 'bg-green-100 text-green-800'
                  : 'bg-red-100 text-red-800'
              }`}
            >
              {submitStatus.message}
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <motion.button
              onClick={() => setShowScheduleModal(true)}
              className="group flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white border border-slate-200 text-slate-800 font-medium hover:bg-slate-50 transition-colors"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                whileHover={{ rotate: 20 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Calendar className="w-5 h-5 text-blue-500" />
              </motion.div>
              Schedule a Call
              <motion.span 
                className="ml-1 text-blue-500 group-hover:translate-x-0.5 transition-transform"
                initial={{ opacity: 0, x: -5 }}
                whileHover={{ opacity: 1, x: 2 }}
              >
                →
              </motion.span>
            </motion.button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Name
                </label>
                <motion.input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-slate-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Your name"
                  whileFocus={{ scale: 1.01, boxShadow: "0 0 0 3px rgba(10, 110, 209, 0.1)" }}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Email
                </label>
                <motion.input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-slate-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="your.email@example.com"
                  whileFocus={{ scale: 1.01, boxShadow: "0 0 0 3px rgba(10, 110, 209, 0.1)" }}
                />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <label
                htmlFor="message"
                className="block text-sm font-medium text-slate-700 mb-1"
              >
                Message
              </label>
              <motion.textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-slate-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="Tell me about your project or how I can help..."
                whileFocus={{ scale: 1.01, boxShadow: "0 0 0 3px rgba(10, 110, 209, 0.1)" }}
              />
            </motion.div>

            <motion.div 
              className="pt-2"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="group relative w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 disabled:opacity-70 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        ⟳
                      </motion.div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <motion.div
                        whileHover={{ translateX: 4 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <Send className="w-5 h-5" />
                      </motion.div>
                    </>
                  )}
                </span>
                <motion.span 
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </motion.div>
          </form>
        </motion.div>
      </div>

      {/* Schedule Call Modal */}
      {showScheduleModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden"
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-slate-900">Schedule a Call</h3>
                <button
                  onClick={() => {
                    setShowScheduleModal(false);
                    setSubmitStatus(null);
                  }}
                  className="text-slate-400 hover:text-slate-500 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {submitStatus ? (
                <div
                  className={`p-4 rounded-lg mb-6 ${
                    submitStatus.success
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {submitStatus.message}
                </div>
              ) : (
                <form onSubmit={handleScheduleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Select Date
                    </label>
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-slate-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Select Time
                    </label>
                    <select
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-slate-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    >
                      <option value="">Select a time</option>
                      {timeSlots.map((slot) => (
                        <option key={slot.value} value={slot.value}>
                          {slot.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:opacity-90 disabled:opacity-70 disabled:cursor-not-allowed transition-opacity"
                    >
                      {isSubmitting ? 'Scheduling...' : 'Schedule Call'}
                      <Check className="w-5 h-5" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}