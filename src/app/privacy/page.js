import {
    Tabs,
    TabsList,
    TabsTab,
    TabsPanel,
} from '@mantine/core';
import { Footer } from '@/features/common/Footer';
import { Navbar } from '@/features/common/Navbar';
import BackArrow from '@/assets/icons/backArrow';
import React from 'react';
import Link from 'next/link';
import { Tab1 } from '@/features/Privay/Tab1';
import { Tab2 } from '@/features/Privay/Tab2';
import { Tab3 } from '@/features/Privay/Tab3';
import { Tab4 } from '@/features/Privay/Tab4';

const Impressum = () => {
    return (
        <div>
            <Navbar mode="light" />
            <div className="lg:px-[8.333vw] px-4 lg:pt-[42px] lg:pb-[80px] pt-[28px] pb-[48px]">
                <Link
                    className="flex items-center gap-2 font-bold text-[#484848] text-[20px]/[150%]"
                    href="/"
                >
                    <BackArrow /> Home
                </Link>

                <div className="flex flex-col gap-4 lg:mt-8 mt-6">
                    <h2 className="font-bold text-[32px]/[140%] lg:text-[40px]/[52px]">
                        Privacy at BlackRock
                    </h2>

                    {/* Tabs start here */}
                    <Tabs defaultValue="tab1" color="dark" mt="md">
                        <TabsList>
                            <TabsTab value="tab1">Data Collection</TabsTab>
                            <TabsTab value="tab2">Usage</TabsTab>
                            <TabsTab value="tab3">Security</TabsTab>
                            <TabsTab value="tab4">Your Rights</TabsTab>
                        </TabsList>

                        <TabsPanel value="tab1" pt="xs">
                            <Tab1 />
                        </TabsPanel>
                        <TabsPanel value="tab2" pt="xs">
                            <Tab2 />
                        </TabsPanel>
                        <TabsPanel value="tab3" pt="xs">
                            <Tab3 />
                        </TabsPanel>
                        <TabsPanel value="tab4" pt="xs">
                            <Tab4 />
                        </TabsPanel>
                    </Tabs>

                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Impressum;
