import {request} from "@/request"
export async function getSessionsByIds(ids, limit = 49)
{
    let sessions = []
    if(ids.length >= limit){
        let len = ids.length
        while(len > 0){
            const en = len >= limit ? ids.splice(0, limit) : ids.splice(0, len)
            if(len >= limit) len -= limit
            else len = 0
            sessions = sessions.concat(await request(`http://localhost:5000/api/user/session/${en.join()}`))
        }
    }
    else return await request(`http://localhost:5000/api/user/session/${ids.join()}`)
    return sessions
}