"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Terminal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { toast } from "@/components/ui/use-toast"

const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  organization: z.string().optional(),
  jobTitle: z.string().optional(),
  ticketType: z.enum(["standard", "student", "sponsor"], {
    required_error: "Please select a ticket type.",
  }),
  dietaryRequirements: z.string().optional(),
  days: z.array(z.string()).refine((value) => value.length > 0, {
    message: "You must select at least one day.",
  }),
  workshops: z.array(z.string()).optional(),
  specialRequirements: z.string().optional(),
  agreeTerms: z.boolean().refine((value) => value === true, {
    message: "You must agree to the terms and conditions.",
  }),
})

export default function RegistrationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [terminalOutput, setTerminalOutput] = useState([
    "Registration Terminal v2.1.0",
    "Initializing user input interface...",
    "Ready for data input.",
    "",
  ])

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      organization: "",
      jobTitle: "",
      ticketType: "standard",
      dietaryRequirements: "",
      days: ["day1", "day2", "day3"],
      workshops: [],
      specialRequirements: "",
      agreeTerms: false,
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    setTerminalOutput((prev) => [
      ...prev,
      "$ ./submit_registration.sh",
      "Processing registration data...",
      "Validating user credentials...",
      "Connecting to registration database...",
      "Encrypting sensitive information...",
    ])

    // Simulate API call
    setTimeout(() => {
      setTerminalOutput((prev) => [
        ...prev,
        "Registration successful!",
        "User ID: " + Math.random().toString(36).substr(2, 9).toUpperCase(),
        "Confirmation email sent to: " + values.email,
        "Welcome to S.O.S. Conference 2025!",
        "",
      ])
      setIsSubmitting(false)
      toast({
        title: "Registration submitted!",
        description: "Thank you for registering. You will receive a confirmation email shortly.",
      })
      form.reset()
    }, 3000)
  }

  return (
    <Card className="border-gruvbox-yellow bg-gruvbox-bg">
      <CardContent className="p-6">
        {/* Terminal Output */}
        <div className="mb-6 p-4 border border-gruvbox-yellow bg-gruvbox-bg font-mono text-sm">
          <div className="flex items-center gap-2 mb-2 text-gruvbox-yellow">
            <Terminal className="h-4 w-4" />
            <span>registration@sos-conference:~$</span>
          </div>
          <div className="text-gruvbox-fg max-h-32 overflow-y-auto">
            {terminalOutput.map((line, index) => (
              <div key={index}>{line}</div>
            ))}
          </div>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 font-mono">
            <div className="text-gruvbox-yellow mb-4">$ ./configure_user_profile.sh</div>

            <div className="grid gap-6 sm:grid-cols-2">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gruvbox-yellow">--first-name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="John"
                        {...field}
                        className="bg-gruvbox-bg border-gruvbox-yellow text-gruvbox-fg focus:border-gruvbox-yellow"
                      />
                    </FormControl>
                    <FormMessage className="text-gruvbox-red" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gruvbox-yellow">--last-name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Doe"
                        {...field}
                        className="bg-gruvbox-bg border-gruvbox-yellow text-gruvbox-fg focus:border-gruvbox-yellow"
                      />
                    </FormControl>
                    <FormMessage className="text-gruvbox-red" />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gruvbox-yellow">--email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="user@domain.com"
                      {...field}
                      className="bg-gruvbox-bg border-gruvbox-yellow text-gruvbox-fg focus:border-gruvbox-yellow"
                    />
                  </FormControl>
                  <FormMessage className="text-gruvbox-red" />
                </FormItem>
              )}
            />

            <div className="grid gap-6 sm:grid-cols-2">
              <FormField
                control={form.control}
                name="organization"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gruvbox-yellow">--organization</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Company or Organization"
                        {...field}
                        className="bg-gruvbox-bg border-gruvbox-yellow text-gruvbox-fg focus:border-gruvbox-yellow"
                      />
                    </FormControl>
                    <FormMessage className="text-gruvbox-red" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="jobTitle"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gruvbox-yellow">--job-title</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Developer, Manager, etc."
                        {...field}
                        className="bg-gruvbox-bg border-gruvbox-yellow text-gruvbox-fg focus:border-gruvbox-yellow"
                      />
                    </FormControl>
                    <FormMessage className="text-gruvbox-red" />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="ticketType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gruvbox-yellow">$ ./select_ticket_type.sh</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-2"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="standard" className="border-gruvbox-yellow text-gruvbox-fg" />
                        </FormControl>
                        <FormLabel className="font-normal text-gruvbox-fg">--type=standard ($199)</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="student" className="border-gruvbox-yellow text-gruvbox-fg" />
                        </FormControl>
                        <FormLabel className="font-normal text-gruvbox-fg">--type=student ($99)</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="sponsor" className="border-gruvbox-yellow text-gruvbox-fg" />
                        </FormControl>
                        <FormLabel className="font-normal text-gruvbox-fg">--type=sponsor ($499)</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage className="text-gruvbox-red" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="days"
              render={() => (
                <FormItem>
                  <div className="mb-4">
                    <FormLabel className="text-gruvbox-yellow">$ ./select_attendance_days.sh</FormLabel>
                    <FormDescription className="text-gruvbox-gray">
                      # Select all days you plan to attend
                    </FormDescription>
                  </div>
                  <div className="grid gap-2">
                    <FormField
                      control={form.control}
                      name="days"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes("day1")}
                              onCheckedChange={(checked) => {
                                return checked
                                  ? field.onChange([...field.value, "day1"])
                                  : field.onChange(field.value?.filter((value) => value !== "day1"))
                              }}
                              className="border-gruvbox-yellow data-[state=checked]:bg-gruvbox-yellow"
                            />
                          </FormControl>
                          <FormLabel className="font-normal text-gruvbox-fg">--day=1 (2025-10-15)</FormLabel>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="days"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes("day2")}
                              onCheckedChange={(checked) => {
                                return checked
                                  ? field.onChange([...field.value, "day2"])
                                  : field.onChange(field.value?.filter((value) => value !== "day2"))
                              }}
                              className="border-gruvbox-yellow data-[state=checked]:bg-gruvbox-yellow"
                            />
                          </FormControl>
                          <FormLabel className="font-normal text-gruvbox-fg">--day=2 (2025-10-16)</FormLabel>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="days"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes("day3")}
                              onCheckedChange={(checked) => {
                                return checked
                                  ? field.onChange([...field.value, "day3"])
                                  : field.onChange(field.value?.filter((value) => value !== "day3"))
                              }}
                              className="border-gruvbox-yellow data-[state=checked]:bg-gruvbox-yellow"
                            />
                          </FormControl>
                          <FormLabel className="font-normal text-gruvbox-fg">--day=3 (2025-10-17)</FormLabel>
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormMessage className="text-gruvbox-red" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="dietaryRequirements"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gruvbox-yellow">--dietary-requirements</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-gruvbox-bg border-gruvbox-yellow text-gruvbox-fg">
                        <SelectValue placeholder="Select if applicable" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-gruvbox-bg border-gruvbox-yellow">
                      <SelectItem value="none" className="text-gruvbox-fg">
                        none
                      </SelectItem>
                      <SelectItem value="vegetarian" className="text-gruvbox-fg">
                        vegetarian
                      </SelectItem>
                      <SelectItem value="vegan" className="text-gruvbox-fg">
                        vegan
                      </SelectItem>
                      <SelectItem value="gluten-free" className="text-gruvbox-fg">
                        gluten-free
                      </SelectItem>
                      <SelectItem value="dairy-free" className="text-gruvbox-fg">
                        dairy-free
                      </SelectItem>
                      <SelectItem value="other" className="text-gruvbox-fg">
                        other
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage className="text-gruvbox-red" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="specialRequirements"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gruvbox-yellow">--special-requirements</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="# Please specify any accessibility requirements or special needs"
                      className="resize-none bg-gruvbox-bg border-gruvbox-yellow text-gruvbox-fg focus:border-gruvbox-yellow"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-gruvbox-red" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="agreeTerms"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className="border-gruvbox-yellow data-[state=checked]:bg-gruvbox-yellow"
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel className="text-gruvbox-yellow">--accept-terms</FormLabel>
                    <FormDescription className="text-gruvbox-gray">
                      # By registering, you agree to our terms of service and privacy policy
                    </FormDescription>
                  </div>
                  <FormMessage className="text-gruvbox-red" />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full bg-gruvbox-yellow hover:bg-gruvbox-orange text-gruvbox-bg font-mono"
              disabled={isSubmitting}
            >
              {isSubmitting ? "$ ./processing..." : "$ ./submit_registration.sh --execute"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
