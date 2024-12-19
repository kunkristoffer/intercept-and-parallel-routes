import Image from "next/image";
import Link from "next/link";
import { User } from "firebase/auth";
import { MdMailOutline, MdNotificationsNone, MdOutlineDashboard } from "react-icons/md";
import { SignoutButton, UserMenuLinks } from "@/components/ui/buttons/user";

export function UserMenuHeader({ displayName, email, photoURL }: User) {
  return (
    <div className="relative group">
      <Image
        height={35}
        width={35}
        className="rounded-full"
        src={photoURL ?? "/ModelImage.jpg"}
        alt={displayName + "'s profile picture"}
      />
      <div className="collapse group-hover:visible absolute top-0 right-0 flex flex-col border rounded-lg bg-kv-white border-teamwork-primary-orange shadow-2xl transition-opacity duration-300 z-10">
        <div className="flex gap-2 p-4 w-max bg-teamwork-primary-orange/10 rounded-t">
          <Link href={`/profile/${displayName}`}>
            <Image
              height={56}
              width={56}
              className="rounded-full"
              src={photoURL ?? "/ModelImage.jpg"}
              alt={displayName + "'s profile picture"}
            />
          </Link>
          <div className="flex flex-col justify-center h-14">
            <p className="text-slate-900 font-semibold capitalize">{displayName}</p>
            <p className="text-slate-500 text-xs">{email}</p>
          </div>
        </div>
        <div className="flex flex-col">
          <UserMenuLinks icon={<MdMailOutline size={28} />} href="/messages" name="Inbox" notifications={2} />
          <UserMenuLinks icon={<MdOutlineDashboard size={28} />} href="/activities" name="Activities" notifications={6} />
          <UserMenuLinks icon={<MdNotificationsNone size={28} />} href="/dashboard" name="Dashboard" />
        </div>
        <SignoutButton />
      </div>
    </div>
  );
}
