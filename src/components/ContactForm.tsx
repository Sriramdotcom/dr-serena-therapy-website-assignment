'use client'
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

const initialState = {
  name: "",
  phone: "",
  email: "",
  message: "",
  preferredTime: "",
  agree: false,
};

type FormState = typeof initialState;

type FormErrors = Partial<Record<keyof FormState, string>>;

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function validate() {
    const errs: FormErrors = {};
    if (!form.name) errs.name = "Name is required.";
    if (!form.phone) errs.phone = "Phone is required.";
    if (!form.email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) errs.email = "Valid email is required.";
    if (!form.message) errs.message = "Please tell us what brings you here.";
    if (!form.preferredTime) errs.preferredTime = "Preferred time is required.";
    if (!form.agree) errs.agree = "You must agree to be contacted.";
    return errs;
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value, type } = e.target;
    if (type === "checkbox" && e.target instanceof HTMLInputElement) {
      setForm(f => ({ ...f, [name]: (e.target as HTMLInputElement).checked }));
    } else {
      setForm(f => ({ ...f, [name]: value }));
    }
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
    }
  }

  return (
    <section className="bg-[#f7fafd] py-20 px-4">
      <div className="max-w-lg mx-auto bg-white rounded-xl shadow-lg p-8">
        <h2 className="font-heading text-2xl mb-6 text-center text-[#46607c]">Get In Touch</h2>
        {submitted ? (
          <div className="text-green-700 text-center font-medium">Thank you! Your message has been received.</div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <Input name="name" placeholder="Name" value={form.name} onChange={handleChange} />
              {errors.name && <div className="text-red-600 text-sm mt-1">{errors.name}</div>}
            </div>
            <div>
              <Input name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} />
              {errors.phone && <div className="text-red-600 text-sm mt-1">{errors.phone}</div>}
            </div>
            <div>
              <Input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
              {errors.email && <div className="text-red-600 text-sm mt-1">{errors.email}</div>}
            </div>
            <div>
              <Textarea name="message" placeholder="What brings you here?" value={form.message} onChange={handleChange} />
              {errors.message && <div className="text-red-600 text-sm mt-1">{errors.message}</div>}
            </div>
            <div>
              <Input name="preferredTime" placeholder="Preferred time to reach you" value={form.preferredTime} onChange={handleChange} />
              {errors.preferredTime && <div className="text-red-600 text-sm mt-1">{errors.preferredTime}</div>}
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="agree" name="agree" checked={form.agree} onCheckedChange={v => setForm(f => ({ ...f, agree: !!v }))} />
              <label htmlFor="agree" className="text-sm">I agree to be contacted</label>
            </div>
            {errors.agree && <div className="text-red-600 text-sm mt-1">{errors.agree}</div>}
            <button type="submit" className="w-full bg-[#46607c] hover:bg-[#3a4e63] text-white font-semibold py-3 rounded-lg transition-colors">Submit</button>
          </form>
        )}
      </div>
    </section>
  );
}
