"use client";

import { Reveal } from "@/components/ui/Reveal";
import { loanComparison } from "@/content/loans";
import { fadeUpBlur } from "@/lib/motion";

export function LoanComparisonTable() {
  return (
    <section id={loanComparison.id} className="bg-white py-12 sm:py-14 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-8">
        <Reveal variants={fadeUpBlur} className="mx-auto max-w-3xl text-center">
          <h2 className="heading-gradient text-[1.6rem] font-bold tracking-tight sm:text-[1.75rem] md:text-[2rem] lg:text-[2.2rem]">
            {loanComparison.headline}
          </h2>
        </Reveal>

        <Reveal
          variants={fadeUpBlur}
          className="mt-8 overflow-x-auto rounded-[1.15rem] border border-[#E5E7EB] sm:mt-10"
        >
          <table className="w-full min-w-[720px] border-collapse text-left">
            <thead>
              <tr className="bg-[#F3F6FF]">
                {loanComparison.columns.map((col) => (
                  <th
                    key={col}
                    scope="col"
                    className="px-5 py-4 text-xs font-bold uppercase tracking-wide text-[#0B3A82]"
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {loanComparison.rows.map((row, index) => (
                <tr
                  key={row.type}
                  className={index % 2 === 1 ? "bg-[#FAFBFF]" : "bg-white"}
                >
                  <td className="px-5 py-4 text-sm font-bold text-[#111827]">
                    {row.type}
                  </td>
                  <td className="px-5 py-4 text-sm text-[#4B5563]">{row.bestFor}</td>
                  <td className="px-5 py-4 text-sm text-[#111827]">{row.amount}</td>
                  <td className="px-5 py-4 text-sm text-[#111827]">{row.tenure}</td>
                  <td className="px-5 py-4 text-sm font-semibold text-brand">
                    {row.rate}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </div>
    </section>
  );
}
