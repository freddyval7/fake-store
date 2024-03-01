"use client";

import { useState } from "react";
import { Bitcoin } from "lucide-react";
import visaIcon from "@/public/visa_icon.svg";
import mastercardIcon from "@/public/mastercard-logo.svg";
import paypalIcon from "@/public/paypal-logo.svg";
import Image from "next/image";

export default function Payment() {
  const [payment, setPayment] = useState("visa");

  return (
    <div className="space-y-8 border rounded-md bg-primary border-b-2 border-b-yellow-500 text-primary-foreground p-8">
      <h3 className="font-bold">Payment method</h3>
      <div className="flex items-center justify-around">
        <div
          onClick={() => {
            setPayment("visa");
          }}
          className={`border-2 bg-primary-foreground rounded-md px-2 shadow-md cursor-pointer hover:scale-110 transition-all duration-200 ${
            payment === "visa" && "border-slate-800"
          }`}
        >
          <Image
            className="h-12 w-12"
            src={visaIcon}
            alt="Visa"
            width={40}
            height={40}
          />
        </div>
        <div
          onClick={() => {
            setPayment("mastercard");
          }}
          className={`border-2 bg-primary-foreground rounded-md px-2 shadow-md cursor-pointer hover:scale-110 transition-all duration-200 ${
            payment === "mastercard" && "border-slate-800"
          }`}
        >
          <Image
            className="h-12 w-12"
            src={mastercardIcon}
            alt="MasterCard"
            width={40}
            height={40}
          />
        </div>
        <div
          onClick={() => {
            setPayment("paypal");
          }}
          className={`border-2 bg-primary-foreground rounded-md px-2 shadow-md cursor-pointer hover:scale-110 transition-all duration-200 ${
            payment === "paypal" && "border-slate-800"
          }`}
        >
          <Image
            className="h-12 w-12"
            src={paypalIcon}
            alt="paypal"
            width={40}
            height={40}
          />
        </div>
        <div
          onClick={() => {
            setPayment("bitcoin");
          }}
          className={`border-2 bg-primary-foreground rounded-md px-2 shadow-md cursor-pointer hover:scale-110 transition-all duration-200 ${
            payment === "bitcoin" && "border-slate-800"
          }`}
        >
          <Bitcoin color="#ffa602" className="h-12 w-12" />
        </div>
      </div>
    </div>
  );
}
