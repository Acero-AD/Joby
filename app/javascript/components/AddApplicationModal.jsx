import React from 'react'

export default function AddApplicationModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50" onClick={onClose}>
      <div className="bg-white rounded-[20px] w-[520px] shadow-xl" onClick={e => e.stopPropagation()}>
        <div className="p-6 text-text-primary font-semibold">Modal coming soon</div>
      </div>
    </div>
  )
}
