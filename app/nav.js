import React from "react";

export default function PhonePeChat() {
  return (
    <div className="min-h-screen bg-[#f2f3f5] flex justify-center items-center font-sans">
      <div className="w-[360px] h-[720px] bg-white shadow-md flex flex-col">

        {/* Header */}
        <div className="flex items-center gap-3 px-4 py-3 border-b">
          <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold">
            पे
          </div>
          <div className="flex-1">
            <div className="font-semibold text-gray-900 text-sm">
              PhonePe Support
            </div>
          </div>
          <select className="text-xs border rounded px-1 py-0.5">
            <option>English</option>
          </select>
        </div>

        {/* Chat Area */}
        <div className="flex-1 px-4 py-3 space-y-3 overflow-y-auto">

          {/* Support Messages */}
          <div className="max-w-[80%] bg-gray-100 text-gray-900 text-sm px-3 py-2 rounded-lg rounded-tl-none">
            I'm sorry to know that, Aneesh Kumar Maury.
            <div className="text-[10px] text-gray-500 mt-1">7:57 am</div>
          </div>

          <div className="max-w-[80%] bg-gray-100 text-gray-900 text-sm px-3 py-2 rounded-lg rounded-tl-none">
            Please help me understand why you made a payment to a fraudster.
            <div className="text-[10px] text-gray-500 mt-1">7:57 am</div>
          </div>

          {/* User Message */}
          <div className="max-w-[80%] ml-auto bg-purple-100 text-gray-900 text-sm px-3 py-2 rounded-lg rounded-tr-none">
            Made a payment to a fraudster for another reason
            <div className="text-[10px] text-gray-500 mt-1 text-right">
              7:58 am
            </div>
          </div>

          {/* Support */}
          <div className="max-w-[80%] bg-gray-100 text-gray-900 text-sm px-3 py-2 rounded-lg rounded-tl-none">
            Please enter the text below
            <div className="text-[10px] text-gray-500 mt-1">7:58 am</div>
          </div>

          {/* User */}
          <div className="max-w-[80%] ml-auto bg-purple-100 text-gray-900 text-sm px-3 py-2 rounded-lg rounded-tr-none">
            kowbai@ybl
            <div className="text-[10px] text-gray-500 mt-1 text-right">
              7:58 am
            </div>
          </div>

          {/* Support */}
          <div className="max-w-[80%] bg-gray-100 text-gray-900 text-sm px-3 py-2 rounded-lg rounded-tl-none">
            I understand how upsetting it is to lose your money, Aneesh Kumar
            Maury.
            <div className="text-[10px] text-gray-500 mt-1">7:58 am</div>
          </div>

          <div className="max-w-[80%] bg-gray-100 text-gray-900 text-sm px-3 py-2 rounded-lg rounded-tl-none">
            As a security measure, we'll first verify your payment details and
            block the account to which you've made this payment.
          </div>

        </div>

        {/* Bottom Input (disabled look) */}
        <div className="px-4 py-3 border-t bg-white">
          <div className="w-full h-10 bg-gray-100 rounded-full"></div>
        </div>

      </div>
    </div>
  );
}
