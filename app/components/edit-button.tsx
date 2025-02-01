'use client'

import { Button } from "@/components/ui/button"
import { Edit } from "lucide-react"
import { useState } from "react"
import { User } from '@/app/actions/schemas'
import { UserEditDialog } from "./user-edit-dialog"

interface EditButtonProps {
  user: User
}

export default function EditButton({ user }: EditButtonProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setIsOpen(true)} variant="secondary">
        <Edit className="w-4 h-4 mr-2" />
        Edit
      </Button>
      {isOpen && <UserEditDialog user={user}/>}
    </>
  )
}
