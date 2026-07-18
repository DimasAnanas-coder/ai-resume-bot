const { prisma } = require("../lib/prisma");
const { DEFAULT_RESUME_COUNT } = require("../config/constants");
const { consLog } = require("../utils/consLog");
const { cache } = require("../services/cache");
const User = require("../models/cache/User");

/**
 * @param(Int) userId
 * @param(String?) firstName
 * @param(Int?) resumeCount
 */
async function createNewUser(userId, firstName, resumeCount=null) {
    try{
        await prisma.user.upsert({
            where: {
                userId: userId
            },
            update: {
                firstName: firstName,
            },
            create: {
                userId: userId,
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
    const userModel = new User(userId)

    let user = null;
    try {
        user = await cache.get(userModel);
        if (user){
            return user;
        }
    } catch(error) {
        consLog("❌ Ошибка при получении кэша", error);
    }

    try {
        user = await prisma.user.findUnique({
            where: {
                userId: userId
            }
        });
    } catch(error){
        consLog("❌ Ошибка при получении пользователя", error);
        throw new Error("Ошибка в базе данных")
    }

    try {
        await cache.add(userModel, user);
    } catch (error) {
        consLog("❌ Ошибка при записи в кэш", error);
    }
    
    return user;
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
    try{
        await prisma.user.upsert({
            where: { userId: userId },
            update: { role: role },
            create: {
                userId: userId,
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
