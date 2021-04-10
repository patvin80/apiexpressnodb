import { writeFileSync } from 'fs'

const getNewId = (array) => {
    if (array.length > 0) {
        return array[array.length - 1].id + 1
    } else {
        return 1
    }
}

const newDate = () => {
    return new Date().toString()
}

const mustBeInArray = async (array, id) => {
        const row = array.find(r => r.id == id)
        if (!row) {
            throw ({
                message: 'ID is not good',
                status: 404
            })
        }
        return(row)
}

const writeJSONFile = (filename, content) => {
    writeFileSync(filename, JSON.stringify(content), 'utf8', (err) => {
        if (err) {
            console.log(err)
        }
    })
}

export {
    getNewId,
    newDate,
    mustBeInArray,
    writeJSONFile
}