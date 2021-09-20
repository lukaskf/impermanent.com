import { createClient } from '@supabase/supabase-js'
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzMjE2NDI0OSwiZXhwIjoxOTQ3NzQwMjQ5fQ.u7cvxlwaf8AGgWG6Mt4K0mLgOKfsHD6mROhd2FSPvpk'
export default ({ app }, inject) => {
  const supabaseUrl = 'https://fgbcnqbwjpppijyajqcy.supabase.co'
  const supabaseKey = SUPABASE_KEY
  const supabase = createClient(supabaseUrl, supabaseKey)

  inject('supabase', supabase)
}
