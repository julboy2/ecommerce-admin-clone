'use client'

import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { useStoreModal } from '@/hooks/use-store-modal'
import Modal from '@/components/ui/modal'

const formSchema = z.object({
  name: z.string().min(1),
})

export function StoreModal() {
  const storeModal = useStoreModal()

  const form = useForm<z.infer<typeof formSchema>>({
    // react-hook-form 의  resolver 로 사용할 수 있는 유효성 검사기 함수를 생성해주는 함수이다.
    // zodResolver 함수를 사용하면  react-hook-form 과 zod 를 통합하여 폼의 유효성 검사를 간편하게 수행
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
    },
  })

  return (
    <Modal
      title="Create Store"
      description="Add a new store to manage products and categories"
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}
    >
      Future Create Store Form
    </Modal>
  )
}
