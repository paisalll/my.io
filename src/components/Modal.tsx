import { Transition } from "@headlessui/react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import { clsx } from "clsx";
import React, { Fragment, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

interface AlertDialogProps {
    open: boolean
    title: string
    children: React.ReactNode
    handleOk: React.MouseEventHandler
    github: string
    website?: any
}

const AlertDialog: React.FC<AlertDialogProps> = ({children, title, open, handleOk, website, github}) => {

    const handleGithub = (link: string) => {
        window.open(link)
    }

    const handleWebsite = (link: string) => {
        window.open(link)
    }

    return (
        <AlertDialogPrimitive.Root open={open} >
        <AlertDialogPrimitive.Portal forceMount>
            <Transition.Root show={open}>
            <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <AlertDialogPrimitive.Overlay
                forceMount
                onClick={handleOk}
                className="fixed inset-0 z-20 bg-black/50"
                />
            </Transition.Child>
            <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <AlertDialogPrimitive.Content
                forceMount
                className={clsx(
                    "fixed z-50",
                    "w-[120vw] max-w-lg rounded-lg p-4 md:w-full",
                    "top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]",
                    "bg-sideColor dark:bg-gray-800",
                    "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                )}
                >
                    <AlertDialogPrimitive.Title className="text-lg font-medium text-white">
                    {title}
                    </AlertDialogPrimitive.Title>
                    <AlertDialogPrimitive.Description className="mt-2 text-sm font-normal text-white">
                        {children}
                    </AlertDialogPrimitive.Description>
                <div className="mt-4 flex justify-between">
                    <AlertDialogPrimitive.Cancel
                    className={clsx(
                        "inline-flex select-none justify-center rounded-md px-4 py-2 text-sm font-medium",
                        "bg-white text-gray-900 hover:bg-gray-50 dark:bg-gray-700 dark:text-gray-100 hover:dark:bg-gray-600",
                        "border border-gray-300 dark:border-transparent",
                        "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                    )}
                    onClick={handleOk}
                    >
                    Oke
                </AlertDialogPrimitive.Cancel>
                <div className="flex space-x-2">
                    <AlertDialogPrimitive.Action
                        className={clsx(
                        "inline-flex select-none justify-center rounded-md px-4 py-2 text-sm font-medium",
                        "bg-main text-sideColor hover:bg-purple-700 dark:bg-purple-700 dark:text-gray-100 dark:hover:bg-purple-600",
                        "border border-transparent",
                        "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                        )}
                        onClick={()=> handleGithub(github)}
                        >
                        <FaGithub className="mt-0.5 mr-2"/> See Code
                    </AlertDialogPrimitive.Action>
                    <AlertDialogPrimitive.Action
                        className={clsx(
                        `${website ? 'inline-flex' : 'hidden'} select-none justify-center rounded-md px-4 py-2 text-sm font-medium`,
                        "bg-main text-sideColor hover:bg-purple-700 dark:bg-purple-700 dark:text-gray-100 dark:hover:bg-purple-600",
                        "border border-transparent",
                        "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                        )}
                        onClick={()=> handleWebsite(website)}
                        >
                        <CgWebsite className="mt-0.5 mr-2"/> See Website
                    </AlertDialogPrimitive.Action>
                </div>
                </div>
                </AlertDialogPrimitive.Content>
            </Transition.Child>
            </Transition.Root>
        </AlertDialogPrimitive.Portal>
    </AlertDialogPrimitive.Root>
);
};

export { AlertDialog };