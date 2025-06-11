export type Persona = {
  id: string
  name: string
  type: string
  email?: string
  phone?: string
  location: string
  state?: string
  pinCode?: string
  message?: string
  added: string
  lastInteraction?: string
  isFavorite: boolean
  status?: string
  about?: string
  services?: string[]
  goals?: string
  googleAccount?: string
  manager?: string

  // Employee specific fields
  role?: string
  department?: string
  dateOfBirth?: string
  fatherName?: string
  bloodGroup?: string
  emergencyContact?: string
  aadharNumber?: string
  joiningDate?: string
  probationEndDate?: string
  previousEmployer?: string

  // Vendor specific fields
  category?: string
  address?: string
  panNumber?: string
  gstNumber?: string
  bankName?: string
  accountNumber?: string
  ifscCode?: string
  company?: string
  serviceType?: string

  // Customer specific fields
  revenue?: string
  age?: string
  job?: string
  income?: string
  familyMembers?: string
  weight?: string
  interests?: string
  userType?: string
  wheelchairType?: string
  commuteRange?: string
  commuteMode?: string
  speed?: string
  commonPlace?: string
  painsDaily?: string
  painsCommute?: string
  solutionsNeeded?: string
  customerSegment?: string
  expectedGain?: string
  accountType?: string
  industry?: string

  // Investor specific fields
  investment?: string
}

