import { useNavigate } from 'react-router-dom'
import * as S from './NotFound-style'
import { useThemeContext } from '../ThemeSwitcher/ThemeSwitcher'

export default function NotFound() {
  const navigate = useNavigate()

  const { theme } = useThemeContext()

  return (
    <S.NotFoundBlock>
      <S.Title>404</S.Title>
      <S.PageNotFound>
        Page not found
        <S.PageNotFoundSvg
          theme={theme}
          src="/img/emoji/crying.png"
          alt="crying_emoji"
        />
      </S.PageNotFound>
      <S.PageNotFoundDescription theme={theme}>
        It may have been removed <br /> or moved to a different address
      </S.PageNotFoundDescription>
      <S.ReturnHomeButton
        theme={theme}
        onClick={() => {navigate('/')}}
      >
        Back to main page{' '}
      </S.ReturnHomeButton>
    </S.NotFoundBlock>
  )
}
