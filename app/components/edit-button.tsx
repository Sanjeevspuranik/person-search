'use client'

import { Button } from "@/components/ui/button"
import { Edit } from "lucide-react"
import { useState } from "react"
import { updateUser } from '@/app/actions/actions'
import { toast } from "@/hooks/use-toast"
import { User } from '@/app/actions/schemas'
import { UserEditDialog } from "./user-edit-dialog"

interface EditButtonProps {
  user: User
}

export default function EditButton({ user }: EditButtonProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleUpdate = async (updatedData: Partial<User>) => {
    try {
      const updatedUser = await updateUser(user.id, updatedData)
      toast({
        title: "User Updated",
        description: `User ${updatedUser.name} updated successfully.`,
        variant: "default",
      })
      setIsOpen(false)
    } catch (error) {
      console.error('EditButton: Error updating user', error)
      toast({
        title: "Error",
        description: "An error occurred while updating the user.",
        variant: "destructive",
      })
    }
  }

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
