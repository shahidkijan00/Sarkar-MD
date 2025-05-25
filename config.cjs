// config.js
const fs = require("fs");
require("dotenv").config();

const config = {
  SESSION_ID: process.env.SESSION_ID || "Sarkarmd$eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNE5rNXVMR2ttL0ExbVVybENFa3daOXRHaXNZeXRncFF1aDFRYWFWOGttRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMXNZSFYyTytqOExtL0JrcW9BSGxhNU15YUxzOHo5bEIwdjI1T001QVhTST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyUERsOU9HakFtSG9QODUwK25wb0Y2SERyMVJDcnBWYldoWUcvS2szN244PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJaUzgrVk4xSnc4MlFJQ3lqdmNzR0VMZm0xQWpCQjE2Q1kweE1CODFWWmhBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBMbjNRRWNYZkx0MjlNRHlBcTBSdHZBTkQwUHJZb1MrOUFJcWorZTl3bVU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImE4KzBZRkxMOUhhUlA4Z0ZTU2EwUktZZVhLN1BNMDVTcFVWR3pFcklSa289In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUNWS0VqbG5wSXlKS2c1MHF2eFFMQnZmekFxcnczTEFiOVR1TmNWbWRtYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic2JHSTB1ZmpWZ0JVc0lucnpMVk9UbVFaQ243TjZwUVVZRmp0dGtLTVlUYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBxcVNHTVpTZkNQejUyWGM3UDRML0taV0R3UkNCY1c3aEtxTU5PbFBuR3BiSVg1dWVCdHY4TlQxWmF1RlZzb296YzEwWDBSMlVyZCt4ZUtuSXJGYWlBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjE3LCJhZHZTZWNyZXRLZXkiOiJrb0lEaVlxcXlTMzhNcHdub2NWcGZkbGY1M0c5YnNJeTMzbHpZbGdrUStNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzA3MzIyNDMwMkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJFNTMwNkMzMDgyNTcwNTQzNEUzRThBQTg3MTk1REQ4MiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzQ4MTQ2NjU4fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJTQks3RFZONyIsIm1lIjp7ImlkIjoiOTIzMDczMjI0MzAyOjEzQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCThqnYtNmA2YDZgNmA2YDZgNin24HZgNivINqp2YbZgNmA2q/wk4aqXG5cblxu8JOGqeKBsPCThqpcblxu8JOGqcKz8JOGqlxuXG7wk4ap4oGw8JOGqlxuXG7wk4ap4oG38JOGqlxuXG7wk4apwrPwk4aqXG5cbvCThqnCsvCThqpcblxu8JOGqcKy8JOGqlxuXG7wk4ap4oG08JOGqlxuXG7wk4apwrPwk4aqXG5cbvCThqnigbDwk4aqXG5cbvCThqnCsvCThqoiLCJsaWQiOiI5MDI1MDc4NTM0OTg3NjoxM0BsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0liYTE0Z0JFTnl6eXNFR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Im5wQklYenp1a296VERreW5ON3RYN3Q4NmdTdjVqMzJmbUtVWUJsOXlHaG89IiwiYWNjb3VudFNpZ25hdHVyZSI6IlpOUkV0UFdxQVQ4bDZlaERCVVkzbHdQU3I3aVJJQmdSbXBGT0lWeE9xSjI5UGk0L3I3L09qN2pSYjRPd1RJdTRPZGVxNWFiaTVLK3JxTFZtVGRMNEJBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJHakxqZVhpWmt2dGRQcW1jVXc0VDBOeDNMR1d3SUVQUG5KY2lpOWpiNUp0QTh0N043QlkvYVJYV1UvNnRBaWs3Q1RXNitNWjBLOVVvZTJ4ZnpET1RqUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzA3MzIyNDMwMjoxM0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJaNlFTRjg4N3BLTTB3NU1wemU3Vis3Zk9vRXIrWTk5bjVpbEdBWmZjaG9hIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQTBJQlE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NDgxNDY2NTUsImxhc3RQcm9wSGFzaCI6IjFLNGhINCIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRXFiIn0=",
  PREFIX: process.env.PREFIX || '.',
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN !== undefined ? process.env.AUTO_STATUS_SEEN === 'false' : false, 
  AUTO_DL: process.env.AUTO_DL !== undefined ? process.env.AUTO_DL === 'true' : false,
  AUTO_READ: process.env.AUTO_READ !== undefined ? process.env.AUTO_READ === 'true' : false,
  AUTO_TYPING: process.env.AUTO_TYPING !== undefined ? process.env.AUTO_TYPING === 'true' : turw,
  AUTO_RECORDING: process.env.AUTO_RECORDING !== undefined ? process.env.AUTO_RECORDING === 'true' : true,
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE !== undefined ? process.env.ALWAYS_ONLINE === 'true' : true,
  AUTO_REACT: process.env.AUTO_REACT !== undefined ? process.env.AUTO_REACT === 'false' : false,
   /*auto block only for 212 */
  AUTO_BLOCK: process.env.AUTO_BLOCK !== undefined ? process.env.AUTO_BLOCK === 'true' : true,
  
  AUTO_BIO: process.env.AUTO_BIO !== undefined ? process.env.AUTO_BIO === 'true' : false,
  CHAT_BOT: process.env.CHAT_BOT !== undefined ? process.env.CHAT_BOT === 'true' : false,
  
  REJECT_CALL: process.env.REJECT_CALL !== undefined ? process.env.REJECT_CALL === 'true' : false, 
  NOT_ALLOW: process.env.NOT_ALLOW !== undefined ? process.env.NOT_ALLOW === 'true' : true,
  MODE: process.env.MODE || "private",
  OWNER_NAME: process.env.OWNER_NAME || "SHAHID KING",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "923073224302",
  GEMINI_KEY: process.env.GEMINI_KEY || "AIzaSyCUPaxfIdZawsKZKqCqJcC-GWiQPCXKTDc",
  WELCOME: process.env.WELCOME !== undefined ? process.env.WELCOME === 'true' : false, 
};


module.exports = config;
