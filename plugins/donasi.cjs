let handler = async m => m.reply(`
╭─「 Donasi 」
│ • INDOSAT [085859047172]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? https://wa.me/6285859047172
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
