import { Resend } from 'resend';
import { WelcomeTemplate } from '@/components/email-templates/WelcomeTemplate'; // adjust path to your component

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const { data, error } = await resend.emails.send({
      from: 'M Uzair <onboarding@resend.dev>', // must be a verified domain; use default for testing
      to: ['abdulbasit@gmail.com'],
      subject: '...',
      react: <WelcomeTemplate name="mosh" />, // JSX element, note the comma and correct prop syntax
    });

    if (error) {
      return new Response(JSON.stringify({ error }), { status: 500 });
    }

    return new Response(JSON.stringify({ data }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
}