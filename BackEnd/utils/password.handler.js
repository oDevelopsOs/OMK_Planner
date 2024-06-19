import pkg from 'bcryptjs';
const { hash, compare } = pkg;

const encript = async (password) => {
    const passHash = await hash(password, 10);
    return passHash;
};

const check = async (password, hashedPassword) => {
    return await compare(password, hashedPassword);
};

export { encript, check };
