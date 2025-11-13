"use client"

import { KeyData } from "@/_data/sample/KeyData"

export default function KeyTable() {
  return (
    <div className="absolute z-50 top-4 left-4">
        <div className="bg-white text-gray-800 border border-gray-300 rounded-lg shadow-lg p-4">
            <h3 className="font-semibold text-gray-800 mb-2 text-sm">Table Status</h3>
            <section className=" flex items-center justify-start gap-3">
              {KeyData.map((i, key) => (
                <p className="flex items-center justify-start gap-2">
                  <span className={`w-4 h-4 ${i.css} rounded`}></span>
                  <span className="text-sm text-gray-700">{i.name}</span>
                </p>
              ))}
            </section>
            <p className="text-sm mt-1 italic">
              Click on the table to green tables to make a to book a reservation.
            </p>
        </div>
       
        
       {/*  <div className="space-y-2">
            {KeyData.map((i, key) => (
                <div className="flex items-center gap-2">
                    <div className={`w-4 h-4 ${i.css} rounded`}></div>
                    <span className="text-sm text-gray-700">{i.name}</span>
                </div>
            ))}
        </div> */}

       
    </div>
  )
}
