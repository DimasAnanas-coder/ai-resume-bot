const { prisma } = require("../lib/prisma");
const { DEFAULT_RESUME_COUNT } = require("../config/constants");
const { consLog } = require("../utils/consLog");

/**
 * @param(Int) userId
 * @param(String?) firstName
 * @param(Int?) resumeCount
 */
async function createNewUser(userId, firstName, resumeCount=null) {
    const userIdBigInt = BigInt(userId);
    try{
        await prisma.user.upsert({
            where: {
                userId: userIdBigInt
            },
            update: {
                firstName: firstName,
            },
            create: {
                userId: userIdBigInt,
                firstName: firstName,
                resumeCount: resumeCount || DEFAULT_RESUME_COUNT
            }
        })
    } catch(error){
        consLog("❌ Ошибка при создании нового пользователя", error);
        throw new Error("Ошибка в базе данных")
    }
    
}

async function getUser(userId){
    const userIdBigInt = BigInt(userId);
    try{
        return await prisma.user.findUnique({
            where: {
                userId: userIdBigInt
            }
        });
    } catch(error){
        consLog("❌ Ошибка при получении пользователя", error);
        throw new Error("Ошибка в базе данных")
    }
}

async function getResumeCount(userId){
    const user = await getUser(userId);
    return user?.resumeCount;
}

/**
 * 
 * @param { Int } userId 
 * @param { String } role 
 */
async function setRole(userId, role){
    const userIdBigInt = BigInt(userId);
    try{
        await prisma.user.upsert({
            where: { userId: userIdBigInt },
            update: { role: role },
            create: {
                userId: userIdBigInt,
                firstName: role.capitalize(),
                resumeCount: DEFAULT_RESUME_COUNT,
                role: role,
            },
        });
    } catch(error){
        consLog("❌ Ошибка при установке роли пользователя", error);
        throw new Error("Ошибка в базе данных");
    }
}

async function getRole(userId){
    const user = await getUser(userId);
    return user?.role;
}

module.exports = { 
    createNewUser, 
    getUser, 
    getResumeCount,
    setRole,
    getRole
};
