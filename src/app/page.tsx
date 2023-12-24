import { LatestGamesSection } from '@/views/home/latest-games-section'
import { ExploreNewArtistsSection } from '@/views/home/explore-new-artists-section'
import { SelectedGamesSection } from '@/views/home/selected-games-section'
import { CustomListsSection } from '@/views/home/custom-lists-section'
import { TrendingReviewsSection } from '@/views/home/trending-reviews-section'
import { AnticipateLaunchSection } from '@/views/home/anticipated-launch-section'
import { GameOfTheWeekSection } from '@/views/home/game-of-the-week-section'
import { SigInSection } from '@/views/home/signin-section'

export default function Home() {
  return (
    <main className="m-auto mt-[5.5rem] flex h-full w-full max-w-limit-screen flex-col gap-6 px-[4%] pb-[4%]">
      {/* - Box onde o usuário parou */}
      <div className="h-64 w-full rounded-md bg-white bg-opacity-20" />
      <LatestGamesSection />
      <ExploreNewArtistsSection />
      {/* - Crie Game Jams */}
      <div className="h-56 w-full rounded-md bg-white bg-opacity-20" />
      <GameOfTheWeekSection />
      <SelectedGamesSection />
      {/* - Sua nova casa de jogos independentes */}
      <div className="h-56 w-full rounded-md bg-white bg-opacity-20" />
      <CustomListsSection />
      <AnticipateLaunchSection />
      <TrendingReviewsSection />
      <SigInSection />
    </main>
  )
}
