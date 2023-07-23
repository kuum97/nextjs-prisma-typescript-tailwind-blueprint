const bcrypt = require("bcrypt");
const saltRounds = 10;
async function hashPassword(password: string) {
  const salt = await bcrypt.genSalt(saltRounds);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
}

export default hashPassword;
