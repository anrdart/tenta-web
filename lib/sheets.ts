export async function syncLeadToSheet(data: {
  name: string;
  email: string;
  phone?: string | null;
  message: string;
  source?: string;
}): Promise<void> {
  const url = process.env.GOOGLE_SHEET_WEBHOOK_URL;
  if (!url) return;
  try {
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        phone: data.phone ?? '',
        message: data.message,
        source: data.source ?? 'website-form',
      }),
    });
  } catch {
    console.error('[sheets] Failed to sync lead to Google Sheet');
  }
}
