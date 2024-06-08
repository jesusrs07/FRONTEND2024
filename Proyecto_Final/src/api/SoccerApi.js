export const getPlayer = async (player) => {
    const key = 'de1c78a9723f1565e45602279c87f1aa69b985aa6d2d8462bf022d02c9c36e1a'
    const url = `https://apiv3.apifootball.com/?action=get_players&player_name=${player}&APIkey=${key}`
    const response = await fetch(url)
    const football = await response.json()

    return football
}