export const metadata = {
    title: 'Сбор средств',
};

export default function DonatePage() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '80vh', justifyContent: 'center' }}>
            <h1 style={{ marginBottom: 24, fontSize: 32, fontWeight: 700 }}>Сбор средств</h1>
            <iframe
                src="https://donate.stream/widget-goal?uid=92e754abac014186bf3bbbe5df4ad805&amp;token=70K9utuJ1GWH4GVnMZmOsYQyIB1ECytzLLjjzZxH7D"
                id="donate-widget"
                frameBorder="0"
                scrolling="no"
                style={{ height: 30, width: '100%' }}
            />
            <a
                href="https://donate.stream/shbdk"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                    marginTop: 32,
                    padding: '16px 40px',
                    background: '#4f46e5',
                    color: '#fff',
                    borderRadius: 8,
                    fontSize: 20,
                    fontWeight: 600,
                    textDecoration: 'none',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
                    transition: 'background 0.2s',
                    display: 'inline-block',
                }}
            >
                Поддержать
            </a>
        </div>
    );
} 