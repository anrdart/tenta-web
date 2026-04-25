import { prisma } from '@/lib/prisma';
import { auth } from '@/lib/auth';
import { revalidatePath } from 'next/cache';

type AuthUser = {
  id: number;
  role: 'ADMIN' | 'EDITOR';
};

async function getAuthUser(): Promise<AuthUser> {
  const session: any = await auth();
  if (!session?.user) throw new Error('Unauthorized');
  const user: any = session.user;
  return { id: user.id, role: user.role };
}

function requireRole(user: AuthUser, required: 'ADMIN' | 'EDITOR') {
  if (required === 'ADMIN' && user.role !== 'ADMIN') throw new Error('Forbidden');
  // EDITOR allows ADMIN too
  if (required === 'EDITOR' && !['ADMIN', 'EDITOR'].includes(user.role)) throw new Error('Forbidden');
}

// ===== SERVICES =====
export async function createService(data: { icon: string; title: string; tag: string; description: string; price: string; color: string; orderIndex: number; }) {
  const user = await getAuthUser();
  requireRole(user, 'EDITOR');
  const svc = await prisma.service.create({ data });
  revalidatePath('/admin/services');
  return { success: true, data: svc };
}

export async function updateService(id: number, data: Partial<{ icon: string; title: string; tag: string; description: string; price: string; color: string; orderIndex: number; isActive: boolean }>) {
  const user = await getAuthUser();
  requireRole(user, 'EDITOR');
  const existing = await prisma.service.findUnique({ where: { id } });
  if (!existing) throw new Error('NotFound');
  const updated = await prisma.service.update({ where: { id }, data: data as any });
  revalidatePath('/admin/services');
  return { success: true, data: updated };
}

export async function deleteService(id: number) {
  const user = await getAuthUser();
  requireRole(user, 'ADMIN');
  const existing = await prisma.service.findUnique({ where: { id } });
  if (!existing) throw new Error('NotFound');
  await prisma.service.delete({ where: { id } });
  revalidatePath('/admin/services');
  return { success: true };
}

export async function toggleServiceActive(id: number) {
  const user = await getAuthUser();
  requireRole(user, 'EDITOR');
  const existing = await prisma.service.findUnique({ where: { id } });
  if (!existing) throw new Error('NotFound');
  const updated = await prisma.service.update({ where: { id }, data: { isActive: !existing.isActive } as any });
  revalidatePath('/admin/services');
  return { success: true, data: updated };
}

// ===== STATS =====
export async function createStat(data: { number: string; label: string; subtitle: string; orderIndex: number }) {
  const user = await getAuthUser();
  requireRole(user, 'EDITOR');
  const stat = await prisma.stat.create({ data });
  revalidatePath('/admin/stats');
  return { success: true, data: stat };
}

export async function updateStat(id: number, data: Partial<{ number: string; label: string; subtitle: string; orderIndex: number; isActive: boolean }>) {
  const user = await getAuthUser();
  requireRole(user, 'EDITOR');
  const existing = await prisma.stat.findUnique({ where: { id } });
  if (!existing) throw new Error('NotFound');
  const updated = await prisma.stat.update({ where: { id }, data: data as any });
  revalidatePath('/admin/stats');
  return { success: true, data: updated };
}

export async function deleteStat(id: number) {
  const user = await getAuthUser();
  requireRole(user, 'ADMIN');
  const existing = await prisma.stat.findUnique({ where: { id } });
  if (!existing) throw new Error('NotFound');
  await prisma.stat.delete({ where: { id } });
  revalidatePath('/admin/stats');
  return { success: true };
}

// ===== PROCESS STEPS =====
export async function createProcessStep(data: { stepNumber: string; title: string; description: string; orderIndex: number }) {
  const user = await getAuthUser();
  requireRole(user, 'EDITOR');
  const step = await prisma.processStep.create({ data });
  revalidatePath('/admin/process-steps');
  return { success: true, data: step };
}

export async function updateProcessStep(id: number, data: Partial<{ stepNumber: string; title: string; description: string; orderIndex: number; isActive: boolean }>) {
  const user = await getAuthUser();
  requireRole(user, 'EDITOR');
  const existing = await prisma.processStep.findUnique({ where: { id } });
  if (!existing) throw new Error('NotFound');
  const updated = await prisma.processStep.update({ where: { id }, data: data as any });
  revalidatePath('/admin/process-steps');
  return { success: true, data: updated };
}

export async function deleteProcessStep(id: number) {
  const user = await getAuthUser();
  requireRole(user, 'ADMIN');
  const existing = await prisma.processStep.findUnique({ where: { id } });
  if (!existing) throw new Error('NotFound');
  await prisma.processStep.delete({ where: { id } });
  revalidatePath('/admin/process-steps');
  return { success: true };
}

// ===== CASE STUDIES =====
export async function createCaseStudy(data: { client: string; industry: string; metric: string; metricLabel: string; period: string; color: string; orderIndex: number }) {
  const user = await getAuthUser();
  requireRole(user, 'EDITOR');
  const caseStudy = await prisma.caseStudy.create({ data });
  revalidatePath('/admin/case-studies');
  return { success: true, data: caseStudy };
}

export async function updateCaseStudy(id: number, data: Partial<{ client: string; industry: string; metric: string; metricLabel: string; period: string; color: string; orderIndex: number; isActive: boolean }>) {
  const user = await getAuthUser();
  requireRole(user, 'EDITOR');
  const existing = await prisma.caseStudy.findUnique({ where: { id } });
  if (!existing) throw new Error('NotFound');
  const updated = await prisma.caseStudy.update({ where: { id }, data: data as any });
  revalidatePath('/admin/case-studies');
  return { success: true, data: updated };
}

export async function deleteCaseStudy(id: number) {
  const user = await getAuthUser();
  requireRole(user, 'ADMIN');
  const existing = await prisma.caseStudy.findUnique({ where: { id } });
  if (!existing) throw new Error('NotFound');
  await prisma.caseStudy.delete({ where: { id } });
  revalidatePath('/admin/case-studies');
  return { success: true };
}

// ===== INDUSTRIES =====
export async function createIndustry(data: { emoji: string; name: string; orderIndex: number }) {
  const user = await getAuthUser();
  requireRole(user, 'EDITOR');
  const ind = await prisma.industry.create({ data });
  revalidatePath('/admin/industries');
  return { success: true, data: ind };
}

export async function updateIndustry(id: number, data: Partial<{ emoji: string; name: string; orderIndex: number; isActive: boolean }>) {
  const user = await getAuthUser();
  requireRole(user, 'EDITOR');
  const existing = await prisma.industry.findUnique({ where: { id } });
  if (!existing) throw new Error('NotFound');
  const updated = await prisma.industry.update({ where: { id }, data: data as any });
  revalidatePath('/admin/industries');
  return { success: true, data: updated };
}

export async function deleteIndustry(id: number) {
  const user = await getAuthUser();
  requireRole(user, 'ADMIN');
  const existing = await prisma.industry.findUnique({ where: { id } });
  if (!existing) throw new Error('NotFound');
  await prisma.industry.delete({ where: { id } });
  revalidatePath('/admin/industries');
  return { success: true };
}

// ===== PRICING =====
export async function createPricingTier(data: { name: string; price: string; tag: string | null; features: string[]; cta: string; orderIndex: number }) {
  const user = await getAuthUser();
  requireRole(user, 'EDITOR');
  const record = await prisma.pricingTier.create({ data: { ...data, features: JSON.stringify(data.features) } as any });
  revalidatePath('/admin/pricing');
  return { success: true, data: record };
}

export async function updatePricingTier(id: number, data: Partial<{ name: string; price: string; tag: string | null; features: string[]; cta: string; orderIndex: number; isActive: boolean }>) {
  const user = await getAuthUser();
  requireRole(user, 'EDITOR');
  const existing = await prisma.pricingTier.findUnique({ where: { id } });
  if (!existing) throw new Error('NotFound');
  const toUpdate = { ...data, features: data.features ? JSON.stringify(data.features) : undefined } as any;
  const updated = await prisma.pricingTier.update({ where: { id }, data: toUpdate });
  revalidatePath('/admin/pricing');
  return { success: true, data: updated };
}

export async function deletePricingTier(id: number) {
  const user = await getAuthUser();
  requireRole(user, 'ADMIN');
  const existing = await prisma.pricingTier.findUnique({ where: { id } });
  if (!existing) throw new Error('NotFound');
  await prisma.pricingTier.delete({ where: { id } });
  revalidatePath('/admin/pricing');
  return { success: true };
}

// ===== CLIENT LOGOS =====
export async function createClientLogo(data: { name: string; orderIndex: number }) {
  const user = await getAuthUser();
  requireRole(user, 'EDITOR');
  const logo = await prisma.clientLogo.create({ data });
  revalidatePath('/admin/client-logos');
  return { success: true, data: logo };
}

export async function updateClientLogo(id: number, data: Partial<{ name: string; orderIndex: number; isActive: boolean }>) {
  const user = await getAuthUser();
  requireRole(user, 'EDITOR');
  const existing = await prisma.clientLogo.findUnique({ where: { id } });
  if (!existing) throw new Error('NotFound');
  const updated = await prisma.clientLogo.update({ where: { id }, data: data as any });
  revalidatePath('/admin/client-logos');
  return { success: true, data: updated };
}

export async function deleteClientLogo(id: number) {
  const user = await getAuthUser();
  requireRole(user, 'ADMIN');
  const existing = await prisma.clientLogo.findUnique({ where: { id } });
  if (!existing) throw new Error('NotFound');
  await prisma.clientLogo.delete({ where: { id } });
  revalidatePath('/admin/client-logos');
  return { success: true };
}

// ===== TESTIMONIALS =====
export async function createTestimonial(data: { name: string; role: string; text: string; tint: string; orderIndex: number }) {
  const user = await getAuthUser();
  requireRole(user, 'EDITOR');
  const t = await prisma.testimonial.create({ data });
  revalidatePath('/admin/testimonials');
  return { success: true, data: t };
}

export async function updateTestimonial(id: number, data: Partial<{ name: string; role: string; text: string; tint: string; orderIndex: number }>) {
  const user = await getAuthUser();
  requireRole(user, 'EDITOR');
  const existing = await prisma.testimonial.findUnique({ where: { id } });
  if (!existing) throw new Error('NotFound');
  const updated = await prisma.testimonial.update({ where: { id }, data: data as any });
  revalidatePath('/admin/testimonials');
  return { success: true, data: updated };
}

export async function deleteTestimonial(id: number) {
  const user = await getAuthUser();
  requireRole(user, 'ADMIN');
  const existing = await prisma.testimonial.findUnique({ where: { id } });
  if (!existing) throw new Error('NotFound');
  await prisma.testimonial.delete({ where: { id } });
  revalidatePath('/admin/testimonials');
  return { success: true };
}

// ===== FAQS =====
export async function createFaq(data: { question: string; answer: string; orderIndex: number }) {
  const user = await getAuthUser();
  requireRole(user, 'EDITOR');
  const faq = await prisma.faq.create({ data });
  revalidatePath('/admin/faqs');
  return { success: true, data: faq };
}

export async function updateFaq(id: number, data: Partial<{ question: string; answer: string; orderIndex: number; }>) {
  const user = await getAuthUser();
  requireRole(user, 'EDITOR');
  const existing = await prisma.faq.findUnique({ where: { id } });
  if (!existing) throw new Error('NotFound');
  const updated = await prisma.faq.update({ where: { id }, data: data as any });
  revalidatePath('/admin/faqs');
  return { success: true, data: updated };
}

export async function deleteFaq(id: number) {
  const user = await getAuthUser();
  requireRole(user, 'ADMIN');
  const existing = await prisma.faq.findUnique({ where: { id } });
  if (!existing) throw new Error('NotFound');
  await prisma.faq.delete({ where: { id } });
  revalidatePath('/admin/faqs');
  return { success: true };
}

// ===== CONTACTS =====
export async function updateContactStatus(id: number, status: 'NEW' | 'READ' | 'REPLIED') {
  const user = await getAuthUser();
  requireRole(user, 'EDITOR');
  const existing = await prisma.contactSubmission.findUnique({ where: { id } });
  if (!existing) throw new Error('NotFound');
  const updated = await prisma.contactSubmission.update({ where: { id }, data: { status } as any });
  revalidatePath('/admin/contacts');
  return { success: true, data: updated };
}

export async function deleteContact(id: number) {
  const user = await getAuthUser();
  requireRole(user, 'ADMIN');
  const existing = await prisma.contactSubmission.findUnique({ where: { id } });
  if (!existing) throw new Error('NotFound');
  await prisma.contactSubmission.delete({ where: { id } });
  revalidatePath('/admin/contacts');
  return { success: true };
}

// ===== SUBSCRIBERS =====
export async function toggleSubscriberActive(id: number) {
  const user = await getAuthUser();
  requireRole(user, 'EDITOR');
  const existing = await prisma.newsletterSubscriber.findUnique({ where: { id } });
  if (!existing) throw new Error('NotFound');
  const updated = await prisma.newsletterSubscriber.update({ where: { id }, data: { isActive: !existing.isActive } as any });
  revalidatePath('/admin/subscribers');
  return { success: true, data: updated };
}

export async function deleteSubscriber(id: number) {
  const user = await getAuthUser();
  requireRole(user, 'ADMIN');
  const existing = await prisma.newsletterSubscriber.findUnique({ where: { id } });
  if (!existing) throw new Error('NotFound');
  await prisma.newsletterSubscriber.delete({ where: { id } });
  revalidatePath('/admin/subscribers');
  return { success: true };
}

export async function exportSubscribers() {
  const user = await getAuthUser();
  requireRole(user, 'ADMIN');
  const subs = await prisma.newsletterSubscriber.findMany();
  const csvHeader = 'id,email,isActive,subscribedAt\\n';
  const rows = subs.map(s => `${s.id},"${s.email}",${s.isActive},${new Date(s.subscribedAt).toISOString()}`).join('\\n');
  const csv = csvHeader + rows;
  return { success: true, csv };
}

// ===== SITE SETTINGS =====
export async function updateSetting(key: string, value: string) {
  const user = await getAuthUser();
  requireRole(user, 'ADMIN');
  const setting = await prisma.siteSetting.upsert({ where: { key }, update: { value } as any, create: { key, value } as any });
  return { success: true, data: setting };
}

// ===== USERS =====
export async function createUser(data: { name: string; email: string; password: string; role: 'ADMIN' | 'EDITOR' }) {
  const user = await getAuthUser();
  requireRole(user, 'ADMIN');
  const created = await prisma.user.create({ data });
  return { success: true, data: created };
}

export async function deleteUser(id: number) {
  const user = await getAuthUser();
  requireRole(user, 'ADMIN');
  if (id === user.id) throw new Error('Cannot delete yourself');
  const existing = await prisma.user.findUnique({ where: { id } });
  if (!existing) throw new Error('NotFound');
  await prisma.user.delete({ where: { id } });
  return { success: true };
}

export type Actions = typeof createService | typeof updateService | typeof deleteService;
