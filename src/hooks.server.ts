export function handle({ event, resolve }) {
    let theme = event.cookies.get('theme');
    if (!theme) theme = 'dark';
    return resolve(
        event,
        {
            transformPageChunk: ({ html }) => html.replace('%theme%', theme), 
        },
    );
}