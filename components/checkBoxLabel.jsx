"use client"

import { Checkbox } from "@/components/ui/checkbox"

export function CheckboxLabel({text, onClick}) {
  return (
    <div className="flex items-center space-x-2" onClick={onClick}>
      <Checkbox id="terms" />
      <label
        htmlFor="terms"
        className="text-md font-thin  leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
       {text}
      </label>
    </div>
  )
}
