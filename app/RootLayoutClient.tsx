'use client';

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Menubar from '@/components/Menubar'

export default function RootLayoutClient({ children }: { children: React.ReactNode }) {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <>
      <Navbar isSheetOpen={isSheetOpen} setIsSheetOpen={setIsSheetOpen} />
      <Menubar isSheetOpen={isSheetOpen} setIsSheetOpen={setIsSheetOpen} />
      {children}
    </>
  )
}
