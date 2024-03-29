import { CDBSidebar, CDBSidebarContent, CDBSidebarHeader, CDBSidebarMenu } from 'cdbreact'
import React, { useEffect, useState } from 'react'
import { ListGroup } from 'react-bootstrap'
import { useRecoilState, useRecoilValue } from 'recoil'
import { showSidebar, userState } from '../utils/atoms'
import URL from '../utils/url.js'

function Sidebar({ goToSelectedSong }) {
  const [show, setShow] = useRecoilState(showSidebar)
  const recoilState = useRecoilValue(userState)
  const [mySongs, setMySongs] = useState([])
  const [selectedSongForColor, setSelectedSongForColor] = useState(null)

  useEffect(() => {
    fetch(`${URL}/user_songs/${recoilState.id}`).then(res => {
      if (res.ok) {
        res.json().then(setMySongs)
      } else {
        console.log(`Could not find my songs`)
      }
    })
  }, [recoilState.id])

  return (
    <>
      {show ? (
        <div
          style={{
            display: 'flex',
            height: '90vh',
            zIndex: '10',
            position: 'absolute',
            right: '0',
            top: '4.8rem',
            overflow: 'scroll initial',
          }}
        >
          <CDBSidebar textColor='#fff' backgroundColor='#212529'>
            <CDBSidebarHeader
              onClick={() => {
                setSelectedSongForColor(null)
                setShow(false)
              }}
              prefix={<i className='fa fa-bars fa-large'></i>}
            >
              {`${recoilState.username}'s songs`}
            </CDBSidebarHeader>
            <CDBSidebarContent className='sidebar-content'>
              <CDBSidebarMenu>
                <>
                  <div>
                    {mySongs.map(song => {
                      return (
                        <ListGroup.Item
                          style={{
                            backgroundColor: song === selectedSongForColor ? '#ff385c' : '#212529',
                          }}
                          as='li'
                          className='d-flex justify-content-between align-items-start p-3'
                          onClick={e => {
                            let listItem = e.target
                            while (listItem.nodeName !== 'LI') {
                              listItem = listItem.parentNode
                            }
                            listItem.style.backgroundColor = '#ff385c'
                            setSelectedSongForColor(song)
                            goToSelectedSong(song)
                          }}
                          key={Math.random() + Math.random(10) + 10}
                        >
                          <div className='ms-2 me-auto'>
                            <div className='fw-bold'>{song.title}</div>
                            {song.artist}
                          </div>
                          <img height='20%' alt='whatever' width='20%' src={song.image_url} />
                        </ListGroup.Item>
                      )
                    })}
                  </div>
                </>
              </CDBSidebarMenu>
            </CDBSidebarContent>
          </CDBSidebar>
        </div>
      ) : null}
    </>
  )
}

export default Sidebar
