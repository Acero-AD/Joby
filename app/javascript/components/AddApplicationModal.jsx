import React from 'react'
import { useForm } from '@inertiajs/react'

const statuses = [
  { value: 'bookmarked', label: 'Bookmarked' },
  { value: 'applied', label: 'Applied' },
  { value: 'interviewing', label: 'Interviewing' },
  { value: 'offered', label: 'Offered' },
  { value: 'rejected', label: 'Rejected' },
  { value: 'withdrawn', label: 'Withdrawn' },
  { value: 'accepted', label: 'Accepted' },
]

export default function AddApplicationModal({ onClose }) {
  const { data, setData, post, processing, errors } = useForm({
    title: '',
    company: '',
    url: '',
    status: 'bookmarked',
    cv: null,
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    post('/positions', {
      forceFormData: true,
      onSuccess: () => onClose(),
    })
  }

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50" onClick={onClose}>
      <div
        className="bg-white rounded-[20px] w-[520px] shadow-[0_8px_32px_#18181B22,0_2px_8px_#A855F714] flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between py-6 px-7 pb-5">
          <div className="flex flex-col gap-1">
            <h2 className="text-text-primary text-lg font-semibold">Add New Application</h2>
            <p className="text-text-light text-xs">Track a new job opportunity</p>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-[10px] bg-surface-light border border-border-light flex items-center justify-center cursor-pointer hover:bg-gray-100"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="#6B7280" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18" /><path d="m6 6 12 12" />
            </svg>
          </button>
        </div>

        <div className="h-px bg-border-light" />

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 py-5 px-7">
          {/* Job Title */}
          <Field label="Job Title" error={errors.title}>
            <input
              type="text"
              value={data.title}
              onChange={e => setData('title', e.target.value)}
              placeholder="e.g. Senior Frontend Developer"
              className="w-full rounded-[10px] border border-border-light py-2.5 px-3.5 text-sm text-text-primary placeholder:text-text-light outline-none focus:border-primary-purple"
            />
          </Field>

          {/* Company + Status row */}
          <div className="flex gap-4">
            <Field label="Company" className="flex-1" error={errors.company}>
              <input
                type="text"
                value={data.company}
                onChange={e => setData('company', e.target.value)}
                placeholder="e.g. Google"
                className="w-full rounded-[10px] border border-border-light py-2.5 px-3.5 text-sm text-text-primary placeholder:text-text-light outline-none focus:border-primary-purple"
              />
            </Field>
            <Field label="Status" className="flex-1" error={errors.status}>
              <select
                value={data.status}
                onChange={e => setData('status', e.target.value)}
                className="w-full rounded-[10px] border border-border-light py-2.5 px-3.5 text-sm text-text-primary outline-none focus:border-primary-purple bg-white"
              >
                {statuses.map(s => (
                  <option key={s.value} value={s.value}>{s.label}</option>
                ))}
              </select>
            </Field>
          </div>

          {/* URL */}
          <Field label="Job Posting Link" error={errors.url}>
            <input
              type="url"
              value={data.url}
              onChange={e => setData('url', e.target.value)}
              placeholder="https://..."
              className="w-full rounded-[10px] border border-border-light py-2.5 px-3.5 text-sm text-text-primary placeholder:text-text-light outline-none focus:border-primary-purple"
            />
          </Field>

          {/* CV Upload */}
          <Field label="CV / Resume" error={errors.cv}>
            <div className="flex items-center gap-3 rounded-[10px] border border-dashed border-border-purple py-3 px-4 bg-[#FAF5FF]">
              <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="#A855F7" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" x2="12" y1="3" y2="15" />
              </svg>
              <div className="flex-1">
                <label className="text-primary-purple text-sm font-medium cursor-pointer hover:underline">
                  {data.cv ? data.cv.name : 'Choose file'}
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={e => setData('cv', e.target.files[0])}
                    className="hidden"
                  />
                </label>
                <p className="text-text-light text-xs mt-0.5">PDF, DOC up to 10MB</p>
              </div>
            </div>
          </Field>
        </form>

        <div className="h-px bg-border-light" />

        {/* Footer */}
        <div className="flex items-center justify-between py-5 px-7">
          <div className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="#9CA3AF" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" />
            </svg>
            <span className="text-text-light text-xs">All fields can be edited later</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              className="rounded-[10px] border border-border-medium py-2.5 px-5 text-sm font-medium text-text-secondary cursor-pointer hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              disabled={processing}
              className="rounded-[10px] bg-gradient-to-b from-primary-purple to-primary-pink py-2.5 px-5 text-sm font-medium text-white cursor-pointer disabled:opacity-60"
            >
              Save Application
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function Field({ label, children, className = '', error }) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <label className="text-text-primary text-sm font-medium">{label}</label>
      {children}
      {error && <span className="text-status-danger text-xs">{error}</span>}
    </div>
  )
}
