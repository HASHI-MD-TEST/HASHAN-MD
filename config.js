const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });


function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "iM9GkaaC#b7_MvhiUSXNyCd5IkGJrPW_xkSkveogOOSy9VNROcv4",
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/ok0017.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "I AM HASHAN-MD V1. I AM ALIVE NOW",
AUTO_REACT_STATUS: process.env.AUTO_REACT_STATUS || "true",
MODE: process.env.MODE || "public",
ALWAYS_ONLINE : process.env.ALWAYS_ONLINE || "true",
AUTO_TYPING: process.env.AUTO_TYPING || "true",
AUTO_RECORDING: process.env.AUTO_RECORDING || "false",
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
STATUS_REPLY_MESSAGE: process.env.STATUS_REPLY_MESSAGE || "true",
AUTO_STATUS__MSG: process.env.AUTO_STATUS__MSG || "*SEEN YOUR STATUS HASHAN-MD V1💗*",
BOT_NAME: process.env.BOT_NAME || "HASHAN-MD"
};
