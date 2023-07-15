import prismadb from '@/lib/prismadb'

export default async function BillboardPage({
  params,
}: {
  params: { billboardId: string }
}) {
  const billboard = await prismadb.billboard.findUnique({
    where: {
      id: params.billboardId,
    },
  })

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        Existing Billboard: {billboard?.label}
      </div>
    </div>
  )
}
