"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarDays } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

import { glowButtonClassName } from "./styles";

const projectTypes = [
  { value: "web-app", label: "Web Application / SaaS" },
  { value: "business-site", label: "Business Marketing Website" },
  { value: "ecommerce", label: "E-Commerce / Booking Platform" },
  { value: "rebuild", label: "Full Platform Overhaul" },
] as const;

const timelines = [
  { value: "next-30-days", label: "Timeline: Next 30 Days" },
  { value: "2-3-months", label: "Timeline: 2-3 Months" },
  { value: "flexible", label: "Exploring / Flexible" },
] as const;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^\+?[\d\s()-]{7,}$/;

const enquirySchema = z.object({
  name: z.string().trim().min(2, "Please tell us your name."),
  contact: z
    .string()
    .trim()
    .refine(
      (value) => emailPattern.test(value) || phonePattern.test(value),
      "Enter an email address or a WhatsApp number.",
    ),
  projectType: z.enum(projectTypes.map((option) => option.value)),
  timeline: z.enum(timelines.map((option) => option.value)),
  message: z.string().trim().max(2000).optional(),
});

export type ProjectEnquiry = z.infer<typeof enquirySchema>;

const fieldClassName =
  "h-12 rounded-lg border-transparent bg-background px-4 dark:bg-ink";

export function ProjectEnquiryForm() {
  const form = useForm<ProjectEnquiry>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      name: "",
      contact: "",
      projectType: "web-app",
      timeline: "next-30-days",
      message: "",
    },
  });

  async function onSubmit(values: ProjectEnquiry) {
    // TODO: send `values` to the enquiries endpoint on the LewiSoft API
    // (siteConfig.apiUrl) once it exists.
    void values;
    toast.success("Enquiry received!", {
      description: "William or Lemuel will reply within 4 hours.",
    });
    form.reset();
  }

  return (
    <form
      noValidate
      onSubmit={form.handleSubmit(onSubmit)}
      className="w-full max-w-xl"
    >
      <FieldGroup className="gap-3">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <Controller
            control={form.control}
            name="name"
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="enquiry-name" className="sr-only">
                  Your name
                </FieldLabel>
                <Input
                  {...field}
                  id="enquiry-name"
                  placeholder="Your name"
                  autoComplete="name"
                  aria-invalid={fieldState.invalid}
                  className={fieldClassName}
                />
                <FieldError errors={[fieldState.error]} />
              </Field>
            )}
          />
          <Controller
            control={form.control}
            name="contact"
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="enquiry-contact" className="sr-only">
                  Email or WhatsApp
                </FieldLabel>
                <Input
                  {...field}
                  id="enquiry-contact"
                  placeholder="Email or WhatsApp"
                  autoComplete="email"
                  aria-invalid={fieldState.invalid}
                  className={fieldClassName}
                />
                <FieldError errors={[fieldState.error]} />
              </Field>
            )}
          />
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <Controller
            control={form.control}
            name="projectType"
            render={({ field }) => (
              <Field>
                <FieldLabel htmlFor="enquiry-type" className="sr-only">
                  Project type
                </FieldLabel>
                <Select
                  items={projectTypes}
                  value={field.value}
                  onValueChange={(value) => value && field.onChange(value)}
                >
                  <SelectTrigger
                    id="enquiry-type"
                    className={cn(fieldClassName, "w-full")}
                  >
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {projectTypes.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </Field>
            )}
          />
          <Controller
            control={form.control}
            name="timeline"
            render={({ field }) => (
              <Field>
                <FieldLabel htmlFor="enquiry-timeline" className="sr-only">
                  Timeline
                </FieldLabel>
                <Select
                  items={timelines}
                  value={field.value}
                  onValueChange={(value) => value && field.onChange(value)}
                >
                  <SelectTrigger
                    id="enquiry-timeline"
                    className={cn(fieldClassName, "w-full")}
                  >
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {timelines.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </Field>
            )}
          />
        </div>

        <Controller
          control={form.control}
          name="message"
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="enquiry-message" className="sr-only">
                Project goals
              </FieldLabel>
              <Textarea
                {...field}
                id="enquiry-message"
                rows={3}
                placeholder="Tell William & Lemuel briefly about your goals..."
                aria-invalid={fieldState.invalid}
                className={cn(fieldClassName, "h-auto min-h-24 py-3")}
              />
              <FieldError errors={[fieldState.error]} />
            </Field>
          )}
        />

        <Button
          type="submit"
          disabled={form.formState.isSubmitting}
          className={cn(glowButtonClassName, "h-14 w-full px-8 sm:w-auto")}
        >
          Book a free 30-minute discovery call
          <CalendarDays data-icon="inline-end" className="size-5" />
        </Button>
      </FieldGroup>
    </form>
  );
}
