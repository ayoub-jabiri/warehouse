export default function Products() {
    return (
        <div className="w-full max-w-7xl p-6 md:p-10 bg-slate-50 flex flex-col gap-6">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2">
                <span className="text-zinc-700 text-xs font-medium uppercase tracking-wider">
                    INVENTORY
                </span>
                <span className="w-1 h-1.5 bg-zinc-700" />
                <span className="text-black text-xs font-bold uppercase tracking-wider">
                    ALL PRODUCTS
                </span>
            </div>

            {/* Header & Actions */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div className="flex flex-col gap-2">
                    <h1 className="text-black text-4xl md:text-5xl font-bold leading-tight">
                        Products
                    </h1>
                    <p className="max-w-xl text-zinc-700 text-base">
                        Manage global stock levels, industrial SKU mapping, and
                        real-time inventory allocation across nodes.
                    </p>
                </div>
                <div className="flex items-center gap-4">
                    <button className="px-6 py-2.5 bg-zinc-200 outline outline-1 outline-offset-[-1px] outline-zinc-500 flex items-center gap-2 text-zinc-900 text-sm font-medium tracking-tight">
                        <span className="w-4 h-3 bg-zinc-900" />
                        Filters
                    </button>
                    <button className="px-8 py-2.5 bg-black flex items-center gap-2 text-white text-sm font-medium tracking-tight">
                        <span className="size-3.5 bg-white" />
                        Add Product
                    </button>
                </div>
            </div>

            {/* Main Card Container */}
            <div className="bg-white shadow-sm outline outline-1 outline-offset-[-1px] outline-neutral-300 flex flex-col overflow-hidden">
                {/* Sub-header */}
                <div className="px-6 py-4 bg-gray-100 border-b border-neutral-300 flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <span className="text-zinc-900 text-sm font-bold uppercase tracking-tight">
                            INVENTORY MATRIX
                        </span>
                        <span className="px-2 py-0.5 bg-orange-500 text-amber-950 text-[10px] font-normal">
                            LIVE SYNC
                        </span>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="size-4 bg-zinc-700" />
                        <span className="w-5 h-4 bg-zinc-700" />
                        <span className="w-1 h-4 bg-zinc-700" />
                    </div>
                </div>

                {/* Table Content Container */}
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        {/* Table Header */}
                        <thead>
                            <tr className="bg-slate-50 border-b border-neutral-300 text-zinc-700 text-xs font-medium uppercase tracking-wide">
                                <th className="px-6 py-4">NAME</th>
                                <th className="px-6 py-4">SKU</th>
                                <th className="px-6 py-4">CATEGORY</th>
                                <th className="px-6 py-4 text-right">PRICE</th>
                                <th className="px-6 py-4">STOCK</th>
                                <th className="px-6 py-4 text-right">
                                    ACTIONS
                                </th>
                            </tr>
                        </thead>

                        {/* Table Body */}
                        <tbody className="divide-y divide-neutral-300">
                            {/* Row 1 */}
                            <tr>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="size-10 bg-zinc-200 flex items-center justify-center">
                                            <div className="w-4 h-5 bg-zinc-700" />
                                        </div>
                                        <span className="text-black text-sm font-medium">
                                            Steel Beam - L400
                                        </span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-zinc-900 text-sm">
                                    IND-SB-400-X
                                </td>
                                <td className="px-6 py-4">
                                    <span className="px-3 py-1 bg-gray-200 rounded-xl text-zinc-700 text-xs uppercase">
                                        STRUCTURAL
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right text-zinc-900 text-sm">
                                    $1,240.00
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-2">
                                        <div className="w-24 h-1.5 bg-gray-200 rounded-xl overflow-hidden">
                                            <div className="w-20 h-full bg-black" />
                                        </div>
                                        <span className="text-zinc-900 text-sm font-bold">
                                            412
                                        </span>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center justify-end gap-3">
                                        <div className="p-1">
                                            <div className="w-5 h-3.5 bg-zinc-900" />
                                        </div>
                                        <div className="p-1">
                                            <div className="size-4 bg-zinc-900" />
                                        </div>
                                        <div className="p-1">
                                            <div className="size-4 bg-zinc-900" />
                                        </div>
                                    </div>
                                </td>
                            </tr>

                            {/* Row 2 */}
                            <tr>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="size-10 bg-zinc-200 flex items-center justify-center">
                                            <div className="w-4 h-5 bg-zinc-700" />
                                        </div>
                                        <span className="text-black text-sm font-medium">
                                            Relay Switch - Phase 3
                                        </span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-zinc-900 text-sm">
                                    ELC-RS-3P-001
                                </td>
                                <td className="px-6 py-4">
                                    <span className="px-3 py-1 bg-gray-200 rounded-xl text-zinc-700 text-xs uppercase">
                                        ELECTRICAL
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right text-zinc-900 text-sm">
                                    $85.50
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-2">
                                        <div className="w-24 h-1.5 bg-rose-200 rounded-xl overflow-hidden">
                                            <div className="w-3 h-full bg-red-700" />
                                        </div>
                                        <span className="text-red-700 text-sm font-bold">
                                            14
                                        </span>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center justify-end gap-3">
                                        <div className="p-1">
                                            <div className="w-5 h-3.5 bg-zinc-900" />
                                        </div>
                                        <div className="p-1">
                                            <div className="size-4 bg-zinc-900" />
                                        </div>
                                        <div className="p-1">
                                            <div className="size-4 bg-zinc-900" />
                                        </div>
                                    </div>
                                </td>
                            </tr>

                            {/* Row 3 */}
                            <tr>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="size-10 bg-zinc-200 flex items-center justify-center">
                                            <div className="w-2.5 h-4 bg-zinc-700" />
                                        </div>
                                        <span className="text-black text-sm font-medium">
                                            Hydraulic Seal - Type V
                                        </span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-zinc-900 text-sm">
                                    MEC-HY-SV-99
                                </td>
                                <td className="px-6 py-4">
                                    <span className="px-3 py-1 bg-gray-200 rounded-xl text-zinc-700 text-xs uppercase">
                                        HYDRAULICS
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right text-zinc-900 text-sm">
                                    $342.15
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-2">
                                        <div className="w-24 h-1.5 bg-gray-200 rounded-xl overflow-hidden">
                                            <div className="w-11 h-full bg-orange-500" />
                                        </div>
                                        <span className="text-zinc-900 text-sm font-bold">
                                            128
                                        </span>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center justify-end gap-3">
                                        <div className="p-1">
                                            <div className="w-5 h-3.5 bg-zinc-900" />
                                        </div>
                                        <div className="p-1">
                                            <div className="size-4 bg-zinc-900" />
                                        </div>
                                        <div className="p-1">
                                            <div className="size-4 bg-zinc-900" />
                                        </div>
                                    </div>
                                </td>
                            </tr>

                            {/* Row 4 */}
                            <tr>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="size-10 bg-zinc-200 flex items-center justify-center">
                                            <div className="w-5 h-3 bg-zinc-700" />
                                        </div>
                                        <span className="text-black text-sm font-medium">
                                            Composite Panel - 2m
                                        </span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-zinc-900 text-sm">
                                    MAT-CP-200-A
                                </td>
                                <td className="px-6 py-4">
                                    <span className="px-3 py-1 bg-gray-200 rounded-xl text-zinc-700 text-xs uppercase">
                                        MATERIALS
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right text-zinc-900 text-sm">
                                    $510.00
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-2">
                                        <div className="w-24 h-1.5 bg-gray-200 rounded-xl overflow-hidden">
                                            <div className="w-full h-full bg-black" />
                                        </div>
                                        <span className="text-zinc-900 text-sm font-bold">
                                            982
                                        </span>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center justify-end gap-3">
                                        <div className="p-1">
                                            <div className="w-5 h-3.5 bg-zinc-900" />
                                        </div>
                                        <div className="p-1">
                                            <div className="size-4 bg-zinc-900" />
                                        </div>
                                        <div className="p-1">
                                            <div className="size-4 bg-zinc-900" />
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Footer / Pagination */}
                <div className="px-6 py-4 bg-slate-50 border-t border-neutral-300 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <span className="text-zinc-700 text-sm">
                        Showing 4 of 2,482 entries
                    </span>
                    <div className="flex items-center gap-1">
                        <button className="size-8 outline outline-1 outline-offset-[-1px] outline-neutral-300 flex justify-center items-center">
                            <span className="w-1 h-1.5 bg-zinc-900" />
                        </button>
                        <button className="size-8 bg-black text-white text-base outline outline-1 outline-offset-[-1px] outline-black flex justify-center items-center">
                            1
                        </button>
                        <button className="size-8 text-zinc-900 text-base outline outline-1 outline-offset-[-1px] outline-neutral-300 flex justify-center items-center">
                            2
                        </button>
                        <button className="size-8 text-zinc-900 text-base outline outline-1 outline-offset-[-1px] outline-neutral-300 flex justify-center items-center">
                            3
                        </button>
                        <button className="size-8 outline outline-1 outline-offset-[-1px] outline-neutral-300 flex justify-center items-center">
                            <span className="w-1 h-1.5 bg-zinc-900" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
