import LanguageSwitcher from '@/components/utils/LanguageSwitcher'
import React from 'react'
import Logo from '../logo'
import style from "./Nav.module.scss"
import Button from '../button'
import LanguagePopover from '@/components/utils/LanguagePopover'

const Nav = () => {
  return (
    <div className={style.nav}>
      <div className={style.nav__wrapper}>
        <Logo />

        <div className={style.nav__cta}>
          {/* <LanguageSwitcher /> */}
          <LanguagePopover />
          <Button>
            Request early access
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Nav