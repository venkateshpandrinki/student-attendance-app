
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white border-b border-gray-200 dark:bg-gray-950 dark:border-gray-800">
        <div className="container flex items-center justify-between h-14 px-4 md:px-6">
          <Link className="flex items-center space-x-2 text-sm font-medium" href="#">
            <span className="sr-only">Home</span>
            <img
              alt="Acme"
              className="rounded-lg"
              height="32"
              src="/placeholder.svg"
              style={{
                aspectRatio: "32/32",
                objectFit: "cover",
              }}
              width="32"
            />
            <span className="font-bold">Andhra university</span>
          </Link>
          <nav className="hidden space-x-4 md:flex">
            <Link
              className="flex items-center text-sm font-medium text-gray-900 hover:text-gray-900 dark:text-gray-50 dark:hover:text-gray-50"
              href="#"
            >
              Features
            </Link>
            <Link
              className="flex items-center text-sm font-medium text-gray-900 hover:text-gray-900 dark:text-gray-50 dark:hover:text-gray-50"
              href="#"
            >
              Pricing
            </Link>
            <Link
              className="flex items-center text-sm font-medium text-gray-900 hover:text-gray-900 dark:text-gray-50 dark:hover:text-gray-50"
              href="#"
            >
              Contact
            </Link>
            <Link
              className="flex items-center text-sm font-medium text-gray-900 hover:text-gray-900 dark:text-gray-50 dark:hover:text-gray-50"
              href="#"
            >
              Sign in
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Link
              className="flex items-center text-sm font-medium text-gray-900 hover:text-gray-900 dark:text-gray-50 dark:hover:text-gray-50"
              href="#"
            >
              Contact Us
            </Link>
            <Button size="sm" variant="outline">
              Sign Up
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="container py-8 flex flex-col items-center justify-center space-y-4 px-4 md:px-6">
          <div className="text-center space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl">Student Attendance Management</h1>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              The all-in-one platform for tracking student attendance. Easily manage attendance records, identify
              trends, and improve student engagement.
            </p>
          </div>
        </div>
        <div className="bg-gray-100 py-12">
          <div className="container grid gap-6 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">Features</h2>
              <p className="max-w-[800px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Our system provides a range of features to make attendance tracking easier and more efficient.
              </p>
            </div>
            <div className="mx-auto grid max-w-sm items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Automated Attendance</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Automatically track student attendance using QR codes or check-in kiosks.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Real-time Reporting</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Access real-time attendance data and generate custom reports for analysis.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Customizable Workflow</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Define your own attendance tracking workflow and integrate with existing systems.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container flex flex-col gap-4 py-12 md:py-16 px-4 text-center md:gap-8 lg:gap-12 md:px-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to get started?</h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Learn how our platform can help you track and manage student attendance more efficiently.
            </p>
          </div>
          <div>
            <Link
              className="inline-flex h-10 items-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              href="#"
            >
              Sign Up for Free
            </Link>
          </div>
        </div>
      </main>
      <footer className="border-t border-gray-200 dark:border-gray-800">
        <div className="container flex flex-col items-center justify-center py-8 md:py-16 px-4 md:gap-8 md:flex-row md:px-6">
          <nav className="flex flex-col gap-2 md:flex-row md:ml-auto md:gap-4">
            <Link
              className="text-sm text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#"
            >
              About Us
            </Link>
            <Link
              className="text-sm text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#"
            >
              Contact Us
            </Link>
            <Link
              className="text-sm text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#"
            >
              Terms of Service
            </Link>
            <Link
              className="text-sm text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#"
            >
              Privacy Policy
            </Link>
          </nav>
          <p className="order-first text-sm text-gray-500 md:order-none dark:text-gray-400">
            © 2023 Acme Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
