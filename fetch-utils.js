/* eslint-disable no-unused-vars */
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indra3ViZGVpanZybnRkbXVucWVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDc1NTM1MTcsImV4cCI6MTk2MzEyOTUxN30.qE-NCGctQQqftyEJnJ49hNdOGf4jDNo61YYMlpDAr2g';
const SUPABASE_URL = 'https://wkkubdeijvrntdmunqer.supabase.co';

const client = supabase.createClient(SUPABASE_URL, process.env.SUPABASE_KEY);

export async function getGames() {
    const response = await client
        .from('games')
        .select('*');

    return response.body;
}