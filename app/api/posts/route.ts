export function GET(request: Request) {
    return new Response(JSON.stringify([
        { id: 1, title: "Hello World", body: "This is a blog post", author: "Muhtalip Dede", date: "2024-07-01", tags: ["software", "technology"], comments: [] },
    ]), {
        headers: {
            "Content-Type": "application/json",
            "Cache-Control": "max-age=60",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET",
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Max-Age": "86400"
        }
    });
}