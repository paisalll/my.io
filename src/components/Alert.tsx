import { Transition } from "@headlessui/react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import { clsx } from "clsx";
import React, { Fragment, useState } from "react";

interface AlertDialogProps {
    open: boolean
    handleConfirm: React.MouseEventHandler
    title: string
    text: string
}

const Alert: React.FC<AlertDialogProps> = ({open, handleConfirm, title, text}) => {
    let [isOpen, setIsOpen] = useState(false);

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
                onClick={handleConfirm}
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
                        {text}
                    </AlertDialogPrimitive.Description>
                <div className="mt-4 flex justify-between">                
                    <AlertDialogPrimitive.Action
                        className={clsx(
                        "inline-flex select-none justify-center rounded-md px-4 py-2 text-sm font-medium",
                        "bg-main text-sideColor hover:bg-purple-700 dark:bg-purple-700 dark:text-gray-100 dark:hover:bg-purple-600",
                        "border border-transparent",
                        "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                        )}
                        onClick={handleConfirm}
                        > Confirm
                    </AlertDialogPrimitive.Action>
                </div>
                </AlertDialogPrimitive.Content>
            </Transition.Child>
            </Transition.Root>
        </AlertDialogPrimitive.Portal>
    </AlertDialogPrimitive.Root>
    );
};

export { Alert };