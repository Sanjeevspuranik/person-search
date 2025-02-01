'use client'
/* eslint-disable @typescript-eslint/no-explicit-any */

import { Button } from "@/components/ui/button"
import { Edit } from "lucide-react"
import { useState } from "react"
import { updateUser } from '@/app/actions/actions'
import { toast } from "@/hooks/use-toast"
import { UserEditDialog } from "./user-edit-dialog"

export default function EditButton({ user }: { user: any }) {
  const [isOpen, setIsOpen] = useState(false)

  const handleUpdate = async (updatedData: any) => {
    try {
      const updatedUser = await updateUser(user.id, updatedData)
      toast({
        title: "User Updated",
        description: `User ${updatedUser.name} updated successfully.`,
        variant: "default",
      })
      setIsOpen(false) // Close modal after successful update
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
      {isOpen && <UserEditDialog user={user} onUpdate={handleUpdate} />}
    </>
  )
}