import { create } from 'zustand'

import { skills } from '@/libs/data'
import { TechStack } from '@/libs/types'

interface useTechStacksStore {
  items: TechStack[]
  isWebDevChecked: boolean
  isMobileDevChecked: boolean
  isInfraChecked: boolean
  onWebDevChanged: () => void
  onMobileDevChanged: () => void
  onInfraChanged: () => void
}

export const useTechStacks = create<useTechStacksStore>((set, get) => ({
  items: skills.slice(),
  isWebDevChecked: true,
  isMobileDevChecked: true,
  isInfraChecked: true,
  onWebDevChanged: () => {
    const isWebDevChecked = !get().isWebDevChecked
    const isMobileDevChecked = get().isMobileDevChecked
    const isInfraChecked = get().isInfraChecked

    let updatedItems: TechStack[] = []
    if (isWebDevChecked) {
      updatedItems.push(...skills.filter(item => item.category.includes('web') && !updatedItems.includes(item)))
    }
    if (isMobileDevChecked) {
      updatedItems.push(...skills.filter(item => item.category.includes('mobile') && !updatedItems.includes(item)))
    }
    if (isInfraChecked) {
      updatedItems.push(...skills.filter(item => item.category.includes('infra') && !updatedItems.includes(item)))
    }

    set({ isWebDevChecked: isWebDevChecked, items: updatedItems })
  },
  onMobileDevChanged: () => {
    const isWebDevChecked = get().isWebDevChecked
    const isMobileDevChecked = !get().isMobileDevChecked
    const isInfraChecked = get().isInfraChecked

    let updatedItems: TechStack[] = []
    if (isWebDevChecked) {
      updatedItems.push(...skills.filter(item => item.category.includes('web') && !updatedItems.includes(item)))
    }
    if (isMobileDevChecked) {
      updatedItems.push(...skills.filter(item => item.category.includes('mobile') && !updatedItems.includes(item)))
    }
    if (isInfraChecked) {
      updatedItems.push(...skills.filter(item => item.category.includes('infra') && !updatedItems.includes(item)))
    }

    set({ isMobileDevChecked: isMobileDevChecked, items: updatedItems })
  },
  onInfraChanged: () => {
    const isWebDevChecked = get().isWebDevChecked
    const isMobileDevChecked = get().isMobileDevChecked
    const isInfraChecked = !get().isInfraChecked

    let updatedItems: TechStack[] = []
    if (isWebDevChecked) {
      updatedItems.push(...skills.filter(item => item.category.includes('web') && !updatedItems.includes(item)))
    }
    if (isMobileDevChecked) {
      updatedItems.push(...skills.filter(item => item.category.includes('mobile') && !updatedItems.includes(item)))
    }
    if (isInfraChecked) {
      updatedItems.push(...skills.filter(item => item.category.includes('infra') && !updatedItems.includes(item)))
    }

    set({ isInfraChecked: isInfraChecked, items: updatedItems })
  }
}))