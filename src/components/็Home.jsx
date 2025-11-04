import React from "react";

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
      {/* Hero */}
      <section className="text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-600 shadow-sm">
          🔤 Translate dialect • Beta
        </div>

        <h1 className="mt-6 text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          แปลภาษาถิ่น → ภาษาไทย / อังกฤษ
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-gray-600 sm:text-lg">
          ลองพิมพ์คำหรือประโยคภาษาถิ่น (ใต้ อีสาน เหนือ กลาง) แล้วกดแปล
          หรือส่งคำที่อยากให้ระบบรู้จักเพิ่มได้ทันที
        </p>

        {/* Search / Input */}
        <div className="mx-auto mt-8 flex max-w-2xl flex-col items-stretch gap-3 sm:flex-row">
          <input
            type="text"
            placeholder="เช่น: ละอ่อน แปลว่าอะไร?"
            className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-gray-900 shadow-sm outline-none transition focus:ring-2 focus:ring-gray-900/10"
          />
          <div className="flex gap-2">
            <button className="flex-1 rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-black/10 sm:flex-none">
              แปลภาษา
            </button>
            <button className="flex-1 rounded-2xl border border-gray-900/20 bg-gray-900 px-4 py-3 text-sm font-medium text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-gray-900/30 sm:flex-none">
              เสนอประโยค
            </button>
          </div>
        </div>

        {/* Quick target selector */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-sm">
          <span className="rounded-full border border-gray-200 px-3 py-1 text-gray-700">ถิ่นใต้ → ไทย</span>
          <span className="rounded-full border border-gray-200 px-3 py-1 text-gray-700">อีสาน → ไทย</span>
          <span className="rounded-full border border-gray-200 px-3 py-1 text-gray-700">เหนือ → ไทย</span>
          <span className="rounded-full border border-gray-200 px-3 py-1 text-gray-700">ไทย → English</span>
        </div>
      </section>

      {/* Divider */}
      <div className="my-12 h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      {/* Example cards */}
      <section>
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">ตัวอย่างยอดนิยม</h2>
          <a href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900">
            ดูทั้งหมด →
          </a>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <ExampleCard
            tag="อีสาน → ไทย"
            source="เฮ็ดหยังอยู่?"
            target="กำลังทำอะไรอยู่?"
          />
          <ExampleCard
            tag="เหนือ → ไทย"
            source="ละอ่อน"
            target="เด็ก / วัยรุ่น"
          />
          <ExampleCard
            tag="ใต้ → ไทย"
            source="นิ"
            target="นี่ / ตรงนี้ (เน้นบริบท)"
          />
          <ExampleCard
            tag="ไทย → English"
            source="กินข้าวยัง"
            target="Have you eaten yet?"
          />
          <ExampleCard
            tag="ไทย → English"
            source="เดี๋ยวเจอกัน"
            target="See you soon."
          />
          <ExampleCard
            tag="อีสาน → ไทย"
            source="มาจกข้าวแน"
            target="มาร่วมกินข้าวด้วยกันหน่อย"
          />
        </div>
      </section>

      {/* CTA / Feedback */}
      <section className="mt-14 rounded-3xl border border-gray-200 bg-gradient-to-b from-white to-gray-50 p-6 shadow-sm sm:p-8">
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-base font-semibold text-gray-900">มีคำ/สำนวนที่ยังไม่รองรับ?</h3>
            <p className="mt-1 text-sm text-gray-600">
              ช่วยเราปรับปรุงระบบโดยการส่งคำ/ประโยคใหม่ ๆ หรือความเห็นเพิ่มเติม
            </p>
          </div>
          <div className="flex gap-2">
            <button className="rounded-full border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-black/10">
              ส่งคำใหม่
            </button>
            <button className="rounded-full border border-gray-900/20 bg-gray-900 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-gray-900/30">
              Feedback
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

function ExampleCard({ tag, source, target }) {
  return (
    <div className="group rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="mb-2 inline-flex items-center rounded-full border border-gray-200 px-2.5 py-1 text-xs font-medium text-gray-600">
        {tag}
      </div>
      <div className="space-y-2">
        <p className="font-medium text-gray-900">“{source}”</p>
        <p className="text-sm text-gray-600">→ {target}</p>
      </div>
    </div>
  );
}
