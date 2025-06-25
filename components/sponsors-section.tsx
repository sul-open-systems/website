import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Terminal } from "lucide-react"

export default function SponsorsSection() {
  const sponsorTiers = [
    {
      tier: "platinum",
      level: "LEVEL_5",
      sponsors: [
        { name: "TechCorp", logo: "/placeholder.svg?height=100&width=200", id: "techcorp_001" },
        { name: "OpenSource Inc", logo: "/placeholder.svg?height=100&width=200", id: "opensource_inc_002" },
      ],
    },
    {
      tier: "gold",
      level: "LEVEL_4",
      sponsors: [
        { name: "DevTools Pro", logo: "/placeholder.svg?height=80&width=160", id: "devtools_pro_003" },
        { name: "CloudNative Systems", logo: "/placeholder.svg?height=80&width=160", id: "cloudnative_004" },
        { name: "CodeFusion", logo: "/placeholder.svg?height=80&width=160", id: "codefusion_005" },
      ],
    },
    {
      tier: "silver",
      level: "LEVEL_3",
      sponsors: [
        { name: "DataFlow", logo: "/placeholder.svg?height=60&width=120", id: "dataflow_006" },
        { name: "SecureNet", logo: "/placeholder.svg?height=60&width=120", id: "securenet_007" },
        { name: "AppBuilder", logo: "/placeholder.svg?height=60&width=120", id: "appbuilder_008" },
        { name: "DevOps Tools", logo: "/placeholder.svg?height=60&width=120", id: "devops_tools_009" },
      ],
    },
    {
      tier: "community",
      level: "LEVEL_1",
      sponsors: [
        { name: "LocalTech", logo: "/placeholder.svg?height=50&width=100", id: "localtech_010" },
        { name: "DevMeetup", logo: "/placeholder.svg?height=50&width=100", id: "devmeetup_011" },
        { name: "CodeCommunity", logo: "/placeholder.svg?height=50&width=100", id: "codecommunity_012" },
        { name: "TechEdu", logo: "/placeholder.svg?height=50&width=100", id: "techedu_013" },
        { name: "OpenLearn", logo: "/placeholder.svg?height=50&width=100", id: "openlearn_014" },
      ],
    },
  ]

  return (
    <div className="space-y-8">
      <div className="border-gruvbox-yellow border p-4 bg-gruvbox-bg">
        <div className="flex items-center gap-2 mb-2 text-gruvbox-yellow">
          <Terminal className="h-4 w-4" />
          <span>$ ls -la sponsors/ | grep -E "(platinum|gold|silver|community)"</span>
        </div>
        <div className="text-gruvbox-fg">
          Loading sponsor database...
          <br />
          Parsing sponsorship levels...
          <br />
          Generating sponsor manifest...
        </div>
      </div>

      {sponsorTiers.map((tier, index) => (
        <div key={index} className="space-y-4">
          <div className="border-gruvbox-yellow border p-3 bg-gruvbox-bg">
            <div className="text-gruvbox-yellow font-mono">$ cat sponsors/{tier.tier}.json | jq '.level'</div>
            <div className="text-gruvbox-fg font-mono">
              "{tier.level}" # {tier.tier.toUpperCase()} TIER SPONSORS
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {tier.sponsors.map((sponsor, sponsorIndex) => (
              <Card key={sponsorIndex} className="border-gruvbox-yellow bg-gruvbox-bg">
                <CardContent className="p-4 flex flex-col items-center justify-center h-32">
                  <Image
                    src={sponsor.logo || "/placeholder.svg"}
                    alt={sponsor.name}
                    width={
                      tier.tier === "platinum" ? 200 : tier.tier === "gold" ? 160 : tier.tier === "silver" ? 120 : 100
                    }
                    height={
                      tier.tier === "platinum" ? 100 : tier.tier === "gold" ? 80 : tier.tier === "silver" ? 60 : 50
                    }
                    className="max-w-full opacity-80"
                  />
                  <div className="text-gruvbox-gray text-xs font-mono mt-2">ID: {sponsor.id}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ))}

      <div className="border-gruvbox-yellow border p-6 bg-gruvbox-bg mt-8">
        <div className="text-gruvbox-yellow font-mono mb-2">$ ./become_sponsor.sh --help</div>
        <div className="text-gruvbox-fg mb-4">
          # Support the open source community and gain visibility
          <br /># for your organization by becoming a sponsor of the
          <br /># S.O.S. Conference.
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button className="bg-gruvbox-yellow hover:bg-gruvbox-orange text-gruvbox-bg font-mono">
            $ ./view_packages.sh
          </Button>
          <Button variant="outline" className="border-gruvbox-yellow text-gruvbox-fg hover:bg-gruvbox-bg1 font-mono">
            $ ./contact_team.sh
          </Button>
        </div>
      </div>
    </div>
  )
}
