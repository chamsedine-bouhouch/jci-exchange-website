import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const body = await req.json()
  const { name, lom, email, participants } = body

  try {
    await resend.emails.send({
      from: "noreply@yourdomain.com",
      to: "bouhouchchamseddine@gmail.com",
      subject: "New LOM Registration",
      html: `
        <h2>New Registration</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>LOM:</strong> ${lom}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Participants:</strong> ${participants}</p>
      `,
    })
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ success: false, error })
  }
}
