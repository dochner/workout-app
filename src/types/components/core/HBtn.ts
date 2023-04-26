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
  color?: string
  noAnimation?: boolean
}
