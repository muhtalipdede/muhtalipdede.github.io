import Link from "next/link";

export default function Welcome() {
    return (
        <main className="flex flex-col justify-center min-h-screen max-w-3xl mx-auto p-4">
            <section
                className="flex flex-col justify-center min-h-screen p-4"
            >
                <p className="text-right mb-4 text-blue-700">
                    <Link href="/blog" passHref>
                        You can read my blog here
                    </Link>
                </p>
                <p className="text-2xl mb-4">
                    Hi,
                </p>
                <p className="text-justify mb-4">
                    I am Muhtalip. I started this blog to share my thoughts on software, science, technology, and life. As I learn new things in the world of software, I wanted to share what I have learned. In this blog, I will share posts on software, science, technology, life, and similar topics.
                </p>
                <p className="text-justify mb-4">
                    I especially want to share my experiences, what I have learned, and my thoughts. We live in a world where the past somehow reappears and the future can change at any moment. Therefore, I hope that what I write in this blog will be useful to someone someday.
                </p>
                <p className="text-justify mb-4">
                    The past opens horizons to the future. Our past experiences influence our future decisions. Therefore, by sharing our past experiences, we can help make better decisions in the future. At the same time, by sharing our thoughts about the future, we can open up new horizons for it.
                </p>
                <p className="text-justify mb-4">
                    It is July 2024 as I start this blog. It is hard to predict what will happen in the world of software, science, technology, and our lives at this point in time. But one thing is certain: the future is coming very fast. The developments we are witnessing today are surpassing even the greatest dreams of the past.
                </p>
                <p className="text-justify mb-4">
                    On one hand, we are watching the incredible progress of science and technology, while on the other, wars are still ongoing in a world that has not even seen a hundred years pass since World War II, and this situation is escalating. I don't know if we, as the millennial generation, will witness a world war, but if we do, it will likely result in far greater destruction than the First and Second World Wars.
                </p>
                <p className="text-justify mb-4">
                    I hope that science and technology will prevent humanity from self-destruction. However, I cannot be too optimistic about this.
                </p>
                <p className="text-justify mb-4">
                    On the other hand, humanity has started to take serious steps towards multi-planetary living. There are projects to send humans to Mars, return to the Moon, and many other space projects. All these projects are very exciting. I'm sure there will be even greater projects beyond our current imagination.
                </p>
                <p className="text-justify mb-4">
                    We should dream of beautiful things and work to make the future of humanity better. With what I write in this blog, I will not only take note of the present but also share my dreams for the future. That's all for now.
                </p>
                <p className="text-justify mb-4">
                    Best regards.
                </p>
            </section>
        </main>
    );
}
