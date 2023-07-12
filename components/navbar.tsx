import { UserButton, auth } from '@clerk/nextjs'
import { MainNav } from '@/components/main-nav'
import StoreSwicher from '@/components/store-swicher'
import { redirect } from 'next/navigation'
import prismadb from '@/lib/prismadb'

export default async function Navbar() {
  const { userId } = auth()

  if (!userId) {
    redirect('/sign-in')
  }

  const stores = await prismadb.store.findMany({
    where: {
      userId,
    },
  })

  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <StoreSwicher items={stores} />
        <MainNav className="mx-6" />
        <div className="ml-auto flex items-center space-x-4">
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </div>
  )
}
