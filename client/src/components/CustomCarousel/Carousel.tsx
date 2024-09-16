import React, { useState, ReactNode } from 'react';
import { useSwipeable } from 'react-swipeable'
import styles from './index.module.css'

interface CustomCarouselProps {
    children: ReactNode;
    onSlideChange?: (index: number) => void;
}

const CustomCarousel: React.FC<CustomCarouselProps> = ({ children, onSlideChange }) => {

    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = React.Children.count(children)

    const handleDotClick = (index: number) => {
        setCurrentSlide(index);
        onSlideChange && onSlideChange(index)
    }

    const handleNextSlide = () => {
        const nextSlide = (currentSlide + 1) % totalSlides
        setCurrentSlide(nextSlide);
        onSlideChange && onSlideChange(nextSlide)
    }

    const handlePrevSlide = () => {
        const prevSlide = (currentSlide - 1 + totalSlides) % totalSlides
        setCurrentSlide(prevSlide);
        onSlideChange && onSlideChange(prevSlide)
    }

    const swipeHandlers = useSwipeable({
        onSwipedLeft: handlePrevSlide,
        onSwipedRight: handleNextSlide,
        preventScrollOnSwipe: true,
        trackMouse: true,
    })

    return (
        <div className={styles['carouselContainer']} {...swipeHandlers}>
            <div className={styles['carouselWrapper']} style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {
                    React.Children.map(children, (child, index)=>(
                        <div key={index} className={styles['carouselSlide']}>
                            {child}
                        </div>
                    ))
                }
            </div>
            <div className={styles['carouselDots']}>
                {
                    React.Children.map(children, (_, index)=>(
                        <span key={index} className={`${styles['dots']} ${index === currentSlide ? styles['active'] : ''}`} onClick={()=> handleDotClick(index)}>

                        </span>
                    ))
                }
            </div>
        </div>
    )
}

export default CustomCarousel;