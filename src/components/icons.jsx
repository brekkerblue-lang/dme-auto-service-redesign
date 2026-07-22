import {
  LuPhone,
  LuMapPin,
  LuClock,
  LuMessageCircle,
  LuStar,
  LuArrowRight,
  LuMenu,
  LuX,
  LuWrench,
  LuShieldCheck,
  LuUsers,
  LuAward,
  LuHeart,
  LuQuote,
  LuCheck,
  LuFacebook,
  LuFlag,
  LuGauge,
  LuHandshake,
  LuZap,
} from 'react-icons/lu'

const registry = {
  phone: LuPhone,
  'map-pin': LuMapPin,
  clock: LuClock,
  message: LuMessageCircle,
  star: LuStar,
  arrow: LuArrowRight,
  menu: LuMenu,
  x: LuX,
  wrench: LuWrench,
  shield: LuShieldCheck,
  users: LuUsers,
  award: LuAward,
  heart: LuHeart,
  quote: LuQuote,
  check: LuCheck,
  facebook: LuFacebook,
  flag: LuFlag,
  gauge: LuGauge,
  handshake: LuHandshake,
  zap: LuZap,
}

export function Icon({ name, className }) {
  const Cmp = registry[name]
  if (!Cmp) return null
  return <Cmp className={className} aria-hidden="true" />
}
