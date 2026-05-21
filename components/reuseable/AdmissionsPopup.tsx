'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { X } from 'lucide-react'

interface AdmissionsPopupProps {
  isOpen: boolean
  onClose: () => void
}

const GRADES = [
  'Mom & Me',
  'Play Group',
  'Pre-KG',
  'LKG',
  'UKG',
  'Grade 1',
  'Grade 2',
  'Grade 3',
  'Grade 4',
  'Grade 5',
  'Grade 6',
  'Grade 7',
  'Grade 8',
  'Grade 9',
  'Grade 10',
  'Grade 11',
] as const

interface FormData {
  learnerName: string
  grade: string
  phone: string
  email: string
}

interface FormErrors {
  learnerName?: string
  grade?: string
  phone?: string
  email?: string
}

const initialFormData: FormData = {
  learnerName: '',
  grade: '',
  phone: '',
  email: '',
}

export default function AdmissionsPopup({ isOpen, onClose }: AdmissionsPopupProps) {
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitting, setSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const overlayRef = useRef<HTMLDivElement>(null)

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // Reset form on open
  useEffect(() => {
    if (isOpen) {
      setFormData(initialFormData)
      setErrors({})
      setSubmitStatus('idle')
    }
  }, [isOpen])

  const handleChange = useCallback((field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    // Clear field error on change (functional updater — no stale deps needed)
    setErrors(prev => {
      if (prev[field as keyof FormErrors]) {
        return { ...prev, [field]: undefined }
      }
      return prev
    })
  }, [])

  const validate = (): boolean => {
    const newErrors: FormErrors = {}
    const name = formData.learnerName.trim()
    const phone = formData.phone.trim()
    const email = formData.email.trim()

    // Learner's Name: required, min 2 chars, letters & spaces only
    if (!name) {
      newErrors.learnerName = 'Name is required'
    } else if (name.length < 2) {
      newErrors.learnerName = 'Name must be at least 2 characters'
    } else if (!/^[a-zA-Z\s.'-]+$/.test(name)) {
      newErrors.learnerName = 'Name can only contain letters'
    }

    // Grade: required + must be a valid option
    if (!formData.grade) {
      newErrors.grade = 'Please select a grade'
    } else if (!(GRADES as readonly string[]).includes(formData.grade)) {
      newErrors.grade = 'Please select a valid grade'
    }

    // Phone: required, strip non-digits, must be 10 digits (Indian)
    if (!phone) {
      newErrors.phone = 'Phone number is required'
    } else {
      const digits = phone.replace(/\D/g, '')
      if (digits.length === 12 && digits.startsWith('91')) {
        // +91 prefix — valid
      } else if (digits.length !== 10) {
        newErrors.phone = 'Enter a valid 10-digit phone number'
      }
    }

    // Email: required + standard pattern
    if (!email) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Enter a valid email address'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()

    if (!validate()) return

    setSubmitting(true)
    setSubmitStatus('idle')

    try {
      const res = await fetch('/api/admissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          learnerName: formData.learnerName.trim(),
          grade: formData.grade,
          phone: formData.phone.trim(),
          email: formData.email.trim(),
          submittedAt: new Date().toISOString(),
        }),
      })

      if (!res.ok) throw new Error('Submission failed')

      setSubmitStatus('success')
      setTimeout(() => {
        onClose()
      }, 2000)
    } catch {
      setSubmitStatus('error')
    } finally {
      setSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={(e) => {
        if (e.target === overlayRef.current) onClose()
      }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      {/* Modal Card */}
      <div className="relative w-full max-w-[720px] bg-white rounded-2xl shadow-2xl overflow-hidden animate-in">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors z-10"
          aria-label="Close"
        >
          <X size={18} className="text-gray-600" />
        </button>

        {/* Header */}
        <div className="px-8 pt-8 pb-2">
          <h2 className="text-[24px] md:text-[28px] font-medium tracking-tight leading-tight">
            Admissions for 2026{' '}
            <span className="font-light font-ppe italic">CAIE Curriculum</span>
          </h2>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-8 pb-8 pt-4" noValidate>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            {/* Learner's Name */}
            <div>
              <input
                type="text"
                value={formData.learnerName}
                onChange={(e) => handleChange('learnerName', e.target.value)}
                placeholder="Enter learner's name"
                className={`w-full px-5 py-3.5 rounded-lg border ${
                  errors.learnerName
                    ? 'border-red-400 focus:ring-red-400'
                    : 'border-gray-300 focus:ring-[#000086]'
                } bg-gray-50 focus:outline-none focus:ring-2 focus:border-transparent transition-all text-sm`}
              />
              {errors.learnerName && (
                <p className="mt-1 text-xs text-red-500">{errors.learnerName}</p>
              )}
            </div>

            {/* Select Grade */}
            <div>
              <select
                value={formData.grade}
                onChange={(e) => handleChange('grade', e.target.value)}
                className={`w-full px-5 py-3.5 rounded-lg border ${
                  errors.grade
                    ? 'border-red-400 focus:ring-red-400'
                    : 'border-gray-300 focus:ring-[#000086]'
                } bg-gray-50 focus:outline-none focus:ring-2 focus:border-transparent transition-all text-sm appearance-none ${
                  !formData.grade ? 'text-gray-400' : 'text-gray-900'
                }`}
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 12px center',
                  paddingRight: '2.5rem',
                }}
              >
                <option value="" disabled>
                  Select Grade
                </option>
                {GRADES.map((grade) => (
                  <option key={grade} value={grade}>
                    {grade}
                  </option>
                ))}
              </select>
              {errors.grade && (
                <p className="mt-1 text-xs text-red-500">{errors.grade}</p>
              )}
            </div>

            {/* Phone number */}
            <div>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                placeholder="Enter phone number"
                className={`w-full px-5 py-3.5 rounded-lg border ${
                  errors.phone
                    ? 'border-red-400 focus:ring-red-400'
                    : 'border-gray-300 focus:ring-[#000086]'
                } bg-gray-50 focus:outline-none focus:ring-2 focus:border-transparent transition-all text-sm`}
              />
              {errors.phone && (
                <p className="mt-1 text-xs text-red-500">{errors.phone}</p>
              )}
            </div>

            {/* Email Address */}
            <div>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                placeholder="Enter email address"
                className={`w-full px-5 py-3.5 rounded-lg border ${
                  errors.email
                    ? 'border-red-400 focus:ring-red-400'
                    : 'border-gray-300 focus:ring-[#000086]'
                } bg-gray-50 focus:outline-none focus:ring-2 focus:border-transparent transition-all text-sm`}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-500">{errors.email}</p>
              )}
            </div>
          </div>

          {/* OTP Row — disabled for now */}
          {/* <div className="mb-6 max-w-md mx-auto">
            <div className="flex gap-3">
              <input
                type="text"
                value={formData.otp}
                onChange={(e) => handleChange('otp', e.target.value)}
                placeholder="Enter OTP"
                maxLength={6}
                className="flex-1 px-5 py-3.5 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#000086] focus:border-transparent transition-all text-sm"
              />
              <button
                type="button"
                onClick={handleGetOtp}
                className={`px-6 py-3 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                  otpSent
                    ? 'bg-green-100 text-green-700 border border-green-300 cursor-default'
                    : 'bg-[#000086] text-white hover:bg-blue-900'
                }`}
                disabled={otpSent}
              >
                {otpSent ? 'OTP Sent ✓' : 'Get OTP'}
              </button>
            </div>
          </div> */}

          {/* Submit + Status */}
          <div className="flex flex-col items-center gap-3">
            {submitStatus === 'success' && (
              <p className="text-green-600 text-sm font-medium">
                Enquiry submitted successfully! Closing...
              </p>
            )}
            {submitStatus === 'error' && (
              <p className="text-red-500 text-sm font-medium">
                Something went wrong. Please try again.
              </p>
            )}
            <button
              type="submit"
              disabled={submitting}
              className="bg-[#000086] text-white px-10 py-3 rounded-lg text-sm font-medium hover:bg-blue-900 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {submitting ? 'Submitting...' : 'Submit Enquiry'}
            </button>
          </div>
        </form>
      </div>

      {/* Inline animation styles */}
      <style jsx>{`
        @keyframes slideUpFade {
          from {
            opacity: 0;
            transform: translateY(24px) scale(0.97);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-in {
          animation: slideUpFade 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  )
}
