import type { RouteRecordRaw, RouterLinkProps } from 'vue-router'

export interface HBtnProps extends Omit<RouterLinkProps, 'to'> {
  to?: RouteRecordRaw | string
  label?: string
  icon?: string
  iconRight?: string
  loading?: boolean
  disabled?: boolean
  wide?: boolean
  block?: boolean
  circle?: boolean
  outline?: boolean
  color?: 'primary' | 'secondary' | 'accent' | 'success' | 'error' | 'warning' | 'info' | 'gradient'
  noAnimation?: boolean
  noLinkStyle?: boolean
  dense?: boolean
}
