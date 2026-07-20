export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <h1>Dashboard layout</h1>
            <main className="px-10">{children}</main>
        </div>
    );
}
