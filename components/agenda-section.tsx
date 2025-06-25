import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Terminal } from "lucide-react"

export default function AgendaSection() {
  const days = [
    { value: "day1", label: "day1", date: "2025-10-15" },
    { value: "day2", label: "day2", date: "2025-10-16" },
    { value: "day3", label: "day3", date: "2025-10-17" },
  ]

  return (
    <div className="space-y-6">
      <div className="border border-gruvbox-yellow p-4 bg-gruvbox-bg">
        <div className="flex items-center gap-2 mb-2 text-gruvbox-yellow">
          <Terminal className="h-4 w-4" />
          <span>$ ./parse_agenda.sh --format=json</span>
        </div>
        <div className="text-gruvbox-fg">
          Parsing event schedule database...
          <br />
          Loading speaker assignments...
          <br />
          Generating timeline output...
        </div>
      </div>

      <Tabs defaultValue="day1" className="w-full">
        <TabsList className="w-full grid grid-cols-3 mb-6 bg-gruvbox-bg border border-gruvbox-yellow">
          {days.map((day) => (
            <TabsTrigger
              key={day.value}
              value={day.value}
              className="data-[state=active]:bg-gruvbox-bg1 data-[state=active]:text-gruvbox-yellow text-gruvbox-gray font-mono"
            >
              <div>
                <div className="font-medium">./{day.label}</div>
                <div className="text-xs">{day.date}</div>
              </div>
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="day1" className="mt-0 space-y-4">
          <AgendaDay
            sessions={[
              {
                time: "08:00:00",
                title: "system_init: Registration & Breakfast",
                description: "Check-in process and complimentary breakfast while networking with fellow attendees.",
                type: "system",
                command: "init_registration.sh",
              },
              {
                time: "09:00:00",
                title: "keynote: The Future of Open Source",
                speaker: "Dr. Maria Santos",
                description: "An inspiring talk on how open source is shaping the future of technology and society.",
                type: "keynote",
                command: "exec_keynote --speaker=maria_santos",
              },
              {
                time: "10:15:00",
                title: "talk: Building Sustainable Open Source Communities",
                speaker: "James Chen",
                description: "Learn strategies for creating and maintaining healthy open source project communities.",
                type: "talk",
                command: "run_talk --topic=community_building",
              },
              {
                time: "11:30:00",
                title: "talk: Open Source Security Best Practices",
                speaker: "Aisha Johnson",
                description: "Essential security practices every open source project should implement.",
                type: "talk",
                command: "exec_security_talk.sh",
              },
              {
                time: "12:30:00",
                title: "break: Lunch Break",
                description: "Networking lunch with special dietary options available.",
                type: "break",
                command: "pause_execution --duration=3600",
              },
              {
                time: "13:30:00",
                title: "workshop: Contributing to Your First Open Source Project",
                speaker: "Carlos Rodriguez",
                description: "A hands-on workshop for beginners to make their first open source contribution.",
                type: "workshop",
                command: "./workshop_first_contribution.sh",
              },
              {
                time: "15:15:00",
                title: "panel: Open Source Business Models",
                description: "Industry experts discuss sustainable business models built around open source.",
                type: "panel",
                command: "start_panel --topic=business_models",
              },
              {
                time: "16:30:00",
                title: "lightning: Lightning Talks",
                description: "Quick 5-minute presentations on various open source projects and initiatives.",
                type: "lightning",
                command: "exec_lightning_talks --duration=300",
              },
              {
                time: "17:30:00",
                title: "social: Welcome Reception",
                description: "Drinks and appetizers while networking with speakers and attendees.",
                type: "social",
                command: "./networking_event.sh --type=reception",
              },
            ]}
          />
        </TabsContent>

        <TabsContent value="day2" className="mt-0 space-y-4">
          <AgendaDay
            sessions={[
              {
                time: "08:30:00",
                title: "system_init: Morning Coffee",
                description: "Start your day with coffee and light refreshments.",
                type: "system",
                command: "init_morning_session.sh",
              },
              {
                time: "09:00:00",
                title: "keynote: Open Source and AI",
                speaker: "Dr. Thomas Lee",
                description: "Exploring the intersection of open source and artificial intelligence.",
                type: "keynote",
                command: "exec_keynote --speaker=thomas_lee --topic=ai",
              },
              {
                time: "10:15:00",
                title: "talk: Open Source Licensing Explained",
                speaker: "Elena Petrova",
                description: "Navigate the complex world of open source licenses and compliance.",
                type: "talk",
                command: "run_licensing_talk.sh",
              },
              {
                time: "11:30:00",
                title: "talk: Building Inclusive Open Source Communities",
                speaker: "Marcus Johnson",
                description: "Strategies for creating diverse and inclusive open source projects.",
                type: "talk",
                command: "exec_inclusion_talk --speaker=marcus_johnson",
              },
              {
                time: "12:30:00",
                title: "break: Lunch Break",
                description: "Networking lunch with special dietary options available.",
                type: "break",
                command: "pause_execution --duration=3600",
              },
              {
                time: "13:30:00",
                title: "workshop: Open Source Project Governance",
                speaker: "Sophia Williams",
                description: "Learn how to establish effective governance models for your open source project.",
                type: "workshop",
                command: "./governance_workshop.sh",
              },
              {
                time: "15:15:00",
                title: "talk: Open Source in Enterprise",
                speaker: "Robert Kim",
                description: "Real-world examples of enterprises successfully adopting open source.",
                type: "talk",
                command: "run_enterprise_talk.sh",
              },
              {
                time: "16:30:00",
                title: "unconference: Unconference Sessions",
                description: "Attendee-driven discussions on topics of interest.",
                type: "unconference",
                command: "./unconference_manager.sh --mode=interactive",
              },
              {
                time: "18:00:00",
                title: "social: Conference Dinner",
                description: "Join us for a special dinner event at the Botanical Gardens Restaurant.",
                type: "social",
                command: "./dinner_event.sh --location=botanical_gardens",
              },
            ]}
          />
        </TabsContent>

        <TabsContent value="day3" className="mt-0 space-y-4">
          <AgendaDay
            sessions={[
              {
                time: "08:30:00",
                title: "system_init: Morning Coffee",
                description: "Start your day with coffee and light refreshments.",
                type: "system",
                command: "init_morning_session.sh",
              },
              {
                time: "09:00:00",
                title: "keynote: The Next Decade of Open Source",
                speaker: "Dr. Amina Patel",
                description: "A visionary look at where open source is headed in the next ten years.",
                type: "keynote",
                command: "exec_keynote --speaker=amina_patel --topic=future",
              },
              {
                time: "10:15:00",
                title: "talk: Open Source Documentation Best Practices",
                speaker: "David Wilson",
                description: "Creating documentation that attracts and retains contributors.",
                type: "talk",
                command: "run_documentation_talk.sh",
              },
              {
                time: "11:30:00",
                title: "panel: Open Source Education",
                description: "Educators discuss integrating open source into academic curricula.",
                type: "panel",
                command: "start_panel --topic=education",
              },
              {
                time: "12:30:00",
                title: "break: Lunch Break",
                description: "Final networking lunch of the conference.",
                type: "break",
                command: "pause_execution --duration=3600",
              },
              {
                time: "13:30:00",
                title: "workshop: Building Your Open Source Resume",
                speaker: "Natalie Chen",
                description: "How to leverage your open source contributions in your professional career.",
                type: "workshop",
                command: "./resume_workshop.sh",
              },
              {
                time: "15:15:00",
                title: "showcase: Open Source Project Showcase",
                description: "Demonstrations of innovative open source projects from our community.",
                type: "showcase",
                command: "./project_showcase.sh --mode=demo",
              },
              {
                time: "16:30:00",
                title: "keynote: Closing Keynote & Awards",
                speaker: "Miguel Hernandez",
                description: "Reflecting on the conference and recognizing outstanding contributions.",
                type: "keynote",
                command: "exec_closing_ceremony.sh",
              },
              {
                time: "17:30:00",
                title: "social: Farewell Reception",
                description: "Final networking opportunity and conference conclusion.",
                type: "social",
                command: "./farewell_event.sh",
              },
            ]}
          />
        </TabsContent>
      </Tabs>
    </div>
  )
}

function AgendaDay({ sessions }) {
  const getBadgeColor = (type) => {
    switch (type) {
      case "keynote":
        return "bg-gruvbox-yellow text-gruvbox-bg"
      case "talk":
        return "bg-gruvbox-blue text-gruvbox-bg"
      case "workshop":
        return "bg-gruvbox-green text-gruvbox-bg"
      case "panel":
        return "bg-gruvbox-purple text-gruvbox-bg"
      case "break":
        return "bg-gruvbox-gray text-gruvbox-fg"
      case "social":
        return "bg-gruvbox-orange text-gruvbox-bg"
      case "system":
        return "bg-gruvbox-aqua text-gruvbox-bg"
      default:
        return "bg-gruvbox-blue text-gruvbox-bg"
    }
  }

  return (
    <div className="space-y-4">
      {sessions.map((session, index) => (
        <Card key={index} className="border-gruvbox-yellow bg-gruvbox-bg">
          <CardContent className="p-0">
            <div className="flex flex-col">
              <div className="bg-gruvbox-bg1 p-4 border-b border-gruvbox-yellow">
                <div className="flex items-center justify-between">
                  <div className="text-gruvbox-yellow font-mono">[{session.time}]</div>
                  <Badge className={`${getBadgeColor(session.type)} font-mono`}>{session.type}</Badge>
                </div>
                <div className="text-gruvbox-fg font-mono text-sm mt-1">
                  $ {session.command || `exec_${session.type}.sh`}
                </div>
              </div>
              <div className="p-4">
                <div className="text-gruvbox-yellow font-mono text-lg mb-1">{session.title}</div>
                {session.speaker && (
                  <div className="text-gruvbox-blue font-mono mb-2">
                    --speaker={session.speaker.toLowerCase().replace(" ", "_")}
                  </div>
                )}
                <div className="text-gruvbox-gray"># {session.description}</div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
