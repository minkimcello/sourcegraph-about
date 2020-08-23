import React from 'react'
import { Link } from 'gatsby'
import { BlogTypeInfo } from './postTypes'

interface Props extends Pick<BlogTypeInfo, 'title' | 'belowTitle' | 'baseUrl'> {}

export const BlogHeader: React.FunctionComponent<Props> = ({ title, belowTitle, baseUrl }) => (
    <div>
        <h2 className="display-4 mt-3">
            <Link to={baseUrl} className="text-body">
                {title}
            </Link>
        </h2>
        {belowTitle}
    </div>
)
