import React from 'react'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
  size?: 'default' | 'sm' | 'lg' | 'icon'
}

export interface SheetProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

export interface SheetTriggerProps {
  asChild?: boolean
}

export interface SheetContentProps {
  side?: 'top' | 'right' | 'bottom' | 'left'
  className?: string
}

export interface NavigationMenuProps {}

export interface NavigationMenuListProps {}

export interface NavigationMenuItemProps {}

export interface NavigationMenuLinkProps {
  href: string
}

export interface NavigationMenuTriggerProps {}

export interface NavigationMenuContentProps {}

