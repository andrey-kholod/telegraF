import { Markup, Telegraf } from 'telegraf'
import { message } from 'telegraf/filters'

import dotenv from 'dotenv'
import { randomId, text } from './data.js'


const bot = new Telegraf('6627513927:AAHiKS6uZJUzLnrpaHVSOcXGG4kQHN67sn0')

bot.help((ctx) => ctx.reply(`Привет, @${ctx.from.username} ! Будем крутить?`))

bot.start((ctx) => ctx.reply(text.help))
// событие Стикер, Фото
bot.on(message('sticker'), (ctx) => ctx.reply('Лее ты нефор'))
bot.on(message('photo'), (ctx) => ctx.reply('Я также в фото на паспорт выгляжу🤭'))
//Просто хуй
bot.hears('хуй', (ctx) => ctx.reply(`Привет @${ctx.message.from.username} от хуя!`))
//Dick
bot.command(('dick_size'), (ctx) => ctx.reply(`Твой размер - ${Math.floor(Math.random() * 25)} см🍆😏`))

bot.command('blade', (ctx) => {
    ctx.replyWithPhoto({
        source: './images/жопа.jpg'
    }, {
        caption: 'Smack my ass like a drum!'
    })
})

bot.command('olyasha', async (ctx) => {
    await ctx.reply('<---------------------------- Выбери ебыря ------------------------------------>', Markup.inlineKeyboard([
        [Markup.button.callback('Блейдик', 'btn_1')],
        [Markup.button.callback('Моча', 'btn_2'),
        Markup.button.callback('Пупик', 'btn_3')],
    ]))
    // await ctx.answerCbQuery()
})

bot.action('btn_1', async(ctx) => {
    ctx.reply(`${ctx.from.username} пососала пятки Пяток!`)
})

bot.action('btn_2', async(ctx) => {
    ctx.reply(`${ctx.from.username} пососала пятки Блейда!`)
})

bot.action('btn_3', async(ctx) => {
    ctx.reply(`${ctx.from.username} пососала пятки Раера!`)
})
//гача
bot.command('gacha', async (ctx) => {
    try {
        const currentData = randomId()
        console.log(currentData)
        await ctx.replyWithPhoto({
            source: currentData.urlPhoto
        }, {
            has_spoiler: true,
            reply_to_message_id: ctx.message.message_id,
            caption: `Вам выпал - ${currentData.desc} \nЕго легендарность: ${(Math.random() * 5).toFixed(1)} ⭐`,
        })
        ctx.replyWithSticker('CAACAgIAAxkBAAIBRWWC2dqf4ZMGqHf9yzcXGFoVXKVjAALFQwACiiYAAUg16ygkAXwCojME')
    }
    catch(e) {
        console.log(e)
    }
})

bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))