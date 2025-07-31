import React from 'react'
import Header from '@/features/admin/Header'
import UserList from '@/features/admin/UserManagement/UserList'
const dummyData = [
    { _id: 1, Name: "Alice Johnson", Email: "alice.johnson@email.com", Gender: "Female", Country: "USA", KlarnaShares: 12, TotalValue: "€ 1,800" },
    { _id: 2, Name: "Bob Smith", Email: "bob.smith@email.com", Gender: "Male", Country: "Germany", KlarnaShares: 24, TotalValue: "€ 3,600" },
    { _id: 3, Name: "Clara Peterson", Email: "clara.p@email.com", Gender: "Female", Country: "UK", KlarnaShares: 15, TotalValue: "€ 2,250" },
    { _id: 4, Name: "David Miller", Email: "david.miller@email.com", Gender: "Male", Country: "France", KlarnaShares: 30, TotalValue: "€ 4,500" },
    { _id: 5, Name: "Emma Williams", Email: "emma.w@email.com", Gender: "Female", Country: "Canada", KlarnaShares: 18, TotalValue: "€ 2,700" },
    { _id: 6, Name: "Frank Thompson", Email: "frank.t@email.com", Gender: "Male", Country: "Sweden", KlarnaShares: 22, TotalValue: "€ 3,300" },
    { _id: 7, Name: "Grace Lee", Email: "grace.lee@email.com", Gender: "Female", Country: "Australia", KlarnaShares: 25, TotalValue: "€ 3,750" },
    { _id: 8, Name: "Henry Martinez", Email: "henry.m@email.com", Gender: "Male", Country: "Spain", KlarnaShares: 16, TotalValue: "€ 2,400" },
    { _id: 9, Name: "Isabella Rossi", Email: "isabella.r@email.com", Gender: "Female", Country: "Italy", KlarnaShares: 20, TotalValue: "€ 3,000" },
    { _id: 10, Name: "Jack Wilson", Email: "jack.wilson@email.com", Gender: "Male", Country: "Netherlands", KlarnaShares: 28, TotalValue: "€ 4,200" },
];

const page = () => {
    return (
        <div>
            <Header />
            <UserList data={dummyData} />
        </div>
    )
}

export default page