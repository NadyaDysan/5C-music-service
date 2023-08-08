import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useState } from 'react'
import Filter from '../Filter/Filter'
import Search from '../Search/Search'
import * as S from './Centerblock-style'
import {useThemeContext} from '../ThemeSwitcher/ThemeSwitcher'

const playlistI = [
  {
    title: 'Guilt',
    author: 'Nero',
    album: 'Welcome Reality',
    time: '4:44',
  },
  {
    title: 'Elektro',
    author: 'Dynoro, Outwork, Mr. Gee',
    title_span: '',
    album: 'Elektro',
    time: '2:22',
  },
  {
    title: "I'm Fire",
    author: 'Ali Bakgor',
    title_span: '',
    album: "I'm Fire",
    time: '2:22',
  },
  {
    title: 'Non Stop',
    author: 'Стоункат, Psychopath',
    title_span: '(Remix)',
    album: 'Non Stop',
    time: '4:12',
  },
  {
    title: 'Run Run',
    author: 'Jaded, Will Clarke, AR/CO',
    title_span: '(feat. AR/CO)',
    album: 'Run Run',
    time: '2:54',
  },
  {
    title: 'Eyes on Fire',
    author: 'Blue Foundation, Zeds Dead',
    title_span: '(Zeds Dead Remix)',
    album: 'Eyes on Fire',
    time: '2:54',
  },
  {
    title: 'Mucho Bien',
    author: 'HYBIT, Mr. Black, Offer Nissim, Hi Profile',
    title_span: '',
    album: 'Mucho Bien',
    time: '3:41',
  },
  {
    title: 'Knives n Cherries',
    author: 'minthaze',
    title_span: '',
    album: 'Captivating',
    time: '1:48',
  },
  {
    title: 'How Deep Is Your Love',
    author: 'Calvin Harris, Disciples',
    title_span: '',
    album: 'How Deep Is Your Love',
    time: '3:32',
  },
  {
    title: 'Morena',
    author: 'Tom Boxer',
    title_span: '',
    album: 'Soundz Made in Romania',
    time: '3:36',
  },
  {
    title: '',
    author: '',
    title_span: '',
    album: '',
    time: '',
  },
]

export default function Centerblock({title}) {
  const { theme } = useThemeContext();

  const [isLoading, setIsLoading] = useState(true)
  setTimeout(setIsLoading, 3000, false)


  return (
    <S.MainCenterBlock theme={theme}>
      <Search/>
      <S.CenterBlockH2 theme={theme}>{title}</S.CenterBlockH2>
      <Filter />
      <S.CenterBlockContent>
        <S.ContentTitle>
          <S.PlayListTitleCol theme={theme}>Трек</S.PlayListTitleCol>
          <S.PlayListTitleCol theme={theme}>ИСПОЛНИТЕЛЬ</S.PlayListTitleCol>
          <S.PlayListTitleCol theme={theme}>АЛЬБОМ</S.PlayListTitleCol>
          <S.PlayListTitleCol theme={theme}>
            <S.PlaylistTitleSvg theme={theme} alt="time">
              <use xlinkHref="/img/icon/sprite.svg#icon-watch" />
            </S.PlaylistTitleSvg>
          </S.PlayListTitleCol>
        </S.ContentTitle>
        <S.ContentPlaylist>
          {playlistI.map((item) => (
            <S.PlaylistItem key={item.title}>
              <S.PlaylistTrack>
                <S.TrackTitle>
                  <S.TrackTitleImage theme={theme}>
                    {isLoading ? (
                      <Skeleton />
                    ) : (
                      <S.TrackTitleSvg theme={theme} alt="music">
                        <use xlinkHref="/img/icon/sprite.svg#icon-note" />
                      </S.TrackTitleSvg>
                    )}
                  </S.TrackTitleImage>
                  <S.TrackTitleText>
                    {isLoading ? (
                      <Skeleton width="240px" height="16px" />
                    ) : (
                      <S.TrackTitleLink theme={theme} href="http://">
                        {item.title} &nbsp;
                        <S.TrackTitleSpan theme={theme}>{item.title_span}</S.TrackTitleSpan>
                      </S.TrackTitleLink>
                    )}
                  </S.TrackTitleText>
                </S.TrackTitle>
                <S.TrackAuthor>
                  {isLoading ? (
                    <Skeleton />
                  ) : (
                    <S.TrackAuthorLink theme={theme} href="http://">
                      {item.author}
                    </S.TrackAuthorLink>
                  )}
                </S.TrackAuthor>
                <S.TrackAlbum>
                  {isLoading ? (
                    <Skeleton />
                  ) : (
                    <S.TrackAlbumLink theme={theme} href="http://">
                      {item.album}
                    </S.TrackAlbumLink>
                  )}
                </S.TrackAlbum>
                <S.TrackTime>
                  <S.TrackTimeSvg theme={theme} alt="time">
                    <use xlinkHref="/img/icon/sprite.svg#icon-like" />
                  </S.TrackTimeSvg>
                  <S.TrackTimeText theme={theme}>{item.time}</S.TrackTimeText>
                </S.TrackTime>
              </S.PlaylistTrack>
            </S.PlaylistItem>
          ))}
        </S.ContentPlaylist>
      </S.CenterBlockContent>
    </S.MainCenterBlock>
  )
}
