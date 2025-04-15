"use client"

import { useState } from "react"
import { Copy } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"

export function DonationModal() {
  const [open, setOpen] = useState(false)

  const accountDetails = [
    {
      bank: "Access Bank of Nigeria",
      accountName: "Lucky Elliot Osuidia",
      accountNumber: "0813099259",
      swiftCode: "FBNINGLA",
    },
    {
      bank: "Opay Digital Bank",
      accountName: "Lucky Elliot Osuidia",
      accountNumber: "7011305106",
      swiftCode: "ZEIBNGLA",
    },
  ]

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text).then(
      () => {
        toast("Copied!")
      },
      (err) => {
        toast("Failed to copy")
      },
    )
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Donate Now</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-xl">Support Wildlife Conservation</DialogTitle>
          <DialogDescription>
            Your donation helps protect Nigeria&apos;s endangered wildlife and their habitats.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-6 py-4">
          <div className="rounded-lg bg-green-50 p-4">
            <p className="mb-2 font-medium text-green-800">Bank Transfer Details</p>
            <div className="space-y-4">
              {accountDetails.map((account, index) => (
                <div key={index} className="rounded-md border bg-white p-3">
                  <p className="font-medium">{account.bank}</p>
                  <div className="mt-2 space-y-2 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Account Name:</span>
                      <span className="font-medium">{account.accountName}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Account Number:</span>
                      <div className="flex items-center gap-1">
                        <span className="font-medium">{account.accountNumber}</span>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6"
                          onClick={() => copyToClipboard(account.accountNumber, "Account number")}
                        >
                          <Copy className="h-3 w-3" />
                          <span className="sr-only">Copy account number</span>
                        </Button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Swift Code:</span>
                      <span className="font-medium">{account.swiftCode}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="md:block hidden">
            <p className="mb-3 font-medium">Other Ways to Donate</p>
            <div className="space-y-3">
              <div className="rounded-md border p-3">
                <Label htmlFor="amount" className="text-sm font-medium">
                  Donation Amount (₦)
                </Label>
                <div className="mt-1 flex gap-2">
                  <Input id="amount" placeholder="Enter amount" type="number" />
                  <Button className="bg-green-600 hover:bg-green-700">Pay Online</Button>
                </div>
                <p className="mt-2 text-xs text-muted-foreground">Secure payment via Paystack or Flutterwave</p>
              </div>
            </div>
          </div>
        </div>
        <DialogFooter className="flex flex-col sm:flex-row sm:justify-between sm:space-x-0">
          <p className="text-xs text-muted-foreground">
            For assistance with donations, please contact us at donations@wildnigeria.org
          </p>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
