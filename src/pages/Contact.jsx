import { useState } from 'react'
import { Mail as MailIcon, Phone, Send } from 'lucide-react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState({ loading: false, success: false, error: '' })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ loading: true, success: false, error: '' })

    try {
      // Send email to developer
      const response1 = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id: 'service_b9yg8bm',
          template_id: 'template_msfzosg',
          user_id: 'kc7N-ZhC7f4SSz3R4',
          template_params: {
            from_name: formData.name,
            reply_to: formData.email,
            subject: formData.subject,
            message: formData.message,
          },
        }),
      })

      if (!response1.ok) {
        const error1 = await response1.text()
        console.error('Developer email failed:', error1)
        throw new Error('Failed to send notification to developer')
      }

      // Send auto-reply to user
      const response2 = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id: 'service_b9yg8bm',
          template_id: 'template_flrmidd',
          user_id: 'kc7N-ZhC7f4SSz3R4',
          template_params: {
            from_name: formData.name,
            reply_to: formData.email,
            subject: formData.subject,
            message: formData.message,
          },
        }),
      })

      if (!response2.ok) {
        const error2 = await response2.text()
        console.error('Auto-reply failed:', error2)
      }

      setStatus({ loading: false, success: true, error: '' })
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      console.error('Submit error:', error)
      setStatus({ loading: false, success: false, error: 'Failed to send message. Please try again.' })
    }
  }

  return (
    <>
    <Box 
      className="flex flex-col items-center justify-center text-center" 
      sx={{ 
        py: { xs: 12, md: 16 }, 
        px: 4,
        width: '100vw',
        marginLeft: 'calc(-50vw + 50%)',
        background: 'linear-gradient(135deg, #1e4620 0%, #2d5a27 50%, #3a7a42 100%)',
        fontFamily: 'Poppins, Arial, sans-serif' 
      }}
    >
      <Typography 
        variant="h2" 
        sx={{ 
          fontWeight: 700, 
          mb: 2, 
          color: '#fff', 
          fontSize: { xs: '2.5rem', md: '3rem' }
        }}
      >
        Get In Touch
      </Typography>
      <Typography 
        variant="h6" 
        sx={{ 
          color: '#e0e0e0', 
          fontSize: '1.1rem',
          fontWeight: 400
        }}
      >
        Have questions? We're here to help you on your hiking journey
      </Typography>
    </Box>

    <Box sx={{ 
      py: { xs: 6, md: 8 }, 
      px: { xs: 4, md: 10 }, 
      width: '100vw',
      marginLeft: 'calc(-50vw + 50%)',
      backgroundColor: '#e8f9f0',
      fontFamily: 'Poppins, Arial, sans-serif' 
    }}>
      <div className="max-w-7xl mx-auto">
        <div style={{ 
          backgroundColor: '#f9fafb', 
          padding: '2rem', 
          borderRadius: '1rem', 
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)', 
          border: '2px solid #e5e7eb' 
        }}>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Side - Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Contact Information</h2>
              
              {/* Email */}
              <div className="flex items-start mb-6">
                <div className="bg-green-100 p-3 rounded-lg mr-4">
                  <MailIcon className="w-6 h-6 text-green-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 text-lg mb-1">Email</h3>
                  <p className="text-gray-600">info@hikesafe.com</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start mb-6">
                <div className="bg-green-100 p-3 rounded-lg mr-4">
                  <Phone className="w-6 h-6 text-green-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 text-lg mb-1">Phone</h3>
                  <p className="text-gray-600">(555) 123-4567</p>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Send Us a Message</h2>

            {status.success && (
              <div className="mb-4 p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg">
                Message sent successfully! We'll get back to you soon.
              </div>
            )}
            {status.error && (
              <div className="mb-4 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg">
                {status.error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="How can we help?"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Tell us more about your inquiry..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status.loading}
                className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5" />
                {status.loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
            </div>
          </div>
        </div>
      </div>
    </Box>
    </>
  );
}
