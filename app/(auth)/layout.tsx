export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="bg-[#F7F9FB] min-h-screen py-8">
            <div className="container flex justify-center items-center">
                {children}
            </div>
        </div>
    );
}
