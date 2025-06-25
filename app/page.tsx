import Image from "next/image"
import Link from "next/link"
import { Terminal, Calendar, Clock, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"

import EventHeader from "@/components/event-header"
import EventDetails from "@/components/event-details"
import AgendaSection from "@/components/agenda-section"
import SpeakersSection from "@/components/speakers-section"
import RegistrationForm from "@/components/registration-form"
import SocialShareButtons from "@/components/social-share-buttons"
import SponsorsSection from "@/components/sponsors-section"

export default function EventPage() {
  return (
    <div className="min-h-screen bg-gruvbox-bg text-gruvbox-fg font-mono">
      <EventHeader />

      <main className="container px-4 py-8 md:py-12">
        {/* Terminal Welcome */}
        <div className="mb-8 p-4 border border-gruvbox-yellow bg-gruvbox-bg">
          <div className="flex items-center gap-2 mb-2">
            <Terminal className="h-4 w-4" />
            <span className="text-gruvbox-yellow">user@sos-conference:~$</span>
          </div>
          <div className="text-gruvbox-fg">
            <div>Welcome to Sul Open Systems Conference 2025</div>
            <div className="text-gruvbox-green">{">"} Initializing event data...</div>
            <div className="text-gruvbox-green">{">"} Loading speakers database...</div>
            <div className="text-gruvbox-green">{">"} Parsing agenda.json...</div>
            <div className="text-gruvbox-blue">{">"} System ready. Type 'help' for available commands.</div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
          <div className="lg:col-span-2">
            <Tabs defaultValue="about" className="w-full">
              <TabsList className="w-full justify-start mb-6 bg-gruvbox-bg border-b border-gruvbox-yellow rounded-none h-auto p-0 gap-6">
                <TabsTrigger
                  value="about"
                  className="data-[state=active]:border-gruvbox-yellow data-[state=active]:border-b-2 data-[state=active]:bg-gruvbox-bg data-[state=active]:text-gruvbox-yellow rounded-none pb-2 text-lg bg-gruvbox-bg text-gruvbox-gray hover:text-gruvbox-fg"
                >
                  ./about
                </TabsTrigger>
                <TabsTrigger
                  value="agenda"
                  className="data-[state=active]:border-gruvbox-yellow data-[state=active]:border-b-2 data-[state=active]:bg-gruvbox-bg data-[state=active]:text-gruvbox-yellow rounded-none pb-2 text-lg bg-gruvbox-bg text-gruvbox-gray hover:text-gruvbox-fg"
                >
                  ./agenda
                </TabsTrigger>
                <TabsTrigger
                  value="speakers"
                  className="data-[state=active]:border-gruvbox-yellow data-[state=active]:border-b-2 data-[state=active]:bg-gruvbox-bg data-[state=active]:text-gruvbox-yellow rounded-none pb-2 text-lg bg-gruvbox-bg text-gruvbox-gray hover:text-gruvbox-fg"
                >
                  ./speakers
                </TabsTrigger>
                <TabsTrigger
                  value="sponsors"
                  className="data-[state=active]:border-gruvbox-yellow data-[state=active]:border-b-2 data-[state=active]:bg-gruvbox-bg data-[state=active]:text-gruvbox-yellow rounded-none pb-2 text-lg bg-gruvbox-bg text-gruvbox-gray hover:text-gruvbox-fg"
                >
                  ./sponsors
                </TabsTrigger>
              </TabsList>

              <TabsContent value="about" className="mt-0">
                <div className="space-y-6">
                  <div className="border border-gruvbox-yellow p-4 bg-gruvbox-bg">
                    <div className="text-gruvbox-yellow mb-2">$ cat about.txt</div>
                    <div className="space-y-4 text-gruvbox-fg">
                      <div>
                        <div className="text-gruvbox-blue"># Sul Open Systems Conference 2025</div>
                        <div className="mt-2">
                          Join us for the annual Sul Open Systems (S.O.S.) Conference, where open-source enthusiasts,
                          developers, and community leaders come together to share knowledge, collaborate, and innovate.
                        </div>
                      </div>

                      <div>
                        <div className="text-gruvbox-blue">
                          # Theme: "Collaborative Innovation: Building the Future Together"
                        </div>
                        <div className="mt-2">
                          This year's theme focuses on how open-source communities can work together to solve complex
                          problems and create sustainable technology solutions.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border border-gruvbox-yellow p-4 bg-gruvbox-bg">
                    <div className="text-gruvbox-yellow mb-2">$ ls -la features/</div>
                    <div className="space-y-1 text-gruvbox-fg">
                      <div>drwxr-xr-x 2 root root 4096 Oct 15 09:00 keynotes/</div>
                      <div>drwxr-xr-x 2 root root 4096 Oct 15 09:00 workshops/</div>
                      <div>drwxr-xr-x 2 root root 4096 Oct 15 09:00 lightning_talks/</div>
                      <div>drwxr-xr-x 2 root root 4096 Oct 15 09:00 networking/</div>
                      <div>drwxr-xr-x 2 root root 4096 Oct 15 09:00 contribution_sprints/</div>
                      <div>drwxr-xr-x 2 root root 4096 Oct 15 09:00 community_showcase/</div>
                    </div>
                  </div>

                  <div className="border border-gruvbox-yellow p-4 bg-gruvbox-bg">
                    <div className="text-gruvbox-yellow mb-2">$ grep -i "info" event_details.log</div>
                    <div className="grid gap-4 md:grid-cols-3 text-gruvbox-fg">
                      <div className="flex items-start gap-3">
                        <Calendar className="h-5 w-5 text-gruvbox-green mt-1" />
                        <div>
                          <div className="text-gruvbox-blue">DATE:</div>
                          <div>2025-10-15 to 2025-10-17</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Clock className="h-5 w-5 text-gruvbox-green mt-1" />
                        <div>
                          <div className="text-gruvbox-blue">TIME:</div>
                          <div>09:00:00 - 18:00:00</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-gruvbox-green mt-1" />
                        <div>
                          <div className="text-gruvbox-blue">LOCATION:</div>
                          <div>Tech Innovation Center</div>
                          <div className="text-sm">123 Open Source Ave</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="agenda" className="mt-0">
                <AgendaSection />
              </TabsContent>

              <TabsContent value="speakers" className="mt-0">
                <SpeakersSection />
              </TabsContent>

              <TabsContent value="sponsors" className="mt-0">
                <SponsorsSection />
              </TabsContent>
            </Tabs>
          </div>

          <div className="space-y-6">
            <EventDetails />
            <Card className="border-gruvbox-yellow bg-gruvbox-bg">
              <CardContent className="p-6">
                <div className="text-gruvbox-yellow mb-4">$ ./share_event.sh</div>
                <SocialShareButtons />
              </CardContent>
            </Card>
            <Card className="border-gruvbox-yellow bg-gruvbox-bg">
              <CardContent className="p-6">
                <div className="text-gruvbox-yellow mb-4">$ cat registration_info.txt</div>
                <div className="text-gruvbox-fg mb-4">
                  Secure your spot at the S.O.S. Conference. Early bird registration ends 2025-09-15.
                </div>
                <Button className="w-full bg-gruvbox-yellow hover:bg-gruvbox-orange text-gruvbox-bg font-mono">
                  ./register_now.sh
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        <Separator className="my-12 border-gruvbox-yellow" />

        <div className="max-w-3xl mx-auto">
          <div className="text-gruvbox-yellow mb-6 text-center">$ ./registration_terminal.sh</div>
          <RegistrationForm />
        </div>
      </main>

      <footer className="bg-gruvbox-bg border-t border-gruvbox-yellow text-gruvbox-fg py-12">
        <div className="container px-4">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src="/images/sos-logo.png"
                  alt="Sul Open Systems Logo"
                  width={100}
                  height={100}
                  className="opacity-80"
                />
                <div className="text-gruvbox-yellow">
                  <div>$ whoami</div>
                  <div className="text-gruvbox-fg">sul_open_systems</div>
                </div>
              </div>
              <div className="text-sm text-gruvbox-gray">
                # Sul Open Systems (S.O.S.) is dedicated to promoting
                <br /># open-source software and fostering collaboration
                <br /># within the community.
              </div>
            </div>
            <div>
              <div className="text-gruvbox-yellow mb-4">$ ls quick_links/</div>
              <ul className="space-y-2 text-gruvbox-fg">
                <li>
                  <Link href="#" className="hover:text-gruvbox-yellow">
                    ./code_of_conduct.md
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gruvbox-yellow">
                    ./past_events/
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gruvbox-yellow">
                    ./become_sponsor.sh
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gruvbox-yellow">
                    ./contact_us.txt
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <div className="text-gruvbox-yellow mb-4">$ ./subscribe_newsletter.sh</div>
              <div className="mb-4 text-gruvbox-fg">
                Subscribe to our newsletter for updates on future events and open-source news.
              </div>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="user@domain.com"
                  className="px-3 py-2 bg-gruvbox-bg border border-gruvbox-yellow text-gruvbox-fg flex-1 font-mono focus:outline-none focus:border-gruvbox-orange"
                />
                <Button className="bg-gruvbox-yellow hover:bg-gruvbox-orange text-gruvbox-bg font-mono">exec</Button>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gruvbox-yellow text-center text-sm text-gruvbox-gray">
            <div>$ echo "© 2025 Sul Open Systems. All rights reserved."</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
