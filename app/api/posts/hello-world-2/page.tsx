export default function Blog() {
    return (
        <main className="flex flex-col justify-center min-h-screen max-w-3xl mx-auto p-4">
            <h1 className="text-4xl font-bold text-center mb-4 text-gray-900">Blog</h1>
            <article className="mb-4 p-4 bg-gray-100 rounded-lg">
                <h2 className="text-2xl font-bold text-gray-900 mt-4">Hello World</h2>
                <p className="text-gray-600 mt-2">By Muhtalip Dede on 2024-07-01</p>
                <p className="text-gray-800 mt-2">This is a blog post</p>
                <div className="flex flex-wrap mt-4">
                    <span className="bg-gray-200 text-gray-800 rounded-full px-2 py-1 text-sm mr-2 mb-2">software</span>
                    <span className="bg-gray-200 text-gray-800 rounded-full px-2 py-1 text-sm mr-2 mb-2">technology</span>
                </div>
            </article>
            <article className="mb-4 p-4 bg-gray-100 rounded-lg">
                <h2 className="text-2xl font-bold text-gray-900 mt-4">Hello World 2</h2>
                <p className="text-gray-600 mt-2">By Muhtalip Dede on 2024-07-02</p>
                <p className="text-gray-800 mt-2">This is another blog post</p>
                <div className="flex flex-wrap mt-4">
                    <span className="bg-gray-200 text-gray-800 rounded-full px-2 py-1 text-sm mr-2 mb-2">software</span>
                    <span className="bg-gray-200 text-gray-800 rounded-full px-2 py-1 text-sm mr-2 mb-2">technology</span>
                </div>
            </article>
        </main>
    );
}