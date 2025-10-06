"use client"; // required if you're in the `app/` router

import { useRouter } from "next/navigation"; // for app/ router
// import { useRouter } from "next/router"; // for pages/ router

export default function BackButton() {
  const router = useRouter();

  return (
    <button onClick={() => router.back()} className="px-4 py-2 bg-blue-500 text-white rounded">⬅ Back</button>
  );
}
