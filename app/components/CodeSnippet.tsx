"use client";
import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

interface CodeSnippetProps {
    code: string;
    language?: string;
}

const CodeSnippet: React.FC<CodeSnippetProps> = ({ code, language = "tsx" }) => {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(code);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
        } catch (err) {
            console.error("Failed to copy: ", err);
        }
    };

    return (
        <div className="relative bg-gray-900 p-4 rounded-lg text-white">
            <button
                onClick={copyToClipboard}
                className="absolute top-2 right-2 bg-blue-500 hover:bg-blue-600 text-white text-xs px-3 py-1 rounded"
            >
                {copied ? "Copied!" : "Copy"}
            </button>
            <SyntaxHighlighter language={language} style={oneDark} wrapLongLines>
                {code}
            </SyntaxHighlighter>
        </div>
    );
};

export default CodeSnippet;
