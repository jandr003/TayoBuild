import { useState } from 'react'
import { X, Star } from 'lucide-react'

export default function ReviewModal({ isOpen, onClose }) {
  const [name, setName] = useState('')
  const [role, setRole] = useState('')
  const [rating, setRating] = useState(0)
  const [hoverRating, setHoverRating] = useState(0)
  const [quote, setQuote] = useState('')
  const [status, setStatus] = useState('idle') 

  if (!isOpen) return null

  const resetForm = () => {
    setName('')
    setRole('')
    setRating(0)
    setQuote('')
    setStatus('idle')
  }

  const handleClose = () => {
    resetForm()
    onClose()
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name || !quote || rating === 0) return

    setStatus('sent')
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 px-4 font-['Poppins']">
      <div className="relative w-full max-w-[480px] rounded-2xl bg-white p-6 shadow-xl sm:p-8">
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close"
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-slate-400 transition hover:bg-slate-100 hover:text-slate-950"
        >
          <X className="h-5 w-5" strokeWidth={2.5} />
        </button>

        {status === 'sent' ? (
          <div className="flex flex-col items-center py-6 text-center">
            <h3 className="text-[20px] font-bold text-slate-950">Thank you for your feedback!</h3>
            <p className="mt-2 text-[14px] text-[#6f6f6f]">
              Your review has been submitted successfully. Our team will review it before publishing it on the site.
            </p>
            <button
              type="button"
              onClick={handleClose}
              className="mt-6 rounded-full bg-sky-400 px-6 py-2.5 text-[13px] font-semibold text-white transition hover:bg-sky-500"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <h3 className="text-[20px] font-bold text-slate-950 sm:text-[22px]">Add a Review</h3>
            <p className="mt-1 text-[13px] text-[#6f6f6f]">
              Tell us about your experience with TayoBuild.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => {
                  const starValue = i + 1
                  return (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setRating(starValue)}
                      onMouseEnter={() => setHoverRating(starValue)}
                      onMouseLeave={() => setHoverRating(0)}
                      aria-label={`Rate ${starValue} stars`}
                    >
                      <Star
                        className={`h-7 w-7 transition ${
                          starValue <= (hoverRating || rating)
                            ? 'fill-orange-500 text-orange-500'
                            : 'fill-slate-200 text-slate-200'
                        }`}
                        strokeWidth={0}
                      />
                    </button>
                  )
                })}
              </div>

              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="rounded-xl border border-slate-200 px-4 py-3 text-[14px] text-slate-950 outline-none transition focus:border-sky-400"
              />

              <input
                type="text"
                placeholder="Role / Company (optional)"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="rounded-xl border border-slate-200 px-4 py-3 text-[14px] text-slate-950 outline-none transition focus:border-sky-400"
              />

              <textarea
                placeholder="Write your review here..."
                value={quote}
                onChange={(e) => setQuote(e.target.value)}
                required
                rows={4}
                className="resize-none rounded-xl border border-slate-200 px-4 py-3 text-[14px] text-slate-950 outline-none transition focus:border-sky-400"
              />

              {status === 'error' && (
                <p className="text-[13px] font-medium text-red-500">
                  An error occurred. Please try again later.
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'sending' || rating === 0}
                className="mt-2 rounded-full bg-sky-400 px-6 py-3 text-[13px] font-semibold text-white transition hover:bg-sky-500 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === 'sending' ? 'Submitting...' : 'Submit Review'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
