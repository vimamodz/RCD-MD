//#ENJOY
/**
**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "Sri lanka .";
global.mongodb = process.env.MONGODB_URI || "mongodb://mongo:bREwFKCVLDvzfqqsqVNXloIYCiiLBbuR@monorail.proxy.rlwy.net:38244";
global.allowJids = process.env.ALLOW_JID || "94789958225@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://rcdnew:DUjQ85jkrvaF5HmsoyjBgyoSYhpsHIjN@dpg-cqamj22ju9rs739asi6g-a.oregon-postgres.render.com/rcd";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "srilank/ampara";
global.github = process.env.GITHUB || "https://github.com/DEXTER-BOTS/RCD-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "94789958225";
global.sudo = process.env.SUDO || "94789958225,94757660788,94770730717,94785274495,94753574803";
global.owner = process.env.OWNER_NUMBER || "94789958225,94753574803";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "";
global.scan = "";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkRUeHB1SVAwSzhvc3pwT2FnUDFvZWU3WVJVaTdCUzJ5MmZGSkFRS0xWMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN3pyalpPVmROTmVKNWJpa2hiakZ0QlREd1FCNnI5UE1NNHNOMnBVY3RqUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVQ1EyOVNlMDBrVHJJNjI4VjZldEtQVEhra2tUQlZWNHBrSFU5ODlGbUZrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhWUJsclZ6eFIyN3B1NFpUcnZtNG1GYUl4T0RrS3ZON0lFdEJ5bFk0NmxRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdOYmUvT1NrWk1EVTNOOXFCU3QwSEZzalVlV0xVOWlYUkQrVWdPT0ZTSFk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdmZVB4SjRiWDhwMXp3QStLQzZGbU5tMEFtMy9YTEVhUTk3V1hWb0ZYQ2s9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0l1VUtSWWVFbHhUbWhaM1VXNkRkaFRHZlQ0NmVKSWg2ak85QnFkbXVrST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieTJ1OXZ4dlFEUUo2VXUrbjN3ZWJzTjIyS0pQUlRkeHNUVjY3QzhRc1ZHVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjIwVmdPeTBtWkErblJkbVh6djJoVkJYa3g0UUNQTURmczRLd09WL09DQmFaR2I4N0ptYm82a2dOaEM5NGtXMG5qWWhLZlFwZGF2Z2dIb1MyakpucGh3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTgyLCJhZHZTZWNyZXRLZXkiOiJqZUhML0hZaE13TDNvVk13d3g3VWpDVCtaeldqaW1VbEJzYjNtK1dLUmNjPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiItSkZHUzBYNFI1cVRvek9CbWFGcWhnIiwicGhvbmVJZCI6Ijc4OTZhYjliLTBmMDYtNDQyYy1hNzJkLWU3YzJkMjI2OThlZCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJURmE1c244RUF0SmZPOTlOM2RiUWRuSWZRajQ9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSC9zYnZDQzBjL3U2UzlpZFMxMmtKT1AxUWFNPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IldZUzc0ODVUIiwibWUiOnsiaWQiOiI5NDc3NjczNDAzMDo1MUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZqF8J2ZuPCdmbzwnZmwIPCdmbzwnZm+8J2Zs/CdmoIo8J2ao/Cdmbwg8J2ag/CdmbTwnZmw8J2ZvCkg8J2ajPCdmpjwnZqX8J2anPCdmp0g8J2anPCdmp3wnZqb8J2akvCdmpfwnZqQ8J2anCBcIvCdmofwnZqH8J2ah1wiXiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSkhKdnFjQ0VJKzEvclFHR0FnZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiL016WXVaaHFab2ZXbkZMQXZxNFlmM2xVZEhZTUhsZ3c2VGFueDRoUlZrVT0iLCJhY2NvdW50U2lnbmF0dXJlIjoibDU4ZmUzc29TTjVhc2l3alNsY1dHZXNGSHUvSFBza2F5a3F2eFdFbldZRGthT0swTkM4eTBhRVpIcEw3OTU1TzFYUUJ2Wmtwako3ekh5R3BNd1pURFE9PSIsImRldmljZVNpZ25hdHVyZSI6IkhyMnZIQlVCc0p2NFc0WVkxQk1HUnRFUzM3N1AvbHZGQjA1Y0JNOFFHUUw4dUlDRkIwelF6M015eDRacVFCMVFrN1RaTnNsT21YRGNEV2MrR0xzcmp3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NzY3MzQwMzA6NTFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZnpNMkxtWWFtYUgxcHhTd0w2dUdIOTVWSFIyREI1WU1PazJwOGVJVVZaRiJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMTczNTgzNiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFGRnAifQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝗥𝗖𝗗 𝗠𝗗 𝗣𝗢𝗪𝗘𝗥 𝗕𝗬 🇱🇰",
  author: process.env.PACK_AUTHER || "𝐑𝐂𝐃",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐑𝐂𝐃 𝐌𝐃",
  ownername: process.env.OWNER_NAME || "𝗥𝗖𝗗 𝗧𝗘𝗔𝗠",
  errorChat: process.env.ERROR_CHAT || "94789958225",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
