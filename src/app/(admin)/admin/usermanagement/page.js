"use client"
import React, { useState, useEffect } from 'react'
import Header from '@/features/admin/Header'
import UserList from '@/features/admin/UserManagement/UserList'
import { useDisclosure } from "@mantine/hooks";
import AddNewUserModal from '@/features/admin/UserManagement/AddNewUserModal';
import EditUserModal from '@/features/admin/UserManagement/EditUserModal';
import PasswordRevealModal from '@/features/admin/UserManagement/PasswordRevealModal';
import LoadingBackdrop from "@/features/common/LoadingBackdrop";
import { useGetUsersList } from '@/hooks/admin/userManagement';
// 
const page = () => {
    const [opened, { open, close }] = useDisclosure(false);
    const [editOpened, { open: openEdit, close: closeEdit }] = useDisclosure(false);
    const [passwordOpen, { open: openPassword, close: closePassword }] = useDisclosure(false);
    const [password, setPassword] = React.useState("");
    const [currentUser, setCurrentUser] = React.useState(null);
    const [filter, setFilter] = useState({ page: 1, pageSize: 10, searchTerm: "" });
    const [debouncedSearch, setDebouncedSearch] = useState(filter.searchTerm);
    useEffect(() => {
        const timeout = setTimeout(() => {
            setFilter((prev) => ({
                ...prev,
                searchTerm: debouncedSearch,
                page: 1,
            }));
        }, 500);
        return () => clearTimeout(timeout);
    }, [debouncedSearch]);
    const { data, isPending } = useGetUsersList(filter);

    return (
        <div>
            {isPending && <LoadingBackdrop />}
            <AddNewUserModal opened={opened} onClose={close} />
            {currentUser &&
                <EditUserModal opened={editOpened} onClose={closeEdit} currentUser={currentUser} />
            }
            <Header initialSearch={debouncedSearch} onSearchChange={setDebouncedSearch} openModal={open} />
            <UserList filter={filter} setFilter={setFilter} data={data} setCurrentUser={setCurrentUser} setPassword={setPassword} openPassword={openPassword} openEdit={openEdit} />
            <PasswordRevealModal opened={passwordOpen} onClose={closePassword} password={password} />
        </div>
    )
}

export default page