import { useState, type FormEvent, type ReactNode } from 'react';

const CONTACT_EMAIL = 'hello@expert-o.com';

interface Field {
  id: string;
  label: string;
  name: string;
  type?: 'text' | 'email' | 'textarea' | 'select';
  required?: boolean;
  placeholder?: string;
  autoComplete?: string;
  rows?: number;
  options?: { value: string; label: string }[];
}

interface MailtoFormProps {
  id: string;
  title: string;
  description: ReactNode;
  aside?: ReactNode;
  fields: Field[];
  subject: (values: Record<string, string>) => string;
  body: (values: Record<string, string>) => string;
  successTitle: string;
  successBody: ReactNode;
  tone?: 'white' | 'stone';
}

function MailtoForm({
  id,
  title,
  description,
  aside,
  fields,
  subject,
  body,
  successTitle,
  successBody,
  tone = 'white',
}: MailtoFormProps) {
  const [status, setStatus] = useState<'idle' | 'sent'>('idle');
  const [values, setValues] = useState<Record<string, string>>(() =>
    Object.fromEntries(fields.map((field) => [field.name, '']))
  );

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject(values))}&body=${encodeURIComponent(body(values))}`;
    window.location.href = mailto;
    // Defer status update so tests / React act() stay clean
    queueMicrotask(() => setStatus('sent'));
  };

  const set = (name: string, value: string) => setValues((prev) => ({ ...prev, [name]: value }));
  const successTone = tone === 'white' ? 'bg-stone-50' : 'bg-white';

  return (
    <section id={id} className={`section border-b border-stone-200 ${tone === 'white' ? 'bg-white' : 'bg-stone-50'}`}>
      <div className="section-container max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display text-3xl md:text-4xl text-stone-950 tracking-tight">{title}</h2>
            <div className="mt-4 text-stone-600 leading-relaxed">{description}</div>
            {aside}
          </div>
          {status === 'sent' ? (
            <div className={`border border-stone-200 rounded-md p-6 ${successTone}`}>
              <h3 className="font-display text-xl text-stone-950">{successTitle}</h3>
              <div className="mt-2 text-sm text-stone-600 leading-relaxed">{successBody}</div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {fields.map((field) => (
                <div key={field.name}>
                  <label htmlFor={field.id} className="block text-sm font-medium text-stone-800 mb-1">
                    {field.label}
                  </label>
                  {field.type === 'textarea' ? (
                    <textarea
                      id={field.id}
                      required={field.required}
                      rows={field.rows ?? 5}
                      className="input resize-y min-h-[8rem]"
                      value={values[field.name]}
                      onChange={(e) => set(field.name, e.target.value)}
                      placeholder={field.placeholder}
                    />
                  ) : field.type === 'select' ? (
                    <select
                      id={field.id}
                      className="input"
                      value={values[field.name]}
                      onChange={(e) => set(field.name, e.target.value)}
                    >
                      {(field.options ?? []).map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      id={field.id}
                      type={field.type ?? 'text'}
                      required={field.required}
                      className="input"
                      value={values[field.name]}
                      onChange={(e) => set(field.name, e.target.value)}
                      autoComplete={field.autoComplete}
                      placeholder={field.placeholder}
                    />
                  )}
                </div>
              ))}
              <button type="submit" className="btn-primary px-5 py-2.5 text-sm">
                Continue in email
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export const ClientForm = () => (
  <MailtoForm
    id="start"
    title="Brief a project"
    description="Share enough context for us to decide whether we can help. Budget ranges are optional but useful for scoping honesty."
    fields={[
      { id: 'client-name', name: 'name', label: 'Name', required: true },
      { id: 'client-email', name: 'email', label: 'Email', type: 'email', required: true },
      { id: 'client-org', name: 'org', label: 'Organization' },
      {
        id: 'client-budget',
        name: 'budget',
        label: 'Budget range (optional)',
        type: 'select',
        options: [
          { value: '', label: 'Prefer not to say' },
          { value: 'Under ₹1L', label: 'Under ₹1,00,000' },
          { value: '₹1L–₹5L', label: '₹1,00,000 – ₹5,00,000' },
          { value: '₹5L+', label: '₹5,00,000+' },
          { value: 'Ongoing retainer', label: 'Ongoing retainer' },
        ],
      },
      { id: 'client-brief', name: 'brief', label: 'Project brief', type: 'textarea', required: true },
    ]}
    subject={(v) => `Project inquiry — ${v.org || v.name}`}
    body={(v) => `Name: ${v.name}\nEmail: ${v.email}\nOrganization: ${v.org}\nBudget range: ${v.budget}\n\n${v.brief}`}
    successTitle="Continue from your inbox"
    successBody="Your mail client should open with a draft. No server-side lead capture is connected yet."
  />
);

export const JoinForm = () => (
  <MailtoForm
    id="join"
    title="Join the collective"
    description="We look for people who can own outcomes across disciplines, write clearly, and ship without waiting for perfect instructions. If that sounds like you, introduce yourself."
    tone="stone"
    fields={[
      { id: 'join-name', name: 'name', label: 'Name', required: true },
      { id: 'join-email', name: 'email', label: 'Email', type: 'email', required: true },
      {
        id: 'join-focus',
        name: 'focus',
        label: 'What do you do best?',
        required: true,
        placeholder: 'e.g. product engineering, design systems, ML ops',
      },
      { id: 'join-note', name: 'note', label: 'A project you are proud of', type: 'textarea', required: true, rows: 4 },
    ]}
    subject={(v) => `Join Expert-O — ${v.name}`}
    body={(v) => `Name: ${v.name}\nEmail: ${v.email}\nFocus: ${v.focus}\n\n${v.note}`}
    successTitle="Draft ready in your mail client"
    successBody="Send when you are ready. There is no automated intake inbox behind this form yet."
  />
);

export const Contact = () => (
  <MailtoForm
    id="contact"
    title="Start a conversation"
    description="Tell us what you are building, what is stuck, and what “good” looks like in the next 90 days. We reply when we can be useful—and we will decline politely when we cannot."
    aside={
      <p className="mt-6 text-sm text-stone-500">
        Prefer email directly:{' '}
        <a className="text-stone-900 underline-offset-2 hover:underline" href={`mailto:${CONTACT_EMAIL}`}>
          {CONTACT_EMAIL}
        </a>
      </p>
    }
    fields={[
      { id: 'contact-name', name: 'name', label: 'Name', required: true, autoComplete: 'name' },
      { id: 'contact-email', name: 'email', label: 'Email', type: 'email', required: true, autoComplete: 'email' },
      {
        id: 'contact-message',
        name: 'message',
        label: 'What are you trying to get done?',
        type: 'textarea',
        required: true,
      },
    ]}
    subject={(v) => `Expert-O inquiry from ${v.name || 'website'}`}
    body={(v) => `Name: ${v.name}\nEmail: ${v.email}\n\n${v.message}`}
    successTitle="Your mail client should open next"
    successBody={
      <>
        We do not pretend a backend received this yet. If nothing opened, email{' '}
        <a href={`mailto:${CONTACT_EMAIL}`} className="underline">
          {CONTACT_EMAIL}
        </a>{' '}
        directly.
      </>
    }
  />
);
