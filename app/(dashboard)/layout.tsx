import AppHeader from "../_components/layout/AppHeader";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <AppHeader />
            <main className="px-10">{children}</main>
        </div>
    );
}
