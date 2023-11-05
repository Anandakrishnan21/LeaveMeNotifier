import Link from 'next/link'
import React from 'react'

function LeaveBtn() {
  return (
    <button className="border-2 border-black p-1 px-2 rounded hover:border-slate-400 duration-300">
      <Link href="/form">Leave Letter</Link>
    </button>
  )
}

export default LeaveBtn
