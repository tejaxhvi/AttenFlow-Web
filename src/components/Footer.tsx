import React from 'react'

function Footer() {
  return (
    <footer className='w-full bg-black/20 backdrop-blur-md border-t border-white/10'>
      <div className='mx-auto max-w-7xl px-4 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8'>
        <div>
          <h2 className='text-white font-mono text-2xl font-extrabold'>AttenFlow</h2>
          <p className='mt-3 text-white/80 text-sm'>
            Effortless attendance and insights, built for clarity and speed.
          </p>
        </div>
        <div>
          <h3 className='text-white font-mono text-lg font-bold mb-3'>Services</h3>
          <ul className='space-y-2 text-white/80'>
            <li>Attendance Tracking</li>
            <li>Analytics & Insights</li>
            <li>Real-time Reports</li>
            <li>Integrations</li>
          </ul>
        </div>
        <div>
          <h3 className='text-white font-mono text-lg font-bold mb-3'>Contact</h3>
          <ul className='space-y-2 text-white/80'>
            <li>Email: contact@attenflow.app</li>
            <li>Phone: +1 (555) 010-2025</li>
            <li>Address: Remote-first</li>
          </ul>
        </div>
      </div>
      <div className='border-t border-white/10 py-4 text-center text-white/60 text-sm'>
        © {new Date().getFullYear()} AttenFlow. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer