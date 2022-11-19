const SUPABASE_URL = 'https://giwptggnnkyngbvntavn.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdpd3B0Z2dubmt5bmdidm50YXZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxMDg1MDUsImV4cCI6MTk4MzY4NDUwNX0.IpqZ1fOasMiRTSsQIkHj5BOCwSYQSi4zxsS9Hhx76x0';
const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getCharacters() {
    const response = await client.from('Anime').select();
    return response;
}

export async function getCharacter(id) {
    const response = await client.from('Anime').select().match({ id: id }).single();
    return checkError(response);
}

function checkError({ data, error }) {
    return error ? console.error(error) : data;
}
