// Serverdan kelgan xom (raw) API response:
const apiResponse = {
    status: 'success',
    code: 200,
    data: {
        user: {
            id: 'usr_123',
            personal: {
                firstName: 'Alisher',
                lastName: 'Karimov',
                age: 28,
                contacts: {
                    email: 'alisher@gmail.com',
                    phone: '+998901234567',
                    social: {
                        telegram: '@alisher',
                        instagram: null,
                    }
                }
            },
            work: {
                company: 'TechCorp UZ',
                position: 'Senior Developer',
                salary: { amount: 3000, currency: 'USD' },
                skills: ['JavaScript', 'React', 'Node.js', 'PostgreSQL']
            },
            stats: {
                loginCount: 142,
                lastLogin: '2024-01-15',
                isPremium: true,
            }
        }
    },
    meta: { requestTime: '85ms', version: 'v2' }
};

// VAZIFA:
// Faqat destructuring ishlatib, quyidagi tuzilmani yasang.
// Birorta ham dot notation (response.data.user...) ishlatmang!

const {
    data: {
        user: {
            personal: {
                firstName,
                lastName,
                contacts: {
                    email,
                    phone,
                    social: { telegram }
                }
            },
            work: {
                company,
                position,
                salary: { amount, currency },
                skills: [firstSkill, secondSkill, ...otherSkills]
            },
            stats: { isPremium }
        }
    },
    meta: { requestTime }
} = apiResponse;

const formattedUser = {
    fullName: `${firstName} ${lastName}`,
    email,
    phone,
    telegram,
    position: `${position} at ${company}`,
    topSkills: [firstSkill, secondSkill],
    otherSkills,
    salary: `$${amount} ${currency}`,
    isPremium,
    requestTime
};

console.log(formattedUser.fullName);