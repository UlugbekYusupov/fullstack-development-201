//Ko'p enterprise dasturlarda konfiguratsiya obyektlari (config objects) mavjud bo'ladi. Ular ichma-ich (nested) va murakkab bo'lishi mumkin. Siz quyidagi vazifalarni bajaring:
// Berilgan konfiguratsiya:
const config = {
    server: {
        host: 'localhost',
        port: 3000,
        ssl: false,
    },
    database: {
        host: 'db.example.com',
        port: 5432,
        credentials: {
            username: 'admin',
            password: 'secret123',
        },
        pool: {
            min: 2,
            max: 10,
        }
    },
    cache: {
        ttl: 3600,
        maxSize: 1000,
    },
    features: {
        darkMode: true,
        notifications: false,
        analytics: true,
    }
};

// VAZIFALAR:

// 1. flattenConfig(config) — Ichma-ich config'ni tekis (flat) obyektga aylantirsin.
//    Kalit sifatida "nuqtali yo'l" (dot path) ishlatilsin:
//    Kutilgan:
//    {
//      'server.host': 'localhost',
//      'server.port': 3000,
//      'database.credentials.username': 'admin',
//      'database.pool.max': 10,
//      ...
//    }


function flattenConfig(obj, parentKey = '', result = {}) {
    for (let key in obj) {
        const newKey = parentKey ? `${parentKey}.${key}` : key;

        if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
            flattenConfig(obj[key], newKey, result);
        } else {
            result[newKey] = obj[key];
        }
    }

    return result;
}

// 2. getNestedValue(config, yol) — Dot notation bilan nested qiymatni olsin.
//    getNestedValue(config, 'database.credentials.username') → 'admin'
//    getNestedValue(config, 'server.ssl') → false
//    getNestedValue(config, 'mavjud.emas') → undefined

function getNestedValue(obj, path) {
    return path.split('.').reduce((acc, key) => {
        if (acc && key in acc) {
            return acc[key];
        }
        return undefined;
    }, obj);
}

// 3. setNestedValue(config, yol, yangiQiymat) — Original O'ZGARTIRMASDAN
//    yangi qiymat qo'yilgan yangi config qaytarsin (immutable update).
//    setNestedValue(config, 'server.port', 8080)
//    → yangi config, server.port = 8080, asl config o'zgarmagan

function setNestedValue(obj, path, value) {
    const keys = path.split('.');

    function clone(current, index) {
        const key = keys[index];

        if (index === keys.length - 1) {
            return { ...current, [key]: value };
        }

        return {
            ...current,
            [key]: clone(current[key] || {}, index + 1)
        };
    }

    return clone(obj, 0);
}

// 4. sanitizeConfig(config) — Konfiguratsiyadan "maxfiy" ma'lumotlarni
//    (password, secret, token, key so'zlarini o'z ichiga olgan kalitlar)
//    "***" bilan almashtirib qaytarsin. (Logging uchun muhim!)
//    Kutilgan: database.credentials.password → '***'
function sanitizeConfig(obj) {
    const sensitive = ['password', 'secret', 'token', 'key'];

    function sanitize(current) {
        if (typeof current !== 'object' || current === null) {
            return current;
        }

        const result = {};

        for (let key in current) {
            const lowerKey = key.toLowerCase();

            if (sensitive.some(s => lowerKey.includes(s))) {
                result[key] = '***';
            } else {
                result[key] = sanitize(current[key]);
            }
        }

        return result;
    }

    return sanitize(obj);
}

const flat = flattenConfig(config);
const username = getNestedValue(config, 'database.credentials.username');
const newConfig = setNestedValue(config, 'server.port', 8080);
const safeConfig = sanitizeConfig(config);

console.log(flat);
console.log(username);
console.log(newConfig);
console.log(safeConfig);