import { EngagementChannels } from "@/components/engagement/channels";

export default function EngagementPage() {
  return (
    <div className="flex flex-col space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-gradient">Engajamento Multicanal</h2>
        <p className="text-white/40 text-sm mt-1">
          Gerencie e automatize a comunicação da sua empresa via e-mail, WhatsApp e SMS.
        </p>
      </div>
      <EngagementChannels />
    </div>
  );
}
