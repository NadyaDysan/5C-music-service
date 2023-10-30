import { useState, useEffect } from 'react'
import { useGetFavoritesQuery } from '../redux/api/favorites'
import Navigation from '../components/Navigation/Navigation'
import Player from '../components/Player/Player'
import Search from '../components/Search/Search'
import Centerblock from '../components/Centerblock/Centerblock'
import Sidebar from '../components/Sidebar/Sidebar'
import { useThemeContext } from '../components/ThemeSwitcher/ThemeSwitcher'


export default function MyTracks() {
  const { theme } = useThemeContext()

  const {
    data: tracks,
    isLoading: isTracksLoading,
    isSuccess: isTracksSuccess
  } = useGetFavoritesQuery()
  const [search, updateSearch] = useState(null)
  const [searchedData, setSearchedData] = useState(null)
  const [track, setTrack] = useState(null)

  const handleChangeTrack = (event) => {
    const { eventName, isShuffle } = event
    if (searchedData.length === 0) return
    if (isShuffle) {
      const randomIndex = Math.floor(Math.random() * searchedData.length)
      setTrack(searchedData[randomIndex])
      return
    }
    if (eventName === 'next') {
      const nextIndex = (searchedData.indexOf(track) + 1) % searchedData.length
      setTrack(searchedData[nextIndex])
      return
    }
    if (eventName === 'prev') {
      const prevIndex = (searchedData.indexOf(track) - 1) % searchedData.length
      setTrack(searchedData[prevIndex < 0 ? searchedData.length - 1 : prevIndex])
      return
    }

    console.error('Unknown event name')
  }

  useEffect(() => {
    if (!tracks) return
    if (!search) {
      setSearchedData(tracks)
      return
    }
    const searched = tracks.filter((item) => 
    item.name.toLowerCase().includes(search.toLowerCase()))

    setSearchedData(searched)
  }, [tracks, search, isTracksSuccess])

  const searchInput = <Search updateSearch={updateSearch} />

  if (!track) {
    return (
      
      <main
        style={{
          backgroundColor: theme.background,
          color: theme.color,
        }}
      >
        <Navigation />
        <Centerblock
          title="My tracks"
          search={searchInput}
          data={searchedData || []}
          isFetching={isTracksLoading}
          onSelectTrack={setTrack}
          selectedTrack={track}
        />
        <Sidebar isFetching={isTracksLoading} />
      </main>
    )}
  
    return (
      <main
        style={{
          backgroundColor: theme.background,
          color: theme.color,
        }}
      >
        <Navigation />
        <Centerblock
          title="My tracks"
          search={searchInput}
          data={searchedData || []}
          isFetching={isTracksLoading}
          onSelectTrack={setTrack}
          selectedTrack={track}
        />
        <Sidebar isFetching={isTracksLoading} />
        <Player track={track} changeTrack={handleChangeTrack} />
      </main>
    )
}