import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Resource = {
  id: string
  name: string
  logo_url: string | null
  description: string
  value: string
  tags: string[]
  eligibility: 'uci-only' | 'edu-email' | 'any'
  url: string
  source: string
  status: 'active' | 'expired' | 'unverified'
  is_new: boolean
  sort_order: number
  created_at: string
  retail_value: string | null
}

export async function incrementClickCount(id: string) {
  await supabase.rpc('increment_click_count', { resource_id: id })
}

export async function addSubscriber(email: string) {
  const { error } = await supabase.from('subscribers').insert({ email })
  if (error && error.code !== '23505') throw error // ignore duplicate emails
}

export async function getResources(tag?: string) {
  let query = supabase
    .from('resources')
    .select('*')
    .eq('status', 'active')
    .order('sort_order', { ascending: true })

  if (tag && tag !== 'all') {
    query = query.contains('tags', [tag])
  }

  const { data, error } = await query
  if (error) throw error
  return data as Resource[]
}
