const customers = [{
    name: 'Sam',
    address: {
            street: '1234 W Bell Rd',
            city: 'Phoenix',
            zip: '85308',
            state: 'AZ'
        },
        membershipLevel: 'GOLD',
        age: 32
    },
    ];


        const filterCustomers = customers.filter((customers) => {
    return customers.age >=29
    })

        
