import React, { useState, useEffect } from 'react'

import * as S from './styled'

export default function ({
  src,
  alt,
  height = 'auto',
  width = '100%',
  rounded,
}) {
  const [imageSrc, setImageSrc] = useState()
  const [imageRef, setImageRef] = useState()

  useEffect(() => {
    let observer

    if (imageRef && !imageSrc) {
      if (IntersectionObserver) {
        observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.intersectionRatio > 0 || entry.isIntersecting) {
                setImageSrc(src)
              }
            })
          },
          {
            threshold: 0.01,
            rootMargin: '75%',
          }
        )
        observer.observe(imageRef)
      }
    }
    return () => {
      if (observer && observer.unobserve) {
        observer.unobserve(imageRef)
      }
    }
  })

  return (
    <S.ImageWrapper height={height} width={width}>
      <S.Image
        ref={setImageRef}
        src={imageSrc}
        alt={alt}
        title={alt}
        height={height}
        width={width}
        rounded={rounded}
      />
    </S.ImageWrapper>
  )
}
