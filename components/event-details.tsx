import { Calendar, Clock, MapPin, Users, Terminal } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function EventDetails() {
  return (
    <Card className="border-gruvbox-yellow bg-gruvbox-bg">
      <CardContent className="p-6">
        <div className="flex items-center gap-2 mb-4 text-gruvbox-yellow">
          <Terminal className="h-4 w-4" />
          <span>$ cat event_info.json</span>
        </div>
        <div className="space-y-4 text-gruvbox-fg font-mono">
          <div className="flex items-start gap-3">
            <Calendar className="h-5 w-5 text-gruvbox-green mt-1" />
            <div>
              <div className="text-gruvbox-blue">"date":</div>
              <div>"2025-10-15" to "2025-10-17"</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Clock className="h-5 w-5 text-gruvbox-green mt-1" />
            <div>
              <div className="text-gruvbox-blue">"time":</div>
              <div>"09:00:00" - "18:00:00"</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MapPin className="h-5 w-5 text-gruvbox-green mt-1" />
            <div>
              <div className="text-gruvbox-blue">"location":</div>
              <div>"Tech Innovation Center"</div>
              <div className="text-sm">"123 Open Source Ave, Porto Alegre"</div>
              <Link
                href="https://maps.google.com"
                className="text-sm text-gruvbox-yellow hover:text-[#d79921]"
                target="_blank"
              >
                ./view_map.sh
              </Link>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Users className="h-5 w-5 text-gruvbox-green mt-1" />
            <div>
              <div className="text-gruvbox-blue">"attendees":</div>
              <div>"500+" expected</div>
            </div>
          </div>
          <Button
            variant="outline"
            className="w-full mt-2 border-gruvbox-yellow text-gruvbox-fg hover:bg-gruvbox-bg1 font-mono"
          >
            ./add_to_calendar.sh
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
