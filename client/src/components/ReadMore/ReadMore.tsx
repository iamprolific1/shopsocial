import React, { useState } from 'react';
import styles from './index.module.css'

interface ReadMoreProps {
    text: string;
    maxLength: number;
}

const ReadMore: React.FC<ReadMoreProps> = ({ text, maxLength })=> {

    const [isExpanded, setIsExpanded] = useState(false);

    const toggleReadMore = () => {
        setIsExpanded((prevState) => !prevState)
    }
    //check if the text exceeds the maxLength to determine whether to show "Read More"
    const shouldShowMore = text.length > maxLength;

    //Get the preview text based on the maxLenght
    const previewText = shouldShowMore ? text.slice(0, maxLength) + '...' : text;

    return (
        <div className={styles['readMore_Container']}>
            {/* Display the full readmore text if expanded */}

            <p className={styles['text']}>
                {isExpanded ? text : previewText}
                {
                    shouldShowMore && (
                        <span onClick={toggleReadMore} className={styles['showMoreToggle']}>
                            {isExpanded ? ' ..show less' : 'read more'}
                        </span>
                    )
                }
            </p>
        </div>
    )
}
export default ReadMore;