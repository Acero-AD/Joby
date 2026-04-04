import React from 'react'
import { useForm } from '@inertiajs/react'
import { useTranslation } from 'react-i18next'
import Icon from './Icon'
import { statusKeys } from '../config/statusConfig'

interface AddApplicationModalProps {
  onClose: () => void
}

export default function AddApplicationModal({
  onClose,
}: AddApplicationModalProps) {
  const { t } = useTranslation()
  const { data, setData, post, processing, errors } = useForm({
    title: '',
    company: '',
    url: '',
    status: 'bookmarked',
    cv: null as File | null,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    post('/positions', {
      forceFormData: true,
      onSuccess: () => onClose(),
    })
  }

  return (
    <div
      className="fixed inset-0 bg-black/30 flex items-end sm:items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white w-full rounded-t-[20px] sm:rounded-[20px] sm:w-[520px] max-h-[90vh] overflow-y-auto shadow-[0_8px_32px_#18181B22,0_2px_8px_#A855F714] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between py-6 px-7 pb-5">
          <div className="flex flex-col gap-1">
            <h2 className="text-text-primary text-lg font-semibold">
              {t('modal.title')}
            </h2>
            <p className="text-text-light text-xs">{t('modal.subtitle')}</p>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-[10px] bg-surface-light border border-border-light flex items-center justify-center cursor-pointer hover:bg-gray-100"
          >
            <Icon name="close" size={16} stroke="#6B7280" />
          </button>
        </div>

        <div className="h-px bg-border-light" />

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 py-5 px-7">
          {/* Job Title */}
          <Field label={t('modal.fields.jobTitle')} error={errors.title}>
            <input
              type="text"
              value={data.title}
              onChange={(e) => setData('title', e.target.value)}
              placeholder={t('modal.fields.jobTitlePlaceholder')}
              className="w-full rounded-[10px] border border-border-light py-2.5 px-3.5 text-sm text-text-primary placeholder:text-text-light outline-none focus:border-primary-purple"
            />
          </Field>

          {/* Company + Status row */}
          <div className="flex gap-4">
            <Field
              label={t('modal.fields.company')}
              className="flex-1"
              error={errors.company}
            >
              <input
                type="text"
                value={data.company}
                onChange={(e) => setData('company', e.target.value)}
                placeholder={t('modal.fields.companyPlaceholder')}
                className="w-full rounded-[10px] border border-border-light py-2.5 px-3.5 text-sm text-text-primary placeholder:text-text-light outline-none focus:border-primary-purple"
              />
            </Field>
            <Field
              label={t('modal.fields.status')}
              className="flex-1"
              error={errors.status}
            >
              <select
                value={data.status}
                onChange={(e) => setData('status', e.target.value)}
                className="w-full rounded-[10px] border border-border-light py-2.5 px-3.5 text-sm text-text-primary outline-none focus:border-primary-purple bg-white"
              >
                {statusKeys.map((key) => (
                  <option key={key} value={key}>
                    {t(`status.${key}`)}
                  </option>
                ))}
              </select>
            </Field>
          </div>

          {/* URL */}
          <Field label={t('modal.fields.jobPostingLink')} error={errors.url}>
            <input
              type="url"
              value={data.url}
              onChange={(e) => setData('url', e.target.value)}
              placeholder={t('modal.fields.urlPlaceholder')}
              className="w-full rounded-[10px] border border-border-light py-2.5 px-3.5 text-sm text-text-primary placeholder:text-text-light outline-none focus:border-primary-purple"
            />
          </Field>

          {/* CV Upload */}
          <Field label={t('modal.fields.cvResume')} error={errors.cv}>
            <div className="flex items-center gap-3 rounded-[10px] border border-dashed border-border-purple py-3 px-4 bg-[#FAF5FF]">
              <Icon
                name="upload"
                size={20}
                className="shrink-0"
                stroke="#A855F7"
              />
              <div className="flex-1">
                <label className="text-primary-purple text-sm font-medium cursor-pointer hover:underline">
                  {data.cv ? data.cv.name : t('modal.fields.chooseFile')}
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={(e) => setData('cv', e.target.files?.[0] ?? null)}
                    className="hidden"
                  />
                </label>
                <p className="text-text-light text-xs mt-0.5">
                  {t('modal.fields.fileHint')}
                </p>
              </div>
            </div>
          </Field>
        </form>

        <div className="h-px bg-border-light" />

        {/* Footer */}
        <div className="flex items-center justify-between py-5 px-7">
          <div className="flex items-center gap-1.5">
            <Icon name="info" size={14} stroke="#9CA3AF" />
            <span className="text-text-light text-xs">
              {t('modal.footer.editLater')}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              className="rounded-[10px] border border-border-medium py-2.5 px-5 text-sm font-medium text-text-secondary cursor-pointer hover:bg-gray-50"
            >
              {t('modal.footer.cancel')}
            </button>
            <button
              onClick={handleSubmit}
              disabled={processing}
              className="rounded-[10px] bg-gradient-to-b from-primary-purple to-primary-pink py-2.5 px-5 text-sm font-medium text-white cursor-pointer disabled:opacity-60"
            >
              {t('modal.footer.save')}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

interface FieldProps {
  label: string
  children: React.ReactNode
  className?: string
  error?: string
}

function Field({ label, children, className = '', error }: FieldProps) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <label className="text-text-primary text-sm font-medium">{label}</label>
      {children}
      {error && <span className="text-status-danger text-xs">{error}</span>}
    </div>
  )
}
