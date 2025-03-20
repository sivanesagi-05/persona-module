"use client"

import { useState } from "react"
import { FileDown, FileSpreadsheet, FileJson, FileText, FileCheck } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "./ui/dialog"
import { Button } from "./ui/button"
import { Label } from "./ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"

interface ExportDataDialogProps {
  isOpen: boolean
  onClose: () => void
}

export default function ExportDataDialog({ isOpen, onClose }: ExportDataDialogProps) {
  const [fileFormat, setFileFormat] = useState("csv")
  const [selectedType, setSelectedType] = useState<string>("all")

  const handleExport = () => {
    // In a real application, this would trigger an API call to generate
    // the export file and download it
    console.log("Exporting data:", {
      fileFormat,
      selectedType,
    })

    // Simulate a download
    const link = document.createElement("a")
    link.href = "#"
    link.download = `persona-dashboard-export.${fileFormat}`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    onClose()
  }

  const resetForm = () => {
    setFileFormat("csv")
    setSelectedType("all")
  }

  const handleClose = () => {
    resetForm()
    onClose()
  }

  const getFileIcon = () => {
    switch (fileFormat) {
      case "csv":
        return <FileSpreadsheet className="h-5 w-5" />
      case "json":
        return <FileJson className="h-5 w-5" />
      case "txt":
        return <FileText className="h-5 w-5" />
      default:
        return <FileDown className="h-5 w-5" />
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[550px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            {getFileIcon()}
            Export Data
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 py-4">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="file-format">File Format</Label>
                <Select value={fileFormat} onValueChange={setFileFormat}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select format" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="csv">CSV</SelectItem>
                    <SelectItem value="excel">Excel (.xlsx)</SelectItem>
                    <SelectItem value="json">JSON</SelectItem>
                    <SelectItem value="txt">Plain Text</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="persona-type">Persona Type</Label>
                <Select value={selectedType} onValueChange={setSelectedType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="Employees">Employees</SelectItem>
                    <SelectItem value="Vendors">Vendors</SelectItem>
                    <SelectItem value="Customers">Customers</SelectItem>
                    <SelectItem value="Investors">Investors</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleExport}>
            Export
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

