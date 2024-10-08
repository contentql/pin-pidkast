import { notFound } from 'next/navigation'

import FeaturedPost from '@/components/marketing/FeaturedPost'
import Hero from '@/components/marketing/Hero'
import LatestPosts from '@/components/marketing/LatestPosts'
import { serverClient } from '@/trpc/serverClient'

export const dynamic = 'force-dynamic'
export const revalidate = 0

const heroData = {
  imagePath:
    'https://elrond.hedwik.io/content/images/size/w600/format/webp/2023/12/thumbnail--1-.svg',
  title: '',
  subTitle:
    'A super minimal & lightweight theme with Premium Membership and fully Ghost-compatible.',
}

const Page = async ({ params }: { params: { route: string[] } }) => {
  try {
    const pageData = await serverClient.page.getPageData({
      path: params?.route,
    })

    return (
      <>
        <Hero
          imagePath={heroData?.imagePath}
          title={heroData?.title}
          subTitle={heroData?.subTitle}
        />
        <FeaturedPost />
        <LatestPosts />
      </>
    )
    // <RenderBlocks pageInitialData={pageData as PageType} slug={params} />
  } catch (error) {
    console.error('Error: Page not found')
    notFound()
  }
}

export default Page
