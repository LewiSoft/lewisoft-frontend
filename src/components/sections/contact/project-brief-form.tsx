"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, BadgeCheck } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
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

import { PulseDot } from "../pulse-dot";
import { glowButtonClassName } from "../styles";

const scopes = [
  { value: "web-app", label: "Web application / custom platform" },
  { value: "website", label: "High-performance brand website" },
  { value: "ecommerce", label: "E-commerce & booking system" },
  { value: "design", label: "Product UI/UX & design system" },
  { value: "backend", label: "Cloud API & backend infrastructure" },
  { value: "retainer", label: "Technical advisory / retainer" },
] as const;

const budgets = [
  { value: "under-3k", label: "< $3k", note: "Under GHS 40k" },
  { value: "3k-6k", label: "$3k – $6k", note: "GHS 40k – 80k" },
  { value: "6k-12k", label: "$6k – $12k", note: "GHS 80k – 160k" },
  { value: "12k-plus", label: "$12k+", note: "Enterprise / bespoke" },
] as const;

const timelines = [
  { value: "1-2-weeks", label: "Kickoff in 1–2 weeks" },
  { value: "30-days", label: "Within 30 days" },
  { value: "flexible", label: "Flexible" },
] as const;

const briefSchema = z.object({
  name: z.string().trim().min(2, "Please tell us your name."),
  email: z.email("Enter a valid email address."),
  company: z.string().trim().max(120).optional(),
  scope: z.enum(
    scopes.map((option) => option.value),
    {
      error: "Choose the kind of project.",
    },
  ),
  budget: z.enum(budgets.map((option) => option.value)),
  timeline: z.enum(timelines.map((option) => option.value)),
  goals: z
    .string()
    .trim()
    .min(20, "A sentence or two helps us prepare — at least 20 characters.")
    .max(4000),
});

export type ProjectBrief = z.infer<typeof briefSchema>;

const inputClassName =
  "h-12 rounded-lg border-transparent bg-background px-4 dark:bg-ink";

/** Numbered mono label, e.g. "01 // Full name *". */
function StepLabel({
  step,
  children,
  required,
}: {
  step: number;
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <span className="font-mono text-[11px] font-semibold tracking-wider text-muted-foreground uppercase">
      {`${String(step).padStart(2, "0")} // `}
      {children}
      {required && <span className="ml-1 text-primary">*</span>}
    </span>
  );
}

/** Pill-shaped radio options; the native input stays for keyboard support. */
function RadioPills<T extends string>({
  name,
  options,
  value,
  onChange,
  columns,
}: {
  name: string;
  options: readonly { value: T; label: string; note?: string }[];
  value: T;
  onChange: (value: T) => void;
  columns: string;
}) {
  return (
    <div className={cn("grid gap-2", columns)}>
      {options.map((option) => (
        <label
          key={option.value}
          className="relative flex cursor-pointer flex-col rounded-lg bg-background px-4 py-3 ring-1 ring-transparent transition-colors hover:bg-muted has-checked:bg-primary/10 has-checked:ring-primary has-focus-visible:ring-3 has-focus-visible:ring-ring/50 dark:bg-ink"
        >
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={value === option.value}
            onChange={() => onChange(option.value)}
            className="sr-only"
          />
          <span className="font-heading text-sm font-semibold">
            {option.label}
          </span>
          {option.note && (
            <span className="font-mono text-[11px] text-muted-foreground">
              {option.note}
            </span>
          )}
        </label>
      ))}
    </div>
  );
}

export function ProjectBriefForm() {
  const form = useForm<ProjectBrief>({
    resolver: zodResolver(briefSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      budget: "3k-6k",
      timeline: "30-days",
      goals: "",
    },
  });

  async function onSubmit(values: ProjectBrief) {
    // TODO: send `values` to the enquiries endpoint on the LewiSoft API
    // (siteConfig.apiUrl) once it exists.
    void values;
    toast.success("Enquiry received", {
      description:
        "William and Lemuel will review your brief and reply within 4 hours on weekdays.",
    });
    form.reset();
  }

  return (
    <div className="relative overflow-hidden rounded-2xl bg-card p-6 shadow-xl sm:p-8">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-2 border-b pb-4">
        <p className="flex items-center gap-2 font-mono text-[11px] font-semibold tracking-wider text-primary uppercase">
          <PulseDot />
          Project brief
        </p>
        <span className="font-mono text-[11px] text-muted-foreground">
          4-hour reply target
        </span>
      </div>

      <form noValidate onSubmit={form.handleSubmit(onSubmit)}>
        <FieldGroup className="gap-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <Controller
              control={form.control}
              name="name"
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="brief-name">
                    <StepLabel step={1} required>
                      Full name
                    </StepLabel>
                  </FieldLabel>
                  <Input
                    {...field}
                    id="brief-name"
                    autoComplete="name"
                    placeholder="Your name"
                    aria-invalid={fieldState.invalid}
                    className={inputClassName}
                  />
                  <FieldError errors={[fieldState.error]} />
                </Field>
              )}
            />
            <Controller
              control={form.control}
              name="email"
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="brief-email">
                    <StepLabel step={2} required>
                      Work email
                    </StepLabel>
                  </FieldLabel>
                  <Input
                    {...field}
                    id="brief-email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@company.com"
                    aria-invalid={fieldState.invalid}
                    className={inputClassName}
                  />
                  <FieldError errors={[fieldState.error]} />
                </Field>
              )}
            />
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <Controller
              control={form.control}
              name="company"
              render={({ field }) => (
                <Field>
                  <FieldLabel htmlFor="brief-company">
                    <StepLabel step={3}>Company / venture</StepLabel>
                  </FieldLabel>
                  <Input
                    {...field}
                    id="brief-company"
                    autoComplete="organization"
                    placeholder="Optional"
                    className={inputClassName}
                  />
                </Field>
              )}
            />
            <Controller
              control={form.control}
              name="scope"
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="brief-scope">
                    <StepLabel step={4} required>
                      Project scope
                    </StepLabel>
                  </FieldLabel>
                  <Select
                    items={scopes}
                    value={field.value ?? null}
                    onValueChange={(value) => value && field.onChange(value)}
                  >
                    <SelectTrigger
                      id="brief-scope"
                      aria-invalid={fieldState.invalid}
                      className={cn(inputClassName, "w-full")}
                    >
                      <SelectValue placeholder="Select a scope…" />
                    </SelectTrigger>
                    <SelectContent>
                      {scopes.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FieldError errors={[fieldState.error]} />
                </Field>
              )}
            />
          </div>

          <Controller
            control={form.control}
            name="budget"
            render={({ field }) => (
              <FieldSet>
                <FieldLegend variant="label" className="mb-0">
                  <StepLabel step={5}>Approximate budget (USD / GHS)</StepLabel>
                </FieldLegend>
                <RadioPills
                  name={field.name}
                  options={budgets}
                  value={field.value}
                  onChange={field.onChange}
                  columns="grid-cols-2 lg:grid-cols-4"
                />
              </FieldSet>
            )}
          />

          <Controller
            control={form.control}
            name="timeline"
            render={({ field }) => (
              <FieldSet>
                <FieldLegend variant="label" className="mb-0">
                  <StepLabel step={6}>Target timeline</StepLabel>
                </FieldLegend>
                <RadioPills
                  name={field.name}
                  options={timelines}
                  value={field.value}
                  onChange={field.onChange}
                  columns="grid-cols-1 sm:grid-cols-3"
                />
              </FieldSet>
            )}
          />

          <Controller
            control={form.control}
            name="goals"
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="brief-goals">
                  <StepLabel step={7} required>
                    Project overview & goals
                  </StepLabel>
                </FieldLabel>
                <Textarea
                  {...field}
                  id="brief-goals"
                  rows={4}
                  placeholder="What do you want to build? Mention existing problems, key integrations (payments, databases, auth) or sites you admire…"
                  aria-invalid={fieldState.invalid}
                  className={cn(inputClassName, "h-auto min-h-32 py-3")}
                />
                <FieldError errors={[fieldState.error]} />
              </Field>
            )}
          />

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button
              type="submit"
              disabled={form.formState.isSubmitting}
              className={cn(glowButtonClassName, "h-14 w-full px-8 sm:w-auto")}
            >
              Send project enquiry
              <ArrowRight data-icon="inline-end" className="size-5" />
            </Button>
            <p className="flex items-start gap-2 text-sm text-muted-foreground">
              <BadgeCheck className="mt-0.5 size-4 shrink-0 text-primary" />
              No account reps. William & Lemuel read and reply to every brief.
            </p>
          </div>
        </FieldGroup>
      </form>
    </div>
  );
}
