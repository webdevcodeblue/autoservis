'use server';

export async function submitContactForm(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const phone = formData.get('phone') as string;
  const subject = formData.get('subject') as string;
  const message = formData.get('message') as string;

  // Validate required fields
  if (!name || !email || !subject || !message) {
    throw new Error('Missing required fields');
  }

  // Server action now works properly on Vercel
  // In a real application, you would:
  // 1. Send email using a service like Resend, SendGrid, etc.
  // 2. Save to database
  // 3. Send notification to admin

  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // For demo purposes, we'll just log the data
  console.log('Contact form submission:', {
    name,
    email,
    phone,
    subject,
    message,
    timestamp: new Date().toISOString(),
  });

  return { success: true };
}
