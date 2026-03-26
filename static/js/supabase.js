// Supabase Bilgilerin
const SUPABASE_URL = 'SENİN_PROJECT_URL_BURAYA';
const SUPABASE_KEY = 'SENİN_ANON_KEY_BURAYA';

// Yazı her açıldığında sayacı artıran fonksiyon
async function updateViews(slug) {
    await fetch(`${SUPABASE_URL}/rest/v1/rpc/increment_view`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'apikey': SUPABASE_KEY,
            'Authorization': `Bearer ${SUPABASE_KEY}`
        },
        body: JSON.stringify({ page_slug: slug })
    });
}

// Mevcut görüntülenme sayısını çeken fonksiyon
async function getViews(slug) {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/views?slug=eq.${slug}&select=count`, {
        headers: {
            'apikey': SUPABASE_KEY,
            'Authorization': `Bearer ${SUPABASE_KEY}`
        }
    });
    const data = await res.json();
    return data[0]?.count || 0;
}