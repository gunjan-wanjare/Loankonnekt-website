"use client";

import { Reveal } from "@/components/ui/Reveal";
import { loanComparison } from "@/content/loans";
import { fadeUpBlur } from "@/lib/motion";

export function LoanComparisonTable() {
  return (
    <section id={loanComparison.id} className="bg-[#F3F6FF] py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-8">
        <Reveal variants={fadeUpBlur} className="mx-auto max-w-4xl text-center">
          <h2
            className="heading-gradient text-[1.85rem] font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-[2.6rem]"
            style={{ fontWeight: 700 }}
          >
            {loanComparison.headline}
          </h2>
        </Reveal>

        <Reveal
          variants={fadeUpBlur}
          className="mt-8 overflow-hidden rounded-[1.5rem] bg-white shadow-[0_18px_50px_-28px_rgba(15,23,42,0.22)] sm:mt-10 lg:rounded-[1.75rem]"
        >
          <div className="overflow-x-auto overscroll-x-contain [-webkit-overflow-scrolling:touch]">
            <table className="w-full min-w-[760px] border-collapse text-left">
              <thead>
                <tr className="bg-[#051325]">
                  {loanComparison.columns.map((col) => (
                    <th
                      key={col}
                      scope="col"
                      className="px-6 py-4 text-[13px] font-bold tracking-tight text-white sm:px-7 sm:py-5 sm:text-sm"
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E8EDF5]">
                {loanComparison.rows.map((row) => (
                  <tr key={row.type} className="bg-white">
                    <td className="px-6 py-4 text-sm font-bold text-[#111827] sm:px-7 sm:py-5 sm:text-[15px]">
                      {row.type}
                    </td>
                    <td className="px-6 py-4 text-sm font-normal text-[#434657] sm:px-7 sm:py-5 sm:text-[15px]">
                      {row.bestFor}
                    </td>
                    <td className="px-6 py-4 text-sm font-semibold text-[#111827] sm:px-7 sm:py-5 sm:text-[15px]">
                      {row.amount}
                    </td>
                    <td className="px-6 py-4 text-sm font-normal text-[#434657] sm:px-7 sm:py-5 sm:text-[15px]">
                      {row.tenure}
                    </td>
                    <td className="px-6 py-4 text-sm font-bold text-[#0047FF] sm:px-7 sm:py-5 sm:text-[15px]">
                      {row.rate}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
