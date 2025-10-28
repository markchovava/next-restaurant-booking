"use client"

import { KeyData } from "@/_data/sample/KeyData"

export default function KeyTable() {
  return (
    <div className="absolute z-90 top-4 left-4 bg-white border border-gray-300 rounded-lg shadow-lg p-4">
        <h3 className="font-semibold text-gray-800 mb-3 text-sm">Table Status</h3>
        <div className="space-y-2">
            
            {KeyData.map((i, key) => (
                <div className="flex items-center gap-2">
                    <div className={`w-4 h-4 ${i.css} rounded`}></div>
                    <span className="text-sm text-gray-700">{i.name}</span>
                </div>
            ))}
        
        </div>
    </div>
  )
}
