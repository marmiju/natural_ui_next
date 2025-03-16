import CodeSnippet from "@/app/components/CodeSnippet";

export default function Home() {
    const sampleCode = `'use client';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
    return (
        <div>
            <h2>Something went wrong!</h2>
            <p>{error.message}</p>
            <button onClick={() => reset()}>Try again</button>
        </div>
    );
}
`;

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-5">
            <h1 className="text-2xl font-bold mb-4">Next.js Code Snippet</h1>
            <CodeSnippet code={sampleCode} language="jsx" />
        </div>
    );
}

