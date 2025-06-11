"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, Users, Search, Filter } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function GroupsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [groups, setGroups] = useState([
    {
      id: "1",
      name: "Executive Team",
      members: 5,
      description: "Senior leadership team members",
    },
    {
      id: "2",
      name: "Sales Department",
      members: 12,
      description: "Sales and business development team",
    },
    {
      id: "3",
      name: "Engineering",
      members: 8,
      description: "Technical team members",
    },
  ])

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Groups</h1>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="h-4 w-4 mr-2" />
          Create New Group
        </Button>
      </div>

      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search groups..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button variant="outline">
          <Filter className="h-4 w-4 mr-2" />
          Filter
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {groups.map((group) => (
          <Card key={group.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-100 rounded-full">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{group.name}</h3>
                    <p className="text-sm text-gray-500">{group.members} members</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  Edit
                </Button>
              </div>
              <p className="text-gray-600">{group.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
} 