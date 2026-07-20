const ROLES = {
    user: "USER",
    superadmin: "SUPERADMIN",
}

function isSuperAdmin(role){
    return role === ROLES.superadmin;
}

module.exports = { ROLES, isSuperAdmin };