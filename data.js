export const images = [
    {
        urlPhoto: './images/смычок.jpg',
        desc: 'Смычок'
    },
    {
        urlPhoto: './images/бляд.jpg',
        desc: 'Эмоция недоумевания'
    },
    {
        urlPhoto: './images/пупок.jpg',
        desc: 'Пупок'
    },
    {
        urlPhoto: './images/бляд2.jpg',
        desc: 'моя фотка'
    },
    {
        urlPhoto: './images/варя.jpg',
        desc: 'беременная варвара с васаби'
    },
    {
        urlPhoto: './images/рыга.jpg',
        desc: 'рыга с васаби'
    },
    {
        urlPhoto: './images/яой.jpg',
        desc: 'яОйЧиГ'
    },
    {
        urlPhoto: './images/фотказвонок.jpg',
        desc: '2 октября'
    },
    {
        urlPhoto: './images/лоб.jpg',
        desc: 'Императрица лобаннии'
    },
    {
        urlPhoto: './images/мизулина.jpg',
        desc: 'Мизулина'
    },
    {
        urlPhoto: './images/раер.jpg',
        desc: 'раер 18 лет'
    },
    {
        urlPhoto: './images/меллшер.jpg',
        desc: 'Горшок'
    },
    {
        urlPhoto: './images/пупок.jpg',
        desc: 'Пупок'
    },
]

export const text = {
    help: `Привет мой дорогой друг! Моё имя - Алёна Джексон. \nМеня создали для того, чтобы [сувать в меня бутылку] крутить легендарную гачу с Ебановыми, измерять размер полового органа и для много другого! \nОзнакомся с моими командами: \n/help - продублировать данное сообщение \n/dick_size - измерить размер твоего пипиндруса😁 \n/gacha - крутануть легендарную гачу с Еблановыми🤭`
}

//utils 
export const randomId = () => {
    const randomInt = Math.floor(Math.random() * images.length)
    return images[randomInt]
}

