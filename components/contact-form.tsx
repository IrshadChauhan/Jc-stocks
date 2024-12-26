// 'use client'

// import { useState } from 'react'
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Textarea } from "@/components/ui/textarea"
// import { submitContactForm } from '@/app/actions/contact'
// import { useActionState } from 'react'
// import { toast } from 'sonner'

// export function ContactForm() {
//   const [state, formAction] = useActionState(submitContactForm, null)
//   const [isPending, setIsPending] = useState(false)

//   const handleSubmit = async (formData: FormData) => {
//     try {
//       setIsPending(true)
//       const result = await formAction(formData)
//       if (result?.success) {
//         toast.success(result.message)
//         // Reset form
//         const form = document.querySelector('form') as HTMLFormElement
//         form?.reset()
//       } else {
//         toast.error(result?.message || 'Something went wrong')
//       }
//     } catch (error) {
//       toast.error('Failed to send message')
//     } finally {
//       setIsPending(false)
//     }
//   }

//   return (
//     <form 
//       action={handleSubmit}
//       className="space-y-4"
//     >
//       <div className="grid gap-2">
//         <Label htmlFor="name">Name</Label>
//         <Input
//           id="name"
//           name="name"
//           placeholder="Your name"
//           required
//           className="bg-white"
//         />
//       </div>
//       <div className="grid gap-2">
//         <Label htmlFor="email">Email</Label>
//         <Input
//           id="email"
//           name="email"
//           type="email"
//           placeholder="Your email"
//           required
//           className="bg-white"
//         />
//       </div>
//       <div className="grid gap-2">
//         <Label htmlFor="message">Message</Label>
//         <Textarea
//           id="message"
//           name="message"
//           placeholder="Your message"
//           required
//           className="min-h-[100px] bg-white"
//         />
//       </div>
//       <Button type="submit" className="w-full" disabled={isPending}>
//         {isPending ? 'Sending...' : 'Send Message'}
//       </Button>
//     </form>
//   )
// }

'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { submitContactForm } from '@/app/actions/contact'
import { toast } from 'sonner'

export function ContactForm() {
  const [isPending, setIsPending] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault() // Prevent default form submission behavior

    try {
      setIsPending(true)

      // Create FormData from the form
      const form = e.currentTarget
      const formData = new FormData(form)

      const result = await submitContactForm(formData)

      if (result?.success) {
        toast.success(result.message)
        // Reset form
        form.reset()
      } else {
        toast.error(result?.message || 'Something went wrong')
      }
    } 
    // catch (error) {
    //   toast.error('Failed to send message')
    // } 
    finally {
      setIsPending(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          name="name"
          placeholder="Your name"
          required
          className="bg-white"
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="Your email"
          required
          className="bg-white"
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Your message"
          required
          className="min-h-[100px] bg-white"
        />
      </div>
      <Button type="submit" className="w-full" disabled={isPending}>
        {isPending ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  )
}
