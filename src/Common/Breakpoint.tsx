import React from 'react'

export default function Breakpoint() {
    return (
        <div>
            <div className="h-20 xl:bg-purple-500 lg:bg-amber-800 md:bg-amber-400 sm:bg-green-600 bg-cyan-500">
                <p className="xl:flex hidden">extra large</p>
                <p className="xl:hidden lg:flex hidden">large</p>
                <p className="lg:hidden md:flex hidden">medium</p>
                <p className="md:hidden sm:flex hidden">small</p>
                <p className="sm:hidden flex">extra small</p>
            </div>
        </div>
    )
}
