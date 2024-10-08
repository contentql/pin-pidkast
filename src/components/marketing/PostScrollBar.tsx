'use client'

import Button from '../common/Button'
import Container from '../common/Container'
import Copy from '../svg/Copy'
import TickMark from '../svg/TickMark'
import { env } from '@env'
import { motion, useScroll, useSpring } from 'framer-motion'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const PostScrollBar = () => {
  const pathName = usePathname()
  const [copied, setCopied] = useState(false)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  const [showContainer, setShowContainer] = useState(false)

  const handleScroll = () => {
    const scrollPosition = window.scrollY
    if (scrollPosition > 70) {
      setShowContainer(true)
    } else {
      setShowContainer(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  function copyText(pathName: string) {
    navigator.clipboard
      .writeText(`${env.NEXT_PUBLIC_PUBLIC_URL}${pathName}`)
      .then(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      })
      .catch(err => console.error('Failed to copy text: ', err))
  }
  return (
    <div className='sticky top-0 z-10 bg-base-100'>
      {showContainer && (
        <motion.div
          initial={{ y: '-100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}>
          <Container>
            <div className='flex h-16 w-full items-center justify-between sm:h-[74px]'>
              <div className='xs:gap-4 flex items-center justify-center gap-3'>
                <div className='avatar'>
                  <div className='w-10'>
                    <Image
                      alt='Author'
                      fill
                      className='rounded-full'
                      src={
                        'https://elrond.hedwik.io/content/images/size/w1200/format/webp/2023/12/8.png'
                      }
                    />
                  </div>
                </div>
                <div className='line-clamp-1 text-lg sm:font-semibold'>
                  Aureate Serpent and Celestial Sojourn
                </div>
              </div>
              <Button
                onClick={() => copyText(pathName)}
                className={`hover:bg-base-150 } !rounded-full`}>
                {copied ? <TickMark /> : <Copy />}
                {copied ? 'Copied' : 'Copy Link'}
              </Button>
            </div>
          </Container>
        </motion.div>
      )}
      <motion.div
        className='progress-bar h-1 origin-left bg-primary '
        style={{ scaleX }}
      />
    </div>
  )
}

export default PostScrollBar
