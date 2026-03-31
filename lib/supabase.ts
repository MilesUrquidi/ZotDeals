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
  created_at: string
}

export async function getResources(tag?: string) {
  let query = supabase
    .from('resources')
    .select('*')
    .eq('status', 'active')
    .order('is_new', { ascending: false })

  if (tag && tag !== 'all') {
    query = query.contains('tags', [tag])
  }

  const { data, error } = await query
  if (error) throw error
  return data as Resource[]
}
