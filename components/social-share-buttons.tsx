"use client"

import { Facebook, Linkedin, Mail, Share2, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/use-toast"

export default function SocialShareButtons() {
  const eventUrl = "https://sos-conference.org"
  const eventTitle = "Sul Open Systems Conference 2025"

  const shareToTwitter = () => {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(eventTitle)}&url=${encodeURIComponent(eventUrl)}`
    window.open(url, "_blank")
  }

  const shareToFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(eventUrl)}`
    window.open(url, "_blank")
  }

  const shareToLinkedIn = () => {
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(eventUrl)}`
    window.open(url, "_blank")
  }

  const shareByEmail = () => {
    const subject = encodeURIComponent(eventTitle)
    const body = encodeURIComponent(`Check out this open source event: ${eventUrl}`)
    window.location.href = `mailto:?subject=${subject}&body=${body}`
  }

  const copyLink = () => {
    navigator.clipboard.writeText(eventUrl)
    toast({
      title: "Link copied!",
      description: "Event link has been copied to your clipboard.",
    })
  }

  return (
    <div className="space-y-4 font-mono">
      <div className="text-gruvbox-fg text-sm"># Available sharing commands:</div>
      <div className="grid gap-2">
        <Button
          variant="outline"
          onClick={shareToTwitter}
          className="justify-start border-gruvbox-yellow text-gruvbox-fg hover:bg-gruvbox-bg1 font-mono"
        >
          <Twitter className="h-4 w-4 mr-2" />$ ./share --platform=twitter
        </Button>
        <Button
          variant="outline"
          onClick={shareToFacebook}
          className="justify-start border-gruvbox-yellow text-gruvbox-fg hover:bg-gruvbox-bg1 font-mono"
        >
          <Facebook className="h-4 w-4 mr-2" />$ ./share --platform=facebook
        </Button>
        <Button
          variant="outline"
          onClick={shareToLinkedIn}
          className="justify-start border-gruvbox-yellow text-gruvbox-fg hover:bg-gruvbox-bg1 font-mono"
        >
          <Linkedin className="h-4 w-4 mr-2" />$ ./share --platform=linkedin
        </Button>
        <Button
          variant="outline"
          onClick={shareByEmail}
          className="justify-start border-gruvbox-yellow text-gruvbox-fg hover:bg-gruvbox-bg1 font-mono"
        >
          <Mail className="h-4 w-4 mr-2" />$ ./share --method=email
        </Button>
        <Button
          variant="outline"
          onClick={copyLink}
          className="justify-start border-gruvbox-yellow text-gruvbox-fg hover:bg-gruvbox-bg1 font-mono"
        >
          <Share2 className="h-4 w-4 mr-2" />$ ./copy_link.sh
        </Button>
      </div>
    </div>
  )
}
