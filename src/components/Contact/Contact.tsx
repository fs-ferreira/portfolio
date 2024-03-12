import { useForm } from "react-hook-form";
import PageTitle from "../PageTitle";
import emailjs from '@emailjs/browser';
import { useState } from "react";
import { Loader } from "lucide-react";
import { toast } from "sonner";

type ContactSchema = {
  name: string
  email: string
  message: string
}

export default function Contact() {

  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactSchema>()
  const [loading, setLoading] = useState(false);

  function handleClickSubmit(data: ContactSchema) {
    const templateParams = {
      from_name: data.name,
      message: data.message,
      email: data.email
    }
    setLoading(true)
    emailjs.send('service_hr046pb', 'template_0oklxvm', templateParams, 'oOVxBX97n9MipPzec').then(() => {
      reset();
      toast.success('Message sent! Thanks for the contact.')
    },
      () => {
        toast.error('Something gone wrong! Please try later.')
      }
    ).finally(() => setLoading(false))
  }

  return (
    <div className="bg-violet-50 rounded-md text-zinc-900 p-5 md:p-10 shadow-lg shadow-zinc-900/50 space-y-10">
      <PageTitle value="Contact me" />
      <div>
        <form onSubmit={handleSubmit(handleClickSubmit)} className="flex flex-col gap-3 justify-center items-center">
          <div className="flex flex-col gap-2 w-full sm:w-4/5">
            <label htmlFor="name" className="text-sm text-zinc-500">Name</label>
            <input
              {...register("name", { required: true },)}
              placeholder="Your name"
              className="border-b-2 focus:border-violet-400 p-3 outline-none"
            />
            {errors.name && <span className="text-red-500 text-sm">This field is required.</span>}
          </div>

          <div className="flex flex-col gap-2 w-full sm:w-4/5">
            <label htmlFor="email" className="text-sm text-zinc-500">Email</label>
            <input
              {...register("email", { required: true },)}
              placeholder="Your email"
              className="border-b-2 focus:border-violet-400 p-3 outline-none"
            />
            {errors.email && <span className="text-red-500 text-sm">This field is required.</span>}
          </div>

          <div className="flex flex-col gap-2 w-full sm:w-4/5">
            <label htmlFor="message" className="text-sm text-zinc-500">Message</label>
            <textarea
              {...register("message", { required: true },)}
              placeholder="Your message"
              rows={5}
              className="border-2 focus:border-violet-400 p-3 outline-none"
            />
            {errors.message && <span className="text-red-500 text-sm">This field is required.</span>}
          </div>
          <button type="submit"
            className="mt-5 text-center border-2 border-violet-400 text-violet-800/80 rounded p-3 font-medium sm:w-1/5
            disabled:border-zinc-300 hover:bg-violet-400 transition-all hover:text-violet-100"
            disabled={loading}
          >
            {loading
              ? <span className="flex gap-2 items-center justify-center"><Loader className="animate-spin" /></span>
              : 'Send'}
          </button>
        </form>
      </div>
    </div>
  )
}