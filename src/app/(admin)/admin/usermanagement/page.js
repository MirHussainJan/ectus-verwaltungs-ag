"use client"
import React, { useState } from 'react'
import Header from '@/features/admin/Header'
import UserList from '@/features/admin/UserManagement/UserList'
import { useDisclosure } from "@mantine/hooks";
import { Button } from "@mantine/core";
import AddNewUserModal from '@/features/admin/UserManagement/AddNewUserModal';
import PasswordRevealModal from '@/features/admin/UserManagement/PasswordRevealModal';
import LoadingBackdrop from "@/features/common/LoadingBackdrop";

import { useGetUsersList } from '@/hooks/admin/userManagement';

const page = () => {
    const [opened, { open, close }] = useDisclosure(false);
    const [passwordOpen, { open: openPassword, close: closePassword }] = useDisclosure(false);
    const [password, setPassword] = React.useState("");
    const [currentUser, setCurrentUser] = React.useState(null);
    const [filter, setFilter] = useState({ page: 1, pageSize: 10 });
    const { data, isPending } = useGetUsersList(filter);
    return (
        <div>
            {isPending && <LoadingBackdrop />}
            <AddNewUserModal opened={opened} onClose={close} />
            <Header openModal={open} />
            <UserList filter={filter} setFilter={setFilter} data={data} setCurrentUser={setCurrentUser} setPassword={setPassword} openPassword={openPassword} />
            <PasswordRevealModal opened={passwordOpen} onClose={closePassword} password={password} />
        </div>
    )
}

export default page