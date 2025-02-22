const {cmd , commands} = require('../command')

cmd({
    pattern: "owner",
    desc: "owner the bot",
    category: "main",
    react: "👨‍💻",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*HASHAN-MD BOT OWNER📍*

*╭─────────────────────●●►*
*| ᴏᴡɴᴇʀ ɴᴀᴍᴇ:* Mr Hashiya
*| ʏᴏᴜᴛᴜʙᴇ:*
*| ᴡʜᴀᴛꜱᴀᴘᴘ ᴄʜᴀɴɴᴇʟ:* https://whatsapp.com/channel/noname
*╰─────────────────────●●►*

> ©POWERD BY HASHAN-MD
`
// Send the image with caption
      await conn.sendMessage(
        from,
        { image: { url: `https://files.catbox.moe/ok0017.jpg` }, caption: dec },
        { quoted: mek }
      );

    // vCard for Mr. Hasiya
      const vcard2 =
        "BEGIN:VCARD\n" +
        "VERSION:3.0\n" +
        "FN:Mr. Hashiya\n" +
        "ORG:Mr. Hashiya\n" +
        "TEL;type=CELL;type=VOICE;waid=94706042889:+94706042889\n" +
        "EMAIL:hashiyacoder@gmail.com\n" +
        "END:VCARD";

      // vCard for Mr. Senesh
      const vcard1 =
        "BEGIN:VCARD\n" +
        "VERSION:3.0\n" +
        "FN:Mr. Senesh\n" +
        "ORG:Mr. Senesh\n" +
        "TEL;type=CELL;type=VOICE;waid=94773673969:+94 77 367 39 69\n" +
        "EMAIL:senesh@gmail.com\n" +
        "END:VCARD";

    
      // Send both contacts as a single message
      await conn.sendMessage(from, {
        contacts: {
          displayName: "Bot Owners",
          contacts: [{ vcard: vcard1 }, { vcard: vcard2 }],
        },
      });
    } catch (e) {
      console.log(e);
      reply(`${e}`);
    }
  }
);
