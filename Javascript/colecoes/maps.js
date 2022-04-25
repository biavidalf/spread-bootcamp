const mapa = new Map()
mapa.set('Vidal', 'Admin')
mapa.set('Paulo', 'Admin')
mapa.set('Tiago', 'User')
mapa.set('Yuri', 'User')

const getAdmins = mapa => {
    let admins = []
    for ([key, value] of mapa){
        if (value === 'Admin'){
            admins.push(key)
        }
    }

    return admins
}

console.log(getAdmins(mapa))