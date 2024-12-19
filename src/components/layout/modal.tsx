"use client";

import { useRouter } from "next/navigation";

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  function onDismiss() {
    router.back();
  }
  return (
    <div className="fixed inset-0 backdrop-blur-[4px] backdrop-brightness-75 grid place-items-center">
      <dialog open onClose={onDismiss} className="rounded-lg p-8">
        <button
          className="absolute top-2 right-2 text-orange-500 hover:text-orange-400"
          onClick={onDismiss}
        >
          X
        </button>
        <div>{children}</div>
      </dialog>
    </div>
  );
}
