import { request } from '@/utils/request'
export async function getSessionsByIds(ids, limit = 49) {
  let sessions = []
  if (ids.length >= limit) {
    let len = ids.length
    while (len > 0) {
      const en = len >= limit ? ids.splice(0, limit) : ids.splice(0, len)
      len >= limit ? (len -= limit) : (len = 0)
      sessions.push(
        await request(`http://localhost:5000/api/user/session/${en.join()}`)
      )
      // sessions = sessions.concat(
      //   await request(`http://localhost:5000/api/user/session/${en.join()}`)
      // )
    }
  } else
    return await request(`http://localhost:5000/api/user/session/${ids.join()}`)
  return sessions
}

//Authorization
export async function authUser(apiKey, password) {
  return await request(`http://localhost:5000/maintenance/auth`, 'POST', {
    apiKey,
    password
  })
}

export async function authBySession(session) {
  return await request('http://localhost:5000/maintenance/session', 'POST', {
    token: session
  })
}

export async function logoutAuthUser(session) {
  return await request('http://localhost:5000/maintenance/logout', 'POST', {
    token: session
  })
}
//End authorization

export async function getRawUser(username) {
  return await request(`http://localhost:5000/api/user/${username}`)
}

export async function getSessionById(id) {
  return await request(`http://localhost:5000/api/user/${id}/session`)
}

export async function getFriendsById(id) {
  return await request(`http://localhost:5000/api/user/${id}/friends`)
}

export async function getMatchesById(id, count = 10, offset = 0) {
  return await request(
    `http://localhost:5000/api/user/${id}/matches?count=${count}&offset=${offset}`
  )
}

export async function getGuildById(id) {
  return await request(`http://localhost:5000/api/guild/${id}`)
}

export async function getStatsById(id) {
  return await request(`http://localhost:5000/api/user/${id}/stats`)
}

export async function getPartyMembers(id) {
  return await request(`http://localhost:5000/api/user/${id}/party`)
}
