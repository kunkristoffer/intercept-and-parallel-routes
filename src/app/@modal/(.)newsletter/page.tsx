import { Modal } from "@/components/layout/modal";

export const dynamic = 'force-dynamic'
export default function Page() {
  return (
    <Modal>
      <div className="flex-1 flex flex-col gap-4 p-8 w-full justify-center items-center">
        this is the news modal
      </div>
    </Modal>
  );
}
