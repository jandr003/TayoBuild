import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import emailjs from '@emailjs/browser'

const EMAILJS_SERVICE_ID = 'service_nz7dnpg'
const EMAILJS_TEMPLATE_ID = 'template_vsp9eoz'
const EMAILJS_PUBLIC_KEY = 'ATAFr6hlEd9dpzJnx'

export default function ContactSelection() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [status, setStatus] = useState('idle') 

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')

    emailjs
      .send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          phone: form.phone,
          message: form.message,
          to_email: 'jandrewgresola@gmail.com',
          time: new Date().toLocaleString(),
        },
        EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus('success')
        setForm({ name: '', email: '', phone: '', message: '' })
      })
      .catch((error) => {
        console.error('EmailJS send failed:', error)
        setStatus('error')
      })
  }

  return (
    <section
      id="contact"
      className="bg-white px-6 py-16 font-['Poppins'] sm:px-10 md:px-10 lg:px-[42px] lg:py-24"
    >
      <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-2 lg:gap-40">
        <div className="text-left">
          <h2
            className="font-black tracking-tight text-slate-950"
            style={{
              fontSize: 'clamp(1.5rem, 4vw, 3rem)',
              lineHeight: 1.15,
            }}
          >
            <span className="block whitespace-nowrap">Let's bring your project to</span>
            <span className="block whitespace-nowrap">life together!</span>
          </h2>

          <p className="mt-6 max-w-md text-slate-500">
            From planning to completion, we're here to help you every step of
            the way.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 rounded-3xl bg-[#F5F5F5] p-6 sm:p-8"
        >
          <div>
            <label
              htmlFor="contact-name"
              className="mb-2 block text-sm font-semibold text-slate-950"
            >
              Name
            </label>
            <input
              id="contact-name"
              type="text"
              placeholder="John Andrew"
              value={form.name}
              onChange={handleChange('name')}
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-950 placeholder:text-slate-400 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
            />
          </div>

          <div>
            <label
              htmlFor="contact-email"
              className="mb-2 block text-sm font-semibold text-slate-950"
            >
              Email
            </label>
            <input
              id="contact-email"
              type="email"
              placeholder="andrew@gmail.com"
              value={form.email}
              onChange={handleChange('email')}
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-950 placeholder:text-slate-400 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
            />
          </div>

          <div>
            <label
              htmlFor="contact-phone"
              className="mb-2 block text-sm font-semibold text-slate-950"
            >
              Phone Number
            </label>
            <input
              id="contact-phone"
              type="tel"
              placeholder="+63 123 456 7890"
              value={form.phone}
              onChange={handleChange('phone')}
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-950 placeholder:text-slate-400 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
            />
          </div>

          <div>
            <label
              htmlFor="contact-message"
              className="mb-2 block text-sm font-semibold text-slate-950"
            >
              Message
            </label>
            <textarea
              id="contact-message"
              rows={4}
              placeholder="Tell us about your project needs...."
              value={form.message}
              onChange={handleChange('message')}
              className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-950 placeholder:text-slate-400 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-sky-400 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-sky-500 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === 'sending' ? 'Sending...' : 'Submit'}
            <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
          </button>

          {status === 'success' && (
            <p className="text-center text-sm font-medium text-emerald-600">
              Your message has been sent successfully. Thank you!
            </p>
          )}
          {status === 'error' && (
            <p className="text-center text-sm font-medium text-red-500">
              We’re sorry, but your message could not be sent. Please try again later.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}