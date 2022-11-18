import React from 'react'
import { Fragment } from 'react'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { xonokai } from 'react-syntax-highlighter/dist/esm/styles/prism'



interface Props {
    content: string
}

const MarkDetail: React.FC<Props> = (props) => {

    const Code = {
        code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
                <SyntaxHighlighter style={xonokai} language={match[1]} PreTag="div" children={String(children).replace(/\n$/, '')} {...props} />
            ) : (
                <code className={className} {...props} />
            )
        }
    }
    
    const { content } = props

    return (
        <Fragment>
            <ReactMarkdown
                components={Code}
            >
                {content}
            </ReactMarkdown>
        </Fragment>
    )
}

export default MarkDetail