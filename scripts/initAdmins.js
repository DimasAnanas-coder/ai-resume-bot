const { setRole } = require('../src/db/users');
const { superAdminIds } = require('../src/config/env');
const { consLog } = require('../src/utils/consLog');
const { ROLES } = require('../src/config/constants/roles');

require('../src/utils/protypesFunctions');

async function initAdmins() {
    for (const superAdminId of superAdminIds) {
        const id = superAdminId.trim();
        if (!id) {
            continue;
        }

        await setRole(id, ROLES.superadmin);
        consLog(`Роль суперадмина ${id} установлена`);
    }

    consLog('Суперадмины успешно инициализированы');
}

consLog('Инициализация суперадминов...');
initAdmins().catch((error) => {
    consLog('❌ Ошибка инициализации суперадминов', error);
    process.exit(1);
});
