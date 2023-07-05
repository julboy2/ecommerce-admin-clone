'use client'

import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { useStoreModal } from '@/hooks/use-store-modal'
import Modal from '@/components/ui/modal'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

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

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values)
  }

  return (
    <Modal
      title="Create Store"
      description="Add a new store to manage products and categories"
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}
    >
      <div>
        <div className="space-y-4 py-2 pb-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="E-Commer" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              ></FormField>
            </form>
          </Form>
        </div>
      </div>
    </Modal>
  )
}
