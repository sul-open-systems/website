import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Twitter, Terminal, Mail, MapPin } from "lucide-react"
import Link from "next/link"

export default function SpeakersSection() {
  const speakers = [
    {
      name: "Dr. Maria Santos",
      username: "maria_santos",
      role: "Open Source Advocate & CTO",
      company: "TechForward",
      bio: "Dr. Santos has over 15 years of experience in open source development and is a leading advocate for open source in enterprise environments.",
      image: "/placeholder.svg?height=300&width=300",
      location: "San Francisco, CA",
      email: "maria@techforward.com",
      social: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        github: "https://github.com",
      },
      fingerprint: "4A3B 2C1D 5E6F 7890 ABCD EF12 3456 7890",
      last_seen: "2025-01-15 14:30:22",
      contributions: 1247,
    },
    {
      name: "James Chen",
      username: "james_chen",
      role: "Community Manager",
      company: "OpenDev Foundation",
      bio: "James specializes in building and nurturing open source communities, with a focus on inclusivity and sustainable growth.",
      image: "/placeholder.svg?height=300&width=300",
      location: "Toronto, ON",
      email: "james@opendev.org",
      social: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        github: "https://github.com",
      },
      fingerprint: "5B4C 3D2E 6F70 8901 BCDE F123 4567 8901",
      last_seen: "2025-01-14 09:15:33",
      contributions: 892,
    },
    {
      name: "Aisha Johnson",
      username: "aisha_johnson",
      role: "Security Researcher",
      company: "SecureCode Labs",
      bio: "Aisha is an expert in open source security, focusing on vulnerability assessment and secure coding practices.",
      image: "/placeholder.svg?height=300&width=300",
      location: "London, UK",
      email: "aisha@securecode.labs",
      social: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        github: "https://github.com",
      },
      fingerprint: "6C5D 4E3F 7081 9012 CDEF 1234 5678 9012",
      last_seen: "2025-01-13 16:45:11",
      contributions: 1456,
    },
    {
      name: "Carlos Rodriguez",
      username: "carlos_rodriguez",
      role: "Open Source Contributor",
      company: "Mozilla",
      bio: "Carlos has contributed to over 50 open source projects and specializes in helping newcomers make their first contributions.",
      image: "/placeholder.svg?height=300&width=300",
      location: "Madrid, ES",
      email: "carlos@mozilla.com",
      social: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        github: "https://github.com",
      },
      fingerprint: "7D6E 5F40 8192 0123 DEF1 2345 6789 0123",
      last_seen: "2025-01-12 11:20:44",
      contributions: 2103,
    },
    {
      name: "Dr. Thomas Lee",
      username: "thomas_lee",
      role: "AI Researcher",
      company: "OpenAI Research",
      bio: "Dr. Lee explores the intersection of open source and artificial intelligence, advocating for transparent and ethical AI development.",
      image: "/placeholder.svg?height=300&width=300",
      location: "Seattle, WA",
      email: "thomas@openai.research",
      social: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        github: "https://github.com",
      },
      fingerprint: "8E7F 6051 9203 1234 EF12 3456 789A 0134",
      last_seen: "2025-01-11 13:55:27",
      contributions: 987,
    },
    {
      name: "Elena Petrova",
      username: "elena_petrova",
      role: "Legal Counsel",
      company: "Open Source Legal Network",
      bio: "Elena specializes in open source licensing and compliance, helping organizations navigate the legal aspects of open source.",
      image: "/placeholder.svg?height=300&width=300",
      location: "Berlin, DE",
      email: "elena@oslegal.net",
      social: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        github: "https://github.com",
      },
      fingerprint: "9F80 7162 A314 2345 F123 4567 89AB 0245",
      last_seen: "2025-01-10 08:30:15",
      contributions: 654,
    },
  ]

  return (
    <div className="space-y-6">
      <div className="border-gruvbox-yellow border p-4 bg-gruvbox-bg">
        <div className="flex items-center gap-2 mb-2 text-gruvbox-yellow">
          <Terminal className="h-4 w-4" />
          <span>$ whois --speakers --format=detailed</span>
        </div>
        <div className="text-gruvbox-fg">
          Querying speaker database...
          <br />
          Fetching user profiles...
          <br />
          Generating fingerprint data...
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
        {speakers.map((speaker, index) => (
          <Card key={index} className="border-gruvbox-yellow bg-gruvbox-bg font-mono">
            <CardContent className="p-0">
              <div className="bg-gruvbox-bg1 p-3 border-b border-gruvbox-yellow">
                <div className="text-gruvbox-yellow">$ finger {speaker.username}</div>
              </div>
              <div className="p-4 space-y-3">
                <div className="flex gap-4">
                  <div className="w-20 h-20 relative border border-gruvbox-yellow">
                    <Image
                      src={speaker.image || "/placeholder.svg"}
                      alt={speaker.name}
                      fill
                      className="object-cover opacity-80"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="text-gruvbox-yellow">Login: {speaker.username}</div>
                    <div className="text-gruvbox-fg">Name: {speaker.name}</div>
                    <div className="text-gruvbox-blue">Title: {speaker.role}</div>
                    <div className="text-gruvbox-blue">Organization: {speaker.company}</div>
                  </div>
                </div>

                <div className="space-y-1 text-sm">
                  <div className="flex items-center gap-2 text-gruvbox-fg">
                    <Mail className="h-3 w-3" />
                    <span>{speaker.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gruvbox-fg">
                    <MapPin className="h-3 w-3" />
                    <span>{speaker.location}</span>
                  </div>
                  <div className="text-gruvbox-gray">Last seen: {speaker.last_seen}</div>
                  <div className="text-gruvbox-gray">Contributions: {speaker.contributions}</div>
                </div>

                <div className="border-t border-gruvbox-yellow pt-3">
                  <div className="text-gruvbox-yellow text-xs mb-1">FINGERPRINT:</div>
                  <div className="text-gruvbox-gray text-xs font-mono">{speaker.fingerprint}</div>
                </div>

                <div className="text-gruvbox-fg text-sm"># {speaker.bio}</div>

                <div className="flex gap-2 pt-2">
                  <Link href={speaker.social.twitter} className="text-gruvbox-gray hover:text-gruvbox-yellow">
                    <Twitter className="h-4 w-4" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                  <Link href={speaker.social.linkedin} className="text-gruvbox-gray hover:text-gruvbox-yellow">
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                  <Link href={speaker.social.github} className="text-gruvbox-gray hover:text-gruvbox-yellow">
                    <Github className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
