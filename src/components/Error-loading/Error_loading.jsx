import * as S from './Error_loading-style'

export default function LoadingError({ resetErrorBoundary }) {
  return (
    <S.LoadingErrorContainer>
      <S.IconSmileSad src="/img/emoji/sad.png" alt="sad_emoji" />
      <S.LoadingErrorTextContainer>
        <S.LoadingErrorHeader>Loading error</S.LoadingErrorHeader>
        <S.LoadingErrorText>
          Please check your network connection and try again
        </S.LoadingErrorText>
      </S.LoadingErrorTextContainer>
      <S.LoadingErrorButtonContainer>
        <S.LoginSubmit value="Повторить" onClick={resetErrorBoundary} />
      </S.LoadingErrorButtonContainer>
    </S.LoadingErrorContainer>
  )
}
