import React from "react";

export default function Translate() {
  const [fileName, setFileName] = React.useState("");
  const [result, setResult] = React.useState("");

  return (
    <main className="mx-auto max-w-3xl px-4 py-8">
      <div className="rounded-md border border-gray-200 bg-gray-100 p-6">
        {/* นำเข้าเสียงภาษาถิ่น */}
        <h2 className="mb-4 text-base font-semibold text-gray-800">
          นำเข้าเสียงภาษาถิ่น
        </h2>

        <div className="mb-6 flex flex-wrap items-center gap-3">
          {/* เลือกไฟล์เสียง */}
          <label className="inline-flex cursor-pointer items-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">
            {/* upload icon (svg) */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 3l4 4h-3v6h-2V7H8l4-4z"></path>
              <path d="M5 18h14v2H5z"></path>
            </svg>
            เลือกไฟล์เสียง
            <input
              type="file"
              accept="audio/*"
              className="hidden"
              onChange={(e) => setFileName(e.target.files?.[0]?.name || "")}
            />
          </label>

          {/* อัดเสียง */}
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-md border border-green-300 bg-green-200 px-4 py-2 text-sm font-medium text-green-950 hover:bg-green-300"
            onClick={() => alert("เริ่มอัดเสียง (เดโม่)")}
          >
            {/* mic icon (svg) */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 14a3 3 0 003-3V6a3 3 0 10-6 0v5a3 3 0 003 3z"></path>
              <path d="M5 11a7 7 0 0014 0h-2a5 5 0 11-10 0H5zM11 19v3h2v-3h-2z"></path>
            </svg>
            อัดเสียง
          </button>

          {fileName && (
            <span className="text-sm text-gray-600">ไฟล์: {fileName}</span>
          )}
        </div>

        {/* ผลการแปลภาษาไทยกลาง */}
        <label className="mb-2 block text-sm font-medium text-gray-800">
          ผลการแปลภาษาไทยกลาง
        </label>
        <textarea
          value={result}
          onChange={(e) => setResult(e.target.value)}
          rows={5}
          className="mb-4 w-full resize-none rounded-md border border-gray-300 bg-[#fff7f7] p-3 text-sm text-gray-800 outline-none focus:border-gray-400"
          placeholder="ผลลัพธ์จะปรากฏที่นี่…"
        />

        {/* ปุ่ม แปล */}
        <div className="mb-6">
          <button
            type="button"
            className="rounded-md bg-teal-600 px-5 py-2 text-sm font-semibold text-white shadow hover:bg-teal-700"
            onClick={() => setResult("ตัวอย่างผลลัพธ์การแปล (เดโม่)")}
          >
            แปล
          </button>
        </div>

        {/* คำแนะนำการอัดเสียง */}
        <div className="rounded-md border border-gray-300 bg-white p-4">
          <p className="mb-2 text-sm font-semibold text-gray-800">
            คำแนะนำการอัดเสียง:
          </p>
          <ul className="list-disc space-y-1 pl-5 text-sm text-gray-800">
            <li>ใช้ไมค์หรือมือถือห่างปากประมาณ 15–20 ซม</li>
            <li>บันทึกในที่เงียบ ไม่มีเสียงรบกวน</li>
            <li>พูดตามธรรมชาติ ไม่ต้องช้าเกินไป</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
